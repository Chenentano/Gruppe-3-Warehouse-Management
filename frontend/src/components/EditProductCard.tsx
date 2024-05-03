import {Product, ProductCategory} from "../types/Product.tsx";
import axios from "axios";
import React, { useState } from "react";
import "../EditProductCard.css";

const EditProductCard: React.FC = () => {

    const [editData, setEditData] = useState<Product>({
        id:"",
        productId: '',
        productName: '',
        category:ProductCategory.None,
        productQuantity: 0
    });

    const [successMessage, setSuccessMessage] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setEditData({ ...editData, [name]: value });
    };

    const handleEdit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.put('/api/product/edit', editData,
                {headers:{
                    'Content-Type': 'application/json'
                }});



            console.log('ProductCard edited:', response.data);



            setEditData({
                id: "",
                productId: '',
                productName: '',
                category: ProductCategory.None,
                productQuantity: 0
            });
            setSuccessMessage('ProductCard edit success!');
        } catch (error) {
            console.error('Error! ProductCard not edited:', error);
        } finally {
            setSuccessMessage('');
        }

    };

    return (
        <form onSubmit={handleEdit} className="edit-ProductCard">

            <label className="form-label">
                Product ID:
                <input type="text" name="productId" value={editData.productId} onChange={handleChange}
                       className="form-input" required/>
            </label>
            <label className="fomr-label">
                Name:
                <input type="text" name="productName" value={editData.productName} onChange={handleChange}
                       className="form-input" required/>
            </label>
            <label className="form-label">
                Category:
                <select name="category" value={editData.category} onChange={handleChange} className="form-select"
                        required>
                    {Object.keys(ProductCategory)
                        .filter((key) => isNaN(Number(ProductCategory[key as keyof typeof ProductCategory])))
                        .map((key) => (
                            <option key={key} value={ProductCategory[key as keyof typeof ProductCategory]}>
                                {ProductCategory[key as keyof typeof ProductCategory]}
                            </option>
                        ))}
                </select>
            </label>
            <label className="form-label">
                Quantity:
                <input type="number" name="productQuantity" value={editData.productQuantity} onChange={handleChange}
                       className="form-input" required/>
            </label>
            <button type="submit" className="form-button">Edit ProductCard
            </button>
            {successMessage && <div className="success-message">{successMessage}</div>}
        </form>
    );
};

export default EditProductCard;


