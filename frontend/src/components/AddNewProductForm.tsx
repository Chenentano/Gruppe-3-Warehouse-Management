import React, { useState } from 'react';
import axios from 'axios';
import { Product, ProductCategory } from "../types/Product.tsx";

const AddProductForm: React.FC = () => {
    const [formData, setFormData] = useState<Product>({
        productId: '',
        productName: '',
        category: ProductCategory.NONE,
        productQuantity: 0
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/product/add', formData);
            console.log('Product successfully added:', response.data);
            setFormData({
                productId: '',
                productName: '',
                category: ProductCategory.NONE,
                productQuantity: 0,
            });
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Product ID:
                <input type="text" name="productId" value={formData.productId} onChange={handleChange} required />
            </label>
            <label>
                Name:
                <input type="text" name="productName" value={formData.productName} onChange={handleChange} required />
            </label>
            <label>
                Category:
                <select name="category" value={formData.category} onChange={handleChange} required>
                    {Object.keys(ProductCategory)
                        .filter((key) => isNaN(Number(ProductCategory[key as keyof typeof ProductCategory])))
                        .map((key) => (
                            <option key={key} value={ProductCategory[key as keyof typeof ProductCategory]}>
                                {ProductCategory[key as keyof typeof ProductCategory]}
                            </option>
                        ))}
                </select>
            </label>
            <label>
                Quantity:
                <input type="number" name="productQuantity" value={formData.productQuantity} onChange={handleChange} required />
            </label>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProductForm;
