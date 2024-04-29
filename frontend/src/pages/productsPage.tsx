import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Product} from "../App.tsx";
import ProductCard from "../components/ProductCard.tsx";
import axios from "axios";



export default function ProductsPage() {

    const [product, setProduct] = useState<Product>({} as Product)

    const params = useParams()

    useEffect(() => {
        axios.get("https://localhost:8080/api/product/" + params.id).then(response => {
            setProduct(response.data)
        })
    }, [params.id])

    return <><ProductCard product={product} showBackToMainPage={true} /></>
}