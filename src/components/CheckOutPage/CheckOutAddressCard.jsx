import React from 'react'
import { CheckOutAddressCardDiv } from './CheckOutAddressCardCss'

export const CheckOutAddressCard = ({address,user}) => {
  return (
    <CheckOutAddressCardDiv>
        {user && <span><strong>{user.firstName} {user.lastName}</strong></span>}
        <span><strong>Street No : </strong>{address.street}</span>
        <span><strong>Pincode : </strong>{address.pincode} </span>
        <span><strong>City : </strong>{address.city}</span>
        <span><strong>State : </strong>{address.state}</span>
        <span><strong>Country : </strong>{address.country}</span>
        <span><strong>Phone : </strong>{address.phone}</span>
    </CheckOutAddressCardDiv>
  )
}
