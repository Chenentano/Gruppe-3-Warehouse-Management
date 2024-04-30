import QuantityStatus from "../components/QuantityStatus.tsx";
import ProductCard from "../components/ProductCard.tsx";
import {Product, ProductCategory} from "../types/Product.tsx";
import {ChangeEvent, useEffect, useState} from "react";
import axios from "axios"


type InfoType = {
    prev: string | null,
    next: string | null
    pageCount:number
}

export default function StartPage() {

    const [product, setProduct] = useState<Product[]>([])
    const [input, setInput] = useState<string>("")
    const [status, setStatus] = useState<string>("All")
    const [info, setInfo] = useState<InfoType>({prev: null, next: null, pageCount:0})
    const [page, setPage] = useState<number>(1)

    function handleOnChangeInput(event: ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value)
    }

    function handleOnSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        setStatus(event.target.value)
    }

    function pageUp() {
        if (info.next) {
            setPage(page +1)
        }
    }

    function pageDown() {
        if (info.prev) {
            setPage(page -1 )
        }
    }


    function getProduct(page: number) {
        axios.get("/api/product/get/" + page).then(response => {

            setInfo({next: response.data.info.next, prev: response.data.info.prev, pageCount:response.data.info.pages})
            setProduct(response.data.results)

        })
    }

    useEffect(() => {getProduct(3)}, [])

    return <>
        <header>
            <div>


                <input type={"text"} onChange={handleOnChangeInput} value={input}/>
                <QuantityStatus status={status} onChange={handleOnSelectChange} />
            </div>
            <nav>
                <p>Id {3} </p>
                <button onClick={pageDown}>Prev</button> / <button onClick={pageUp}>Next</button>
            </nav>
        </header>

        <ul>
            {product.filter(product => { return product.category === ProductCategory.NONE && ProductCategory.GENERAL || status === "All" })
                .filter(product => {
                    return product.productName.toLowerCase().includes(input.toLowerCase()) // true or false
                }).map((product: Product) => {
                    return <ProductCard key={product.productId} product={product} showBackToMainPage={false} />
                })}
        </ul>
    </>
}