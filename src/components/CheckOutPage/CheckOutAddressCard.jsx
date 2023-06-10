import React from 'react'
import { CheckOutAddressCardDiv } from './CheckOutAddressCardCss'

export const CheckOutAddressCard = ({address,user}) => {
  return (
    <CheckOutAddressCardDiv>
        {user && <span><strong>{user.firstName} {user.lastName}</strong></span>}
        <p><strong>Street No : </strong>{address.street}</p>
        <p><strong>Pincode : </strong>{address.pincode} </p>
        <p><strong>City : </strong>{address.city}</p>
        <p><strong>State : </strong>{address.state}</p>
        <p><strong>Country : </strong>{address.country}</p>
        <p><strong>Phone : </strong>{address.phone}</p>
    </CheckOutAddressCardDiv>
  )
}
