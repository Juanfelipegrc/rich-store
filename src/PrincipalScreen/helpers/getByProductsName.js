
import { products } from "../data/products";



export const getByProductsName = (name = '') => {
    name = name.toLocaleLowerCase().trim();
    if(name.length === 0) return [];
    return products.filter(product => product.name.toLocaleLowerCase().includes(name) && product.name.charAt(0).toLowerCase() === name.charAt(0).toLowerCase())
}
