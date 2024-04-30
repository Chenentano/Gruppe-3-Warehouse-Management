import React from 'react';

const AddProductForm: React.FC = () => {
    return (
        <form>
            <label>
                Product ID:
                <input type="text" name="productId" required />
            </label>
            <label>
                Name:
                <input type="text" name="name" required />
            </label>
            <label>
                Category:
                <input type="text" name="category" required />
            </label>
            <label>
                Quantity:
                <input type="number" name="quantity" required />
            </label>
            <label>
                Status:
                <input type="text" name="status" required />
            </label>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProductForm;