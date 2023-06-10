import React from 'react'
import { useProductsContext } from '../../store/productsContext'
import { CartPriceCard } from '../CartPage/CartPriceCard';
import { CheckOutAddressCard } from '../CheckOutPage/CheckOutAddressCard';
import { OrdersDetailsDiv } from './OrdersDetailsCss';


export const OrdersDetail = () => {
   const {data:{orders}}=useProductsContext();
    const renderOrders=orders.map(({order,address})=>{
      return (<div className='card' key={order._id}>
        <CartPriceCard data={order}/>
        <div className='order-address'>
          <p className='order-deliver'>Delivered To</p>
          <CheckOutAddressCard address={address}/>
        </div>
      </div>)
    })
  return (
    <OrdersDetailsDiv>
      {
        orders.length>0?
        <div className='order-details-div'>
            {renderOrders}
        </div>
        :
        <p className='results-text'>You Have No Orders</p>
      }
    </OrdersDetailsDiv>
  )
}
