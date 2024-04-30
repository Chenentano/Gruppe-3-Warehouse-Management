export interface Product {
    productId: string;
    productName: string;
    category: ProductCategory; // Use ProductCategory enum
    productQuantity: number;
}


export enum ProductCategory{
    NONE,
    GENERAL
}