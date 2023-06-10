import React, { useEffect, useState } from 'react'
import { UserDetail } from '../components/ProfilePage/UserDetail'
import { AddressDetail } from '../components/ProfilePage/AddressDetail'
import { OrdersDetail } from '../components/ProfilePage/OrdersDetail'
import { useLocation } from 'react-router-dom'
import { ProfilePageDiv } from './ProfilePageCss'

export const ProfilePage = () => {
  const {state}=useLocation();
  const [showTab,setShowTab]=useState('user')
  
  useEffect(()=>{
    if(state!==null){
      setShowTab(state);
    }
  },[]);

  const tabShowHandler=(value)=>{
    setShowTab(value);
  }
  return (
    <ProfilePageDiv>
        <div className='profile-div'>
          <button className='tab-button' onClick={()=>tabShowHandler('user')}>User</button>
          <button className='tab-button' onClick={()=>tabShowHandler('address')}>Address</button>
          <button className='tab-button' onClick={()=>tabShowHandler('orders')}>Orders</button>
        </div>
        <div className='profile-outer-div'>
          <div className='profile-div'>
            {showTab==="user" && <UserDetail/>}
            {showTab==="address" && <AddressDetail/>}
            {showTab==="orders" && <OrdersDetail/>}
          </div>
        </div>
    </ProfilePageDiv>
  )
}
