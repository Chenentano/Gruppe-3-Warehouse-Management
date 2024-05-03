import { Product } from "../types/Product";
import "../ProductCard.css";
import axios from "axios";
import {Link} from "react-router-dom";



export type ProductProps = {
    product: Product;
};

export default function ProductCard({ product }: ProductProps) {

    const handleDelete = () => {
        axios.delete("api/product/delete/" + product.id)
            .then(() => {
                console.log("Test");
            });
    };

    const handleEdit = () => {


    };



    return (
        <li className="product-card">
            <div className="product-card">
                <div className="product-content">
                    <h3 className="product-category">Product ID: <span
                        className="larger-text">{product.productId}</span></h3>
                    <p className="product-name larger-text">{product.productName}</p>
                    <p className="product-category larger-text">Category: <br/> <span
                        className="smaller-text">{product.category}</span></p>
                    <p className="product-quantity larger-text">Quantity: <br/> <span
                        className="smaller-text">{product.productQuantity}</span></p>
                    <button onClick={handleDelete} className="larger-text">Delete</button>
                    <button onClick={handleEdit} className="larger-text">Edit <Link to={"edit/" + product.productQuantity}>Here</Link> </button>

                </div>
            </div>
        </li>
    );
}
