import React from 'react'
import { Link } from 'react-router-dom';
import { CartPriceCardDiv } from './CartPriceCardCss';

export const CartPriceCard = ({data}) => {

    let totalSubAmount=0;

    const billDetails=data.map((product)=>{
        const totalPrice=product.qty*product.price;
        const totalDiscount=product.qty*product.discountPercentage;
        const totalProductPrice=totalPrice-Math.round((totalPrice*totalDiscount)/100);
        totalSubAmount=totalSubAmount+totalProductPrice;
        return(
        <li key={product._id}>
            <h2><strong>{product.title}</strong></h2>
            <div>
                <p><strong>Total MRP: </strong><span>{totalPrice}$</span></p>
                <p><strong>Total Discount:</strong><span>
                {totalDiscount}%</span></p>
                <p><strong>Total Price :</strong><span>{totalProductPrice}$</span></p>
                <hr></hr>
            </div>
        </li>
        )
    });

    return (
        <CartPriceCardDiv>
            <ol>
                {billDetails}
            </ol>
            <div>
                <p><span>Sub Total:</span><span>{totalSubAmount}$</span></p>
                <p><span>Delivery Fee:</span><span>45$</span></p>
                <p><span>Total Cart :</span><span>{totalSubAmount+45}$</span></p>
            </div>
            <Link to="/checkout">
                <button>Check Out</button>
            </Link>
        </CartPriceCardDiv>
    )
}
