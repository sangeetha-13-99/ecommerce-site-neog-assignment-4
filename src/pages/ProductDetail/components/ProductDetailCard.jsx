import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProductsContext } from "../../../store/productsContext";
import { useAuthContext } from "../../../store/authContext";
import { deleteWishList, postWishList } from "../../../services/wishlist/wish-service";
import { deleteCartProduct, postCart } from "../../../services/cart/cart-service";
import { colors } from "../../../constant";
import { ProductDetailCardDiv } from "./ProductDetailCardCss";

export const ProductDetailCard = ({ product }) => {

    const navigate=useNavigate();
    const {AddToWishList,DeleteFromWishList,DeleteFromCart,AddToCart}=useProductsContext();
    const {authData:{isLoggedIN}}=useAuthContext();

  const wishListHandler=async (e)=>{
    e.preventDefault();
    const token=localStorage.getItem('token');
    if(!isLoggedIN || !token){
      return navigate("/login",{state:`/product/${product._id}`});
    }
    if(!product.isLiked){
      const {data:{wishlist:wishListData}}=await postWishList(token,product);
      AddToWishList(product._id,wishListData);
    }
    else{
      const {data:{wishlist:wishListData}}=await deleteWishList(token,product._id);
      DeleteFromWishList(product._id,wishListData);
    }
  }

  const cartHandler=async(e)=>{
    e.preventDefault();
    const token=localStorage.getItem('token');
    if(!isLoggedIN || !token){
      return navigate("/login",{state:`/product/${product._id}`});
    }
    if(!product.isAddedTocart){
      const {data:{cart:CartData}}=await postCart(token,product);
      AddToCart(product._id,CartData);
    }
    else{
        const {data:{cart:CartData}}=await deleteCartProduct(token,product);
        DeleteFromCart(product._id,CartData);
    }
  }
  
    return (
    <ProductDetailCardDiv>
      <div className="product-detail">
        <div className="product-image">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        {/* <div className="product-sub-images">
          {
              product.images.map((image,index)=>{
                  return (
                    <div key={index} className="product-sub-image">
                      <img  src={image} alt={`${product.title} face ${index}`}/>
                    </div>
                  )
              })
          }
        </div> */}


      </div>
        <div className="product-detail">

      <p className="product-title">
        <strong>{product.title}</strong>
      </p>
      {/* second line */}
      <p className="product-description">{product.description}</p>

      {/* stock  and percentage discount */}
      <div className="product-disc-stock display-content">
        <p><span>Discount :{product.discountPercentage} % </span>
        <span className="fa-solid fa-badge-percent" style={{color:colors.colorGreen}}></span>
        </p>
        <p>
            <span>Stock:{product.stock===0 ? "Out of Stock": ` In Stock ${product.stock}`}</span>
        </p>
      </div>
      <div className="product-price-rating display-content">
        <p>price : {product.price} $</p>
        <p>Rating : {product.rating} ⭐</p>
      </div>
      <div className="product-buttons display-content">
        {product.isLiked?
        <button onClick={(e)=>{
              wishListHandler(e)
            }}>
            <span>remove From WishList</span>
            <i className="fa-solid fa-heart-crack" style={{color: colors.colorRed}}></i>
        </button>:
        <button onClick={(e)=>{
            wishListHandler(e)
          }}>
          <span>Add to Cart</span>
          <i className="fa-solid fa-heart fa-xl" style={{color: colors.colorRed}}></i>
        </button>
        }
        {product.isAddedTocart ? (
            <Link to="/cart" >
            <span>Go to Cart</span>
            <span
                className="fa-solid fa-cart-shopping"
                style={{ color: colors.colorGreen }}
            ></span>
            </Link>
        ) : (
            <button
            onClick={(e) => {
                cartHandler(e);
            }}
            >
            <span>Add to Cart</span>
            <span
                className="fa-solid fa-cart-shopping"
                style={{ color: colors.colorGreen }}
            ></span>
            </button>
        )}
        </div>
      </div>
    </ProductDetailCardDiv>
  )
};
