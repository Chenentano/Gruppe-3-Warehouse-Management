import {Product} from "../App.tsx";
import {Link} from "react-router-dom";

type ProductProps = {
    product: Product
    showBackToMainPage: boolean
}
export default function ProductCard({product, showBackToMainPage}:ProductProps) {
    return <li key={product.id}>
        <h2>{product.name}</h2>
        <h3>Category: {product.category}</h3>
        <h4>Quantity: {product.quantity}</h4>
        {showBackToMainPage ? <Link to={"/"}>Got back to main page </Link> :
            <Link to={"/product/" + product.id}>Show product detail page</Link>}
    </li>
}

