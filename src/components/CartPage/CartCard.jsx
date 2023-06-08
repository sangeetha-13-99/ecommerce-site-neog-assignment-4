import React, { useCallback } from 'react'
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { useProductsContext } from '../../store/productsContext';
import { postWishList,deleteWishList } from '../../services/wishlist/wish-service';
import { deleteCartProduct, postCartProduct } from '../../services/cart/cart-service';
import { colors } from '../../constant';
import { CartCardDiv } from './CartCardDivCss';


export const CartCard = ({product}) => {
    const {AddToWishList,DeleteFromWishList,DeleteFromCart,updateCart}=useProductsContext();

 
  
  const wishListHandler=async (e)=>{
    e.preventDefault();
    const token=localStorage.getItem('token');
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
    const {data:{cart:cartData}}=await deleteCartProduct(token,product._id);
    DeleteFromCart(product._id,cartData);
  } 

  const cartController=async(type)=>{
    // e.preventDefault();
    const token=localStorage.getItem('token');
    if(product.qty>=2 || (product.qty===1 && type==="increment")){
      const {data:{cart:cartData}}=await postCartProduct(token,product._id,type);
      updateCart(product._id,cartData);
    }else if(product.qty===1 && type==="decrement"){
      const {data:{cart:cartData}}=await deleteCartProduct(token,product._id);
      DeleteFromCart(product._id,cartData);
    }else{
      return ;
    }
  }

  const debouncedClick = useCallback(debounce(cartController, 500),[product.qty]);

  return (
    <CartCardDiv>
      <div >
        <Link to={`/product/${product._id}`}>
            <img  className="product-image" src={product.thumbnail} alt={product.title}/>
        </Link>
      </div>
      <div>
            <div >
              <p className='product-title'><strong>{product.title}</strong></p>
              <div className='display-content'>
                <div>
                <p><strong>price : </strong> {product.price} $</p>
                <p><strong>discount : </strong>{product.discountPercentage}</p>
                </div>
                <div>
                <p><strong>In Stock : </strong>{product.stock}</p>
                <p><strong>Rating : </strong> {product.rating} ⭐</p>
                </div>
              </div>
            </div>
            <div >
                <span>Quantity :</span> 
                <div>
                  <button onClick={(e)=>{e.persist();debouncedClick("decrement")}}> - </button>
                  <span>{product.qty}</span>
                  <button onClick={(e)=>{e.persist();debouncedClick("increment")}}> + </button>
              </div>
            </div>
            <div>
            {product.isLiked?
            <button onClick={(e)=>wishListHandler(e)}>
                <span>Remove From WishList</span>
                <span className="fa-solid fa-heart-crack" style={{color: colors.colorRed}}></span>
            </button>:
            <button onClick={(e)=>wishListHandler(e)}>
                <span>Add to WishList</span>
                <span className="fa-solid fa-heart fa-xl" style={{color: colors.colorRed}}></span>
            </button>
            }
           <button onClick={(e)=>{
                cartHandler(e)
              }}>
              <span>Remove From Cart</span>
              <span className="fa-solid fa-cart-shopping" style={{color: colors.colorGreen}}></span>
            </button>
            </div>
      </div>
    </CartCardDiv>
  )
}
