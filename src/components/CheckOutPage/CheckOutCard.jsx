import React from "react";
import { CheckOutAddressCard } from "./CheckOutAddressCard";
import { useAddressContext } from "../../store/addressContext";
import { useProductsContext } from "../../store/productsContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteCartProduct } from "../../services/cart/cart-service";
import { CheckOutCardDiv } from "./CheckOutCardCss";


export const CheckOutCard = () => {
  const {data:{cart},setOrders}=useProductsContext();
  const navigate=useNavigate();
  const {
    addressData: { currentAddress },
  } = useAddressContext();

  let totalSubAmount = 0;
  const cartData = cart.map((cproduct) => {
    const totalPrice = cproduct.qty * cproduct.price;
    const totalDiscount = cproduct.qty * cproduct.discountPercentage;
    const totalProductPrice =
      totalPrice - Math.round((totalPrice * totalDiscount) / 100);
    totalSubAmount = totalSubAmount + totalProductPrice;
    return (
      <li key={cproduct._id}>
        <span>{cproduct.title}</span>
        <span>{cproduct.qty}</span>
      </li>
    );
  });

  const checkoutHelperFunction=async()=>{
    const token=localStorage.getItem('token');
    let promises=[];
    try{
      for(let i=0;i<cart.length;i++){
        promises.push(deleteCartProduct(token,cart[i]._id))
      }
      const result=await Promise.all(promises);
      console.log(result);
    }
    catch(error){
      console.error(error)
    }
    return
  }

  const cartCheckOutHandler = () => {
    if(!currentAddress._id){
      toast.warn('Add Address to Place an Orders');
      return ;
    }
    checkoutHelperFunction();
    setOrders(currentAddress);
    toast.success('Order Place SuccessFully 🚀');
    return navigate('/profile',{state:'orders'});
  };
  
  return (
    <CheckOutCardDiv>
      <h2>
        <strong>Order Details</strong>
      </h2>
      <div>
        <p>
          <span>Items</span>
          <span>Quantity</span>
        </p>
        <ol>{cartData}</ol>
      </div>
      <hr></hr>
      <h2>
        <strong>Price Details</strong>
      </h2>
      <div>
        <p>
          <span>Sub Total:</span>
          <span>{totalSubAmount}$</span>
        </p>
        <p>
          <span>Delivery Fee:</span>
          <span>45$</span>
        </p>
        <p>
          <span>Shipping Fee:</span>
          <span>Free</span>
        </p>
        <p>
          <span>Total Cart :</span>
          <span>{totalSubAmount + 45}$</span>
        </p>
      </div>
      <hr></hr>
      <h2>
        <strong>Delivery To</strong>
      </h2>
      {"_id" in currentAddress ? (
        <CheckOutAddressCard address={currentAddress} />
      ) : (
        <p>Select Address before proceed</p>
      )}
      <hr></hr>
      <button
        onClick={cartCheckOutHandler}
      >
        Place Order
      </button>
    </CheckOutCardDiv>
  );
};
