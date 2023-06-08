import axios from "axios";

export const fetchCategory=async()=>{
    try{
        const {categories} = await axios.get('/api/categories').then(response=>response.data);
        return categories;
    }
    catch(error){
        throw new Error({status:error.status,message:error.message})
    }
}
//  fetch the products
export const fetchProducts=async()=>{
    try{
        const {products} = await axios.get('/api/products').then(response=>response.data);
        return products;
    }
    catch(error){
        throw new Error({status:error.status,message:error.message})
    }
}
