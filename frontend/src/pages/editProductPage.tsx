import {useEffect, useState} from "react";
import {useParams} from "react-router";
import axios from "axios";
import {EditProductCard} from "../components/EditProductCard.tsx";
import {Product, ProductCategory} from "../types/Product.tsx";


export function EditProductPage(): JSX.Element {
    const [product, setProduct] = useState<Product>({

        productId: "",
        productName: "",
        category: ProductCategory,
        productQuantity: 1

    });

    const params = useParams()

    useEffect(() => {
            axios
                .get("/api/product/" + params.id)
                .then(response => {
                    setProduct(response.data)
                })
                .catch(reason => console.log(reason.message))
        },
        [params.id]
    )

    return (<>
        <EditProductCard product={product} />
    </>)

}