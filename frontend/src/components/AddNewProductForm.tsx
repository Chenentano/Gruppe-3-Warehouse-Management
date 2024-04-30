import React, { useState } from 'react';
import axios from 'axios';
import { Product, ProductCategory } from "../types/Product.tsx";
import "../AddNewProductFormStyle.css";

const AddProductForm: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const [formData, setFormData] = useState<Product>({
        productId: '',
        productName: '',
        category: ProductCategory.None,
        productQuantity: 0
    });

    const [successMessage, setSuccessMessage] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/product/add', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Product successfully added:', response.data);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            setFormData({
                productId: '',
                productName: '',
                category: ProductCategory.None,
                productQuantity: 0,
            });
            setSuccessMessage('Produkt wurde erfolgreich hinzugefügt!');
        } catch (error) {
            console.error('Error adding product:', error);
        } finally {
            setSuccessMessage('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-product-form">
            <label className="form-label">
                Product ID:
                <input type="text" name="productId" value={formData.productId} onChange={handleChange} className="form-input" required />
            </label>
            <label className="form-label">
                Name:
                <input type="text" name="productName" value={formData.productName} onChange={handleChange} className="form-input" required />
            </label>
            <label className="form-label">
                Category:
                <select name="category" value={formData.category} onChange={handleChange} className="form-select" required>
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
                <input type="number" name="productQuantity" value={formData.productQuantity} onChange={handleChange} className="form-input" required />
            </label>
            <button type="submit" className="form-button">Add Product</button>
            {successMessage && <div className="success-message">{successMessage}</div>}
        </form>
    );
};

export default AddProductForm;
