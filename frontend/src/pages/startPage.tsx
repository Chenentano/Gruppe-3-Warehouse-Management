import QuantityStatus from "../components/QuantityStatus.tsx";
import ProductCard from "../components/ProductCard.tsx";
import {Product} from "../types/Product.tsx";
import {ChangeEvent, useEffect, useState} from "react";
import axios from "axios";
import {FilterValues} from "../components/Filter.tsx";


type StartPageProps = {
    filterValues: FilterValues;
}

export default function StartPage(props: StartPageProps) {

    const [products, setProducts] = useState<Product[]>([]);
    const [input, setInput] = useState<string>("");
    const [status, setStatus] = useState<string>("All");

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

    function handleOnChangeInput(event: ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value);
    }

    function handleOnSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        setStatus(event.target.value);
    }

    function doFilter(product: Product): boolean {
        let seachtext = props.filterValues.text.toLowerCase();

        switch (props.filterValues.category) {
            case "productId":
                return (product.productId.toLowerCase().includes(seachtext));
            case "name":
                return (product.productName.toLowerCase().includes(seachtext));
            case "category":
                return (product.category.toString().toLowerCase().includes(seachtext));
            case "quantity":
                return (product.productQuantity.toString().toLowerCase().includes(seachtext));
        }
        return true;
    }

    return (
        <>
        <header>
            <div>
                <input type="text" onChange={handleOnChangeInput} value={input}/>
                <QuantityStatus status={status} onChange={handleOnSelectChange}/>
            </div>
        </header>

        <ul>
            {products
                //.filter(product => status === "All" || product.category === ProductCategory.NONE && ProductCategory.GENERAL)
                //.filter(product => product.productName.toLowerCase().includes(input.toLowerCase()))
                .filter(product => doFilter(product))
                .map((product: Product) => (
                <ProductCard key={product.productId} product={product} showBackToMainPage={false}/>
        ))}
        </ul>
</>
)
    ;
}
