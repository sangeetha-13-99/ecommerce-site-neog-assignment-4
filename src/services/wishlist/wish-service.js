import axios from "axios"
// get and post the whishlist

export const getWishList=async(token)=>{
    return await axios.get('/api/user/wishlist',{
        headers:{
            authorization: token,
        }
    });
}

export const postWishList=async(token,product)=>{
    return await axios.post(
        "/api/user/wishlist",
        {
          product,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
}

export const deleteWishList=async(token,productId)=>{
    return await axios.delete(`/api/user/wishlist/${productId}`,
        {
            headers: {
              authorization: token,
            },
        }
    );
}