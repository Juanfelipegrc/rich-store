import { products } from "../data/products";


export const getByProductName = (name ='') => {
    name = name.toLocaleLowerCase().trim();
    if(name.length === 0) return [];
    return products.filter(product => product.name.toLocaleLowerCase().includes(name))
}