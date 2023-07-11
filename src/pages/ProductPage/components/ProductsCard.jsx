import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useProductsContext } from '../../../store/productsContext';
import { postWishList,deleteWishList } from '../../../services/wishlist/wish-service';
import { useAuthContext } from '../../../store/authContext';
import { postCart } from '../../../services/cart/cart-service';
import { colors } from '../../../constant';
import { ProductsCardDiv } from './ProductsCardCss';
import { useModalContext } from '../../../store/modalContext';

export const ProductsCard = ({product}) => {

    const navigate=useNavigate();
    const {AddToWishList,DeleteFromWishList,AddToCart}=useProductsContext();
    const {modal,dispatchModalData}=useModalContext();
    const {authData:{isLoggedIN}}=useAuthContext();

  const wishListHandler=async (e)=>{
    e.preventDefault();
    const token=localStorage.getItem('token');
    if(!isLoggedIN || !token){
      modal.searchModal && dispatchModalData({type:'CLOSEMODAL',payload:"searchModal"});
      return navigate("/login",{state:"/product"});
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
      modal.searchModal && dispatchModalData({type:'CLOSEMODAL',payload:"searchModal"});
      return navigate("/login",{state:"/product"});
    }
    if(!product.isAddedTocart){
      const {data:{cart:CartData}}=await postCart(token,product);
      AddToCart(product._id,CartData);
    }
  }

  
  return (
    <ProductsCardDiv>
        <Link to={`/product/${product._id}`}>
            <div className="product-wishlist" onClick={(e)=>{
                wishListHandler(e);
              }}>
              {product.isLiked?
                <span className="fa-solid fa-heart fa-xl" style={{color: colors.colorRed}}></span>
                :<span className="fa-regular fa-heart fa-xl" style={{color: colors.colorGreen}}></span>
              }
            </div>
            <img className='product-image' src={product.thumbnail} alt={product.title}/>
            <p className='product-title'><strong>{product.title}</strong></p>
            <div className='display-content-column'>
              <p><strong>price : </strong> {product.price} $</p>
              <p><strong>discount : </strong>{product.discountPercentage}</p>
              <p><strong>In Stock : </strong>{product.stock}</p>
              <p><strong>Rating : </strong> {product.rating} ⭐</p>
            </div>
        </Link>
            {product.isAddedTocart?
      
      <Link to="/cart" onClick={
          ()=>{
            modal.searchModal && dispatchModalData({type:'CLOSEMODAL',payload:"searchModal"});
          }}>
                <span>Go to Cart</span>
                <span className="fa-solid fa-cart-shopping" style={{color: colors.colorGreen}}></span>
              </Link>
              :<button onClick={(e)=>{
                cartHandler(e)
              }}>
              <span>Add to Cart</span>
              <span className="fa-solid fa-cart-shopping" style={{color: colors.colorGreen}}></span>
              </button>
            }
    </ProductsCardDiv>
  )
}
