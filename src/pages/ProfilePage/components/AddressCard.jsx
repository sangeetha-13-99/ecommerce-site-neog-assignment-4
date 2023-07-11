import React from 'react'
import { useAddressContext } from '../../../store/addressContext'
import { useAuthContext } from '../../../store/authContext';
import { colors } from '../../../constant';
import { useModalContext } from '../../../store/modalContext';
import { AddressCardDiv } from './AddressCardCss';



export const AddressCard = ({address}) => {
    const {dispatchAddressData}=useAddressContext();
    const {authData:{user}}=useAuthContext();
    const {dispatchModalData} = useModalContext();

    const editAddress=()=>{
        dispatchAddressData({type:"SETEDITSTATE",payload:{isEdit:true,userId:user._id,addressId:address._id,formData:address}});
        dispatchModalData({type:"OPENMODAL",payload:"formModal"});
    }
    const deleteAddress=()=>{
        dispatchAddressData({type:"DELETEADDRESS",payload:{userId:user._id,addressId:address._id}});
    }
  return (
    <AddressCardDiv>
        <h2>{address.addressType==="Home"?"Home":address.addressType==="Office"?"Office":"Other"} Address</h2>
        <div className='address-div'>
            <div className='address-icon'>
                {
                address.addressType==="Home"?
                <span className="fa-solid fa-house" style={{color:colors.colorGreen}}></span>:
                address.addressType==="Office"
                ?
                <span className="fa-solid fa-building" style={{color:colors.colorGreen}}></span>:
                <span className="fa-solid fa-building" style={{color:colors.colorGreen}}></span>
                }
            </div>
            <div className='address-details'>
                <p><span>Street No:</span><span>{address.street}</span></p>
                <p><span>Pincode: </span><span>{address.pincode}</span></p>
                <p><span>City: </span><span>{address.city}</span></p>
                <p><span>State: </span><span>{address.state}</span></p>
                <p><span>Country: </span><span>{address.country}</span></p>
                <p><span>Phone: </span><span>{address.phone}</span></p>
            </div>
        </div>
        <button className='address-button' onClick={editAddress}><span className="fa-solid fa-pen-to-square" style={{color:colors.colorGreen}}></span></button>
        <button className='address-button' onClick={deleteAddress}><span className="fa-solid fa-trash" style={{color:colors.colorGreen}}></span></button>
    </AddressCardDiv>
  )
}
