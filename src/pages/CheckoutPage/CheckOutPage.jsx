import React, { Fragment } from 'react'
import { useAddressContext } from '../../store/addressContext'
import { useAuthContext } from '../../store/authContext';
import { CheckOutAddressCard } from './components/CheckOutAddressCard';

import { useProductsContext } from '../../store/productsContext';
import { CheckOutCard } from './components/CheckOutCard';
import { Link } from 'react-router-dom';
import { CheckOutPageDiv } from './styles/CheckOutPageCss';

export const CheckOutPage = () => {
    const {addressData:{usersAddress,currentAddress},dispatchAddressData}=useAddressContext();
    const {authData:{user}}=useAuthContext();
    const {data:{cart}}=useProductsContext();

    const addresses=usersAddress.filter((auser)=>{
        if(auser.userId===user._id){
            return true;
        }
        return false;
    })[0]?.address;

    const renderAddresses=addresses?.map(address=>{
        return (
            <label key={address._id}>
                <input type="radio" name="useraddress" value={address._id} checked={currentAddress._id===address._id} onChange={(e)=>dispatchAddressData({type:'SETCURRENTADDRESS',payload:{currentAddress:address}})}/>
                <CheckOutAddressCard address={address} user={user}/>
            </label>
        );
    });
 
  return (
    <Fragment>
        {cart.length>0?
             <CheckOutPageDiv>
                <div className='checkout-div'>
                    <div className='checkout-div2'>
                        {renderAddresses}
                    </div>
                    <CheckOutCard/>
                </div>
            </CheckOutPageDiv>:
            <CheckOutPageDiv>
                <p className='result-text'>You Have no products Added to Cart to Checkout</p>
                <p className='result-text'><span>Explore Products Here</span>
                <span><Link to="/product">Go To Products</Link>
                </span>
                </p>
            </CheckOutPageDiv>
        }
    </Fragment>

  )
}
