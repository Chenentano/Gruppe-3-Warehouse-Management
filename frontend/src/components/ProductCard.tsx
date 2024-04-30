import { Product } from "../types/Product";
import "../ProductCard.css";
import axios from "axios";

export type ProductProps = {
    product: Product;
};

export default function ProductCard({ product }: ProductProps) {

    const handleDelete = () => {
        axios.delete("api/product/delete/" + product.id)
            .then(() => {console.log("Klappt!")});
    };

    return (
        <li className="product-card">
            <div className="product-content">
                <h2 className="product-name">Product-Name{product.productName}</h2>
                <p className="product-category">Product ID: {product.productId}</p>
                <p className="product-category">Category: {product.category}</p>
                <p className="product-quantity">Quantity: {product.productQuantity}</p>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </li>
    );
}
