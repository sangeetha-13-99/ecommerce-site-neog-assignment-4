import React from 'react'
import { useAuthContext } from '../../store/authContext'
import { colors } from '../../constant';
import { UserDetailDiv } from './UserDetailCss';

export const UserDetail = () => {

    const {authData:{user}}=useAuthContext();
    return (
        <UserDetailDiv>
            <div className='user-icon'>
                <span className="fa-solid fa-user fa-2xl" style={{color:colors.colorGreen}}></span>
            </div>
            <div className='user-detail'>
                <p>Name : {user.firstName +" " + user.lastName}</p>
                <p>Email : {user.email}</p>
            </div>
        </UserDetailDiv>
    )
}
