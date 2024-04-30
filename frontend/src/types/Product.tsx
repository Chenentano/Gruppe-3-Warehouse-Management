export interface Product {
    id:string;
    productId: string;
    productName: string;
    category: ProductCategory; // Use ProductCategory enum
    productQuantity: number;
}


export enum ProductCategory{
    None,
    Autos,
    Baby,
    Baumaterial,
    Computer,
    Fashion,
    Games,
    Garten,
    Haustiere,
    Kosmetik,
    Spielzeug
}