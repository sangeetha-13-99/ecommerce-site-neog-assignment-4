import axios from "axios";

// get and post the carts,delete and post the cart 
export const getCart=async(token)=>{
    return await axios.get('/api/user/cart',{
        headers: {
            authorization: token,
        }
    })
    
}
export const postCart=async(token,product)=>{
    return await axios.post('/api/user/cart',{
        product
    },{
        headers:{
            authorization: token,
        }
    })
}
export const deleteCartProduct=async(token,productId)=>{
    return await axios.delete(`/api/user/cart/${productId}`,{
        headers:{
            authorization: token,
        }
    })
    
}
export const postCartProduct=async(token,productId,type)=>{
    return await axios.post(`/api/user/cart/${productId}`,
    {
        action: {
          type,
        }
    },{
        headers:{
            authorization: token,
        }
    });
}