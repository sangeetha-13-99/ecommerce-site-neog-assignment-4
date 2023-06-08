import React from 'react'
import { useAddressContext } from '../../store/addressContext'
import { useAuthContext } from '../../store/authContext';
import { AddressCard } from './AddressCard';
import { useModalContext } from '../../store/modelContext';
import { AddressForm } from './AddressForm';
import { colors } from '../../constant';
import { AddressDetailDiv } from './AddressCardCss';

export const AddressDetail = () => {
    const {authData:{user}}=useAuthContext();
    const {addressData:{usersAddress}}=useAddressContext();
    const {modal,dispatchModalData} = useModalContext();
    
    const userAddresses=usersAddress.filter((aUser)=>{
        if(aUser.userId===user._id){
            return true;
        }
        return false;
    })[0]?.address||[];
    const renderUserAddress=userAddresses.map(address=>{
        return (
            <AddressCard key={address._id} address={address} />
        )
    });

    return (
        <AddressDetailDiv>
            {modal.formModal && <AddressForm />}
            <button className='address-button-2' onClick={()=>{dispatchModalData({type:"OPENMODAL",payload:"formModal"})}}><span className="fa-solid fa-plus" style={{color: colors.colorGreen}}></span>Add New Address</button>
            {renderUserAddress}
        </AddressDetailDiv>
    )
}
