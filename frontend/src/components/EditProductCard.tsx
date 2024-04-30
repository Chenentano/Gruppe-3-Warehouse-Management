import {ChangeEvent, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Product, ProductCategory} from "../types/Product.tsx";
import axios from "axios";


type EditCardParams = {
    product: Product,
}

export function EditProductCard({product}: EditCardParams) {
    const [productId, setProductId]=useState<string>("")
    const [productName, setProductName]= useState<string>("")
    const [category, setCategory] = useState<ProductCategory[]>([]);
    const [productQuantity, setProductQuantity] = useState<number>(1);
    const navigate = useNavigate();

    useEffect(() => {
            setProductId(product.productId);
            setProductName(product.productName);
            setCategory(product.category(ProductCategory);
            setProductQuantity(product.productQuantity)
        }, [product]
    )

    function handleProductIdOnChange(event: ChangeEvent<HTMLInputElement>): void{
        setProductId(event.target.value)
    }

    function handleProductNameOnChange(event: ChangeEvent<HTMLInputElement>): void{
        setProductName(event.target.value)
    }
    function handleCategoryOnChange(event: ChangeEvent<HTMLInputElement>): void {
        setCategory(event.target.value);
    }

    function handleProductQuantityOnChange(event: ChangeEvent<HTMLSelectElement>): void {
        setProductQuantity(event.target.value());
    }

    function handleSaveButtonClick() {
        const newProduct = {

            productId: product.productId,
            productName: product.productName,
            category: product.category,
            productQuantity: product.productQuantity

        }
        axios
            .put("/api/product/" + product.productId + "/update", newProduct)
            .then(() => {
                navigate("/product/" + product.productId)
            })
    }

    return (<>
        <div className="edit-product-card">
            <h3>EditProductCard</h3>


            <div>
                <label htmlFor={"productId"}>ProductId: </label>
                <input id={"productId"} name={"productId"} type={"text"} value={productId}
                       onChange={handleProductIdOnChange}/>
            </div>


            <div>
                <label htmlFor={"productName"}>ProductName: </label>
                <input id={"productName"} name={"productName"} type={"text"} value={productName}
                       onChange={handleProductNameOnChange}/>
            </div>


            <div>
                <label htmlFor={"category"}>Category: </label>
                <input id={"category"} name={"category"} type={"text"} value={category}
                       onChange={handleCategoryOnChange}/>
            </div>
            <div>
                <label htmlFor={"productQuantity"}>ProductQuantity: </label>
                <input id={"productQuantity"} name={"productQuantity"} type={"number"} value={productQuantity}
                       onChange={handleProductQuantityOnChange}/>
            </div>
            <div>
                <button onClick={handleSaveButtonClick}>Save</button>
            </div>
        </div>
    </>)


}