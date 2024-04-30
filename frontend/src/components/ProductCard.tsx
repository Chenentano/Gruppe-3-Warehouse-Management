import { Product } from "../types/Product.tsx";
import "../ProductCard.css";

type ProductProps = {
    product: Product;
    showBackToMainPage: boolean;
};

export default function ProductCard({ product }: ProductProps) {
    return (
        <li className="product-card">
            <div className="product-content">
                <h2 className="product-name">{product.productName}</h2>
                <p className="product-category">Produkt ID: {product.productId}</p>
                <p className="product-category">Category: {product.category}</p>
                <p className="product-quantity">Quantity: {product.productQuantity}</p>
            </div>
        </li>
    );
}