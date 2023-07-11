import React from 'react'
import { CartCard } from './components/CartCard';
import { useProductsContext } from '../../store/productsContext';
import { CartPriceCard } from './components/CartPriceCard';
import { Link } from 'react-router-dom';
import { CardPageDiv } from './styles/CardPageCss';

export const CartPage = () => {
  const {data:{cart}}=useProductsContext();
  const cartData=cart.map(product=>{
    return <CartCard key={product._id} product={product}/>;
  });
  return (
    <CardPageDiv>
      {cart.length>0?
      <div>
        <p className='results-text'>Showing All Cart Products {cart.length}</p>
        <div className='cart-all-div'>
          <div className='cart-all'>
            {cartData}
          </div>
          <div className='cart-pricecard'>
            <CartPriceCard data={cart}/>
          </div>
        </div>
      </div> :
        <div>
          <p className='results-text'>You Have no products Added to Cart</p>
          <p className='results-text'><span>Explore Products Here</span>
            <span><Link to="/product"> Go To Products </Link>
            </span>
          </p>
        </div>
      }
    </CardPageDiv>
  )
}
