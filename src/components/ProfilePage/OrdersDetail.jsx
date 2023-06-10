import React from 'react'
import { useProductsContext } from '../../store/productsContext'
import { CartPriceCard } from '../CartPage/CartPriceCard';
import { CheckOutAddressCard } from '../CheckOutPage/CheckOutAddressCard';
import { OrdersDetailsDiv } from './OrdersDetailsCss';


export const OrdersDetail = () => {
   const {data:{orders}}=useProductsContext();
    const renderOrders=orders.map(({order,address})=>{
      return (<div className='Card' key={order._id}>
        <CartPriceCard data={order}/>
        <CheckOutAddressCard address={address}/>
      </div>)
    })
  return (
    <OrdersDetailsDiv>
      {
        orders.length>0?
        <div>
            <p className='results-text'>Your Orders</p>
            {renderOrders}
        </div>
        :
        <p className='results-text'>You Have No Orders</p>
      }
    </OrdersDetailsDiv>
  )
}
