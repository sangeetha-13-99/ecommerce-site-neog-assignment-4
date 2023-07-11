import React from 'react'
import { Link } from 'react-router-dom';
import { useProductsContext } from '../../../store/productsContext';
import { deleteWishList } from '../../../services/wishlist/wish-service';
import { postCart } from '../../../services/cart/cart-service';
import { colors } from '../../../constant';
import { WishListCardDiv } from './WishListCardCss';

export const WishListsCard = ({product}) => {
    const {DeleteFromWishList,AddToCart}=useProductsContext();

  const wishListHandler=async (e)=>{
    e.preventDefault();
    const token=localStorage.getItem('token');
    const {data:{wishlist:wishListData}}=await deleteWishList(token,product._id);
    DeleteFromWishList(product._id,wishListData);
  }

  const cartHandler=async(e)=>{
    e.preventDefault();
    const token=localStorage.getItem('token');
    if(!product.isAddedTocart){
      const {data:{cart:CartData}}=await postCart(token,product);
      AddToCart(product._id,CartData);
    }
  }

  return (
    <WishListCardDiv>
        <Link to={`/product/${product._id}`}>
            <img className='product-image' src={product.thumbnail} alt={product.title}/>
            <p className='product-title'><strong>{product.title}</strong></p>
            <div className='display-content-column'>
              <p><strong>price : </strong> {product.price} $</p>
              <p><strong>discount : </strong>{product.discountPercentage}</p>
              <p><strong>In Stock : </strong>{product.stock}</p>
              <p><strong>Rating : </strong> {product.rating} ⭐</p>
            </div>
          </Link>
            <button onClick={(e)=>{
                wishListHandler(e)
              }}>
              <span>remove From WishList</span>
              <i className="fa-solid fa-heart-crack" style={{color: colors.colorRed}}></i>
            </button>
            {product.isAddedTocart?
              <Link to="/cart">
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
        
    </WishListCardDiv>
  )
}
