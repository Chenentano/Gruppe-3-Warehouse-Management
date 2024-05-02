import QuantityStatus from "../components/QuantityStatus.tsx";
import ProductCard from "../components/ProductCard.tsx";
import {Product, ProductCategory} from "../types/Product.tsx";
import {ChangeEvent, useEffect, useState} from "react";
import axios from "axios";


export default function StartPage() {

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

    return (
        <>
            <header>
                <div>
                    <input type="text" onChange={handleOnChangeInput} value={input} />
                    <QuantityStatus status={status} onChange={handleOnSelectChange} />
                </div>
            </header>

            <ul>
                {products
                    .filter(product => status === "All" || product.category === ProductCategory.None)
                    .filter(product => product.productName.toLowerCase().includes(input.toLowerCase()))
                    .map((product: Product) => (
                        <ProductCard key={product.productId} product={product} />
                    ))}
            </ul>
        </>
    );
}
