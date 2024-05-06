import ProductCard from "../components/ProductCard.tsx";
import {Product} from "../types/Product.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {FilterValues} from "../components/Filter.tsx";


type StartPageProps = {
    filterValues: FilterValues;
}

export default function StartPage(props: StartPageProps) {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        // Fetch all products when the component mounts
        getAllProducts();
    }, []);

    function getAllProducts() {
        axios.get("/api/product/getAll").then(response => {
            setProducts(response.data);
        }).catch(error => {
            console.error("Error fetching products:", error);
        });
    }

    function doFilter(product: Product): boolean {
        if (!props.filterValues) {
            return true;
        }
        const searchtext = props.filterValues.text.toLowerCase();

        switch (props.filterValues.category) {
            case "productId":
                return (product.productId.toLowerCase().includes(searchtext));
            case "name":
                return (product.productName.toLowerCase().includes(searchtext));
            case "category":
                return (product.category.toString().toLowerCase().includes(searchtext));
            case "quantity":
                return (product.productQuantity.toString().toLowerCase().includes(searchtext));
        }
        return true;
    }

    return (
        <>
            <ul className={"product-list"}>
                {products
                    .filter(product => doFilter(product))
                    .map((product: Product) => (
                        <ProductCard key={product.productId} product={product} showBackToMainPage={false}/>
                    ))}
            </ul>
        </>
    )
        ;
}
