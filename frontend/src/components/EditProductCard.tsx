

import {Product, ProductCategory} from "../types/Product.tsx";
import axios from "axios";
import {useState} from "react";

const EditProductCard: React.FC = () => {
    const [editData, setEditData] = useState<Product>({
        productId: '',
        productName: '',
        category: ProductCategory.NONE,
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
            const response = await axios.post('/api/product/edit', editData);
            console.log('ProductCard edited:', response.data);
            setEditData({
                productId: '',
                productName: '',
                category: ProductCategory.NONE,
                productQuantity: 0,
            });
            setSuccessMessage('ProductCard edit success!');
        } catch (error) {
            console.error('Error! ProductCard not edited:', error);
        }
    };

    return (
        <aside  onSubmit={handleEdit} className="edit-ProductCard">
            <label className="edit-label">
                Product ID:
                <input type="text" name="productId" value={editData.productId} onChange={handleChange} className="edit-input" required />
            </label>
            <label className="edit-label">
                Name:
                <input type="text" name="productName" value={editData.productName} onChange={handleChange} className="edit-input" required />
            </label>
            <label className="edit-label">
                Category:
                <select name="category" value={editData.category} onChange={handleChange} className="edit-select" required>
                    {Object.keys(ProductCategory)
                        .filter((key) => isNaN(Number(ProductCategory[key as keyof typeof ProductCategory])))
                        .map((key) => (
                            <option key={key} value={ProductCategory[key as keyof typeof ProductCategory]}>
                                {ProductCategory[key as keyof typeof ProductCategory]}
                            </option>
                        ))}
                </select>
            </label>
            <label className="edit-label">
                Quantity:
                <input type="number" name="productQuantity" value={editData.productQuantity} onChange={handleChange} className="edit-input" required />
            </label>
            <button type="submit" className="edit-button">Edit ProductCard
           </button>
            {successMessage && <div className="success-message">{successMessage}</div>}
        </aside>
    );
};

export default EditProductCard;


