import React, { useEffect, useState } from 'react'
import { useAddressContext } from '../../store/addressContext';
import { Modal } from '../Modal/Modal';
import { useAuthContext } from '../../store/authContext';
import { useModalContext } from '../../store/modalContext';
import { FormCard } from '../../UI/FormCard';

export const AddressForm = () => {
    const {authData:{user}}=useAuthContext();
    const {addressData:{dummyData,editAddress},dispatchAddressData}=useAddressContext();
    const {dispatchModalData}=useModalContext();
    const [formAddressData,setFormAddressData]=useState({
       
        phone:"",
        street:"",
        city:"",
        state:"",
        country:"",
        pincode:"",
        addressType:"Home"
    });
    
    useEffect(()=>{
        if(editAddress.isEdit){
            setFormAddressData(editAddress.formData)
        }
    },[editAddress.isEdit,editAddress.formData]);

    const addDummyAddress=()=>{
        setFormAddressData(dummyData);
    }
    const clearAddress=()=>{
        setFormAddressData({
           
            phone:"",
            street:"",
            city:"",
            state:"",
            country:"",
            pincode:"",
            addressType:"Home"
        });
    }
    const submitButtonHandler=()=>{
        dispatchAddressData({type:"ADDNEWADDRESS",payload:{userId:user._id,addressData:formAddressData}});
        dispatchModalData({type:"CLOSEMODAL",payload:"formModal"})
    }
    const updateButtonHandler=()=>{
        dispatchAddressData({type:"UPDATEADDRESS",payload:{userId:user._id,addressId:editAddress.addressId,addressData:formAddressData}});
        dispatchAddressData({type:"SETEDITSTATE",payload:{isEdit:false,userId:'',addressId:'',formData:{}}});
        dispatchModalData({type:"CLOSEMODAL",payload:"formModal"})
    }
  return (
    <Modal modalType="formModal">
        <FormCard>
            <h2 className='form-name'>Address Form</h2>
            <form>
                <div className="form-field-div">
                    <label className="form-label" htmlFor="phone">Phone</label>
                    <div className="form-input-div">
                    <input type="tel" id="phone" name="phone" autoComplete="phone" placeholder='1234567890' value={formAddressData.phone} onChange={(e)=>setFormAddressData(prev=>({...prev,phone:e.target.value}))}/>
                    </div>
                </div>
                <div className="form-field-div">
                    <label className="form-label" htmlFor="street-address">Street</label>
                    <div className="form-input-div">
                        <input type="text" id="street-address" name="street-address" autoComplete="street-address" placeholder=' 01-01/1  adrash balika colony'value={formAddressData.street} onChange={(e)=>setFormAddressData(prev=>({...prev,street:e.target.value}))}/>
                    </div>
                </div>
                <div className="form-field-div">
                    <label className="form-label" htmlFor="city">City</label>
                    <div className="form-input-div">
                         <input type="text" id="city" name="city" autoComplete="address-level2" value={formAddressData.city} onChange={(e)=>setFormAddressData(prev=>({...prev,city:e.target.value}))}/>
                    </div>
                </div>
                <div className="form-field-div">
                    <label className="form-label" htmlFor="state">State</label>
                    <div className="form-input-div">
                        <input type="text" id="state" name="state" autoComplete="address-level1" value={formAddressData.state} onChange={(e)=>setFormAddressData(prev=>({...prev,state:e.target.value}))}/>
                    </div>
                </div>
                <div className="form-field-div">
                    <label className="form-label" htmlFor="country">Country</label>
                    <div className="form-input-div">
                        <input type="text" id="country" name="country" autoComplete="country-name" value={formAddressData.country} onChange={(e)=>setFormAddressData(prev=>({...prev,country:e.target.value}))}/>
                    </div>
                </div>
                <div className="form-field-div">
                    <label className="form-label" htmlFor="postal-code">ZIP or postal code</label>
                    <div className="form-input-div">
                        <input type="text" id="postal-code" name="postal-code" autoComplete="postal-code" value={formAddressData.pincode} onChange={(e)=>setFormAddressData(prev=>({...prev,pincode:e.target.value}))}/>
                    </div>
                </div>
                <div  className="form-field-div">
                    <div>
                    <input className="form-radio-div" type="radio" name="addresstype" value="Home" id="home" checked={formAddressData.addressType==="Home"} onChange={(e)=>setFormAddressData(prev=>({...prev,addressType:e.target.value}))}/>
                    <label className="form-label-radio"  htmlFor='home'>Home</label>
                    </div>
                    <div>
                    <input className="form-radio-div" type="radio" name="addresstype" value="Office" id="office" checked={formAddressData.addressType==="Office"} onChange={(e)=>setFormAddressData(prev=>({...prev,addressType:e.target.value}))}/>
                    <label className="form-label-radio"  htmlFor='office'>Office</label>
                    </div>
                    <div>
                    <input className="form-radio-div" type="radio" name="addresstype" value="Other" id="other" checked={formAddressData.addressType==="Other"} onChange={(e)=>setFormAddressData(prev=>({...prev,addressType:e.target.value}))}/>
                    <label className="form-label-radio"  htmlFor='other'>Other</label>
                    </div>
                </div>
        </form>
        <div className='button-align'>
            {editAddress.isEdit?<button className='form-button' onClick={updateButtonHandler}>Edit Address</button>:<button className='form-button' onClick={submitButtonHandler}>Add Address</button>}
            <button className='form-button' onClick={clearAddress}>clear Form</button>
            <button className='form-button' onClick={addDummyAddress}>Fill With Dummy Data</button>
        </div>
        </FormCard>
    </Modal>
  )
}
