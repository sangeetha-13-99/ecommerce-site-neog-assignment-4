import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { toast } from "react-toastify";

import { useAuthContext } from '../../../store/authContext'
import { SearchComponent } from './SearchComponent'
import { colors } from '../../../constant'
import { useAddressContext } from '../../../store/addressContext'
import { useProductsContext } from '../../../store/productsContext'
import { useModalContext } from '../../../store/modalContext';
import { NavBarSection } from '../styles/HomePageCss';



export const NavBar = () => {
  const {authData,dispatchAuthData}=useAuthContext();
  const {dispatchAddressData}=useAddressContext();
  const {data:{cart,wishList}}=useProductsContext();
  const {dispatchModalData,modal}=useModalContext();
  const [toggleHamburger,setToggleHamburger]=useState(false);

  const toggleHamburgerHandler=()=>{
    setToggleHamburger(prev=>!prev)
  }
  

  const logOutHandler=()=>{
    localStorage.removeItem('token');
    dispatchAuthData({type:'DELETEAUTHDETAILS'});
    dispatchAddressData({type:'SETCURRENTADDRESS',payload:{currentAddress:{}}});
    toast('Logged Out succesfully');
  }
  return (
    <NavBarSection>
        <div className='navbar-div nav-main'>
          <Link to="/">
             <p>Smart Mart</p>
          </Link>
        </div>
        <div className='navbar-div nav-links'>
          <div className='nav-search'>
            {modal.searchModal && <SearchComponent/>}
            <div onClick={()=>dispatchModalData({type:"OPENMODAL",payload:"searchModal"})}>
              <span className="fa-solid fa-magnifying-glass fa-xl" style={{color:colors.colorGreen}}></span>
              <input readOnly placeholder="Search Here"/>
            </div>
          </div>
          <div onClick={toggleHamburgerHandler} className='nav-hamburger'>
            <span class="fa-solid fa-bars fa-xl" style={{color:colors.colorGreen}}></span>
          </div>
          {toggleHamburger && <div className='nav-hamburger-content'>
            <Link to="/product">
                <div className='nav-div' onClick={toggleHamburgerHandler}>
                    <span className='nav-text'>Explore</span>
                    <span className="fa-solid fa-compass fa-xl"style={{color:colors.colorGreen}}></span>
                </div>
            </Link>
            <Link to="/wishlist">
                <div className='nav-div' onClick={toggleHamburgerHandler}>
                  <span className='nav-text'>WishList</span>
                    <span className="fa-regular fa-heart fa-xl" style={{color: colors.colorGreen}}></span>
                    {wishList.length>0 && <span className='items-count'>{wishList.length}</span>}
                </div>
            </Link>
            <Link to="/cart">
                <div className='nav-div' onClick={toggleHamburgerHandler}>
                    <span className='nav-text'>Cart</span>
                    <span className="fa-solid fa-cart-shopping fa-xl"  style={{color: colors.colorGreen}}></span>
                    {cart.length>0 && <span className='items-count'>{cart.length}</span>}
                </div>
            </Link>
            <Link to="/profile">
              <div className='nav-div' onClick={toggleHamburgerHandler}>
                  <span className='nav-text'>Profile</span>
                  <span className="fa-solid fa-user fa-xl"  style={{color: colors.colorGreen}}></span>
              </div>
            </Link>
            <div className='nav-div' onClick={toggleHamburgerHandler}>
              {!authData.isLoggedIN ?
              <Link to="/login">
                <button>
                    <span className='nav-text'>Log In</span>
                    <span className="fa-solid fa-right-to-bracket fa-xl" style={{color:colors.colorGreen}}></span>
                </button>
              </Link>:
              <button onClick={logOutHandler}>
                <span className='nav-text'>Log Out</span>
                <span className="fa-solid fa-right-to-bracket fa-xl" style={{color:colors.colorGreen}}></span>
              </button>}
            </div>
          </div>}
          <div className='nav-desktop'>
            <Link to="/product">
                <div className='nav-div'>
                    <span className="fa-solid fa-compass fa-xl"style={{color:colors.colorGreen}}></span>
                </div>
            </Link>
            <Link to="/wishlist">
                <div className='nav-div'>
                    <span className="fa-regular fa-heart fa-xl" style={{color: colors.colorGreen}}></span>
                    {wishList.length>0 && <span className='items-count'>{wishList.length}</span>}
                </div>
            </Link>
            <Link to="/cart">
                <div className='nav-div'>
                    <span className="fa-solid fa-cart-shopping fa-xl"  style={{color: colors.colorGreen}}></span>
                    {cart.length>0 && <span className='items-count'>{cart.length}</span>}
                </div>
            </Link>
            <Link to="/profile">
              <div className='nav-div'>
                  <span className="fa-solid fa-user fa-xl"  style={{color: colors.colorGreen}}></span>
              </div>
            </Link>
            <div className='nav-div'>
              {!authData.isLoggedIN ?
              <Link to="/login">
                <button>
                    <span>Log In</span>
                    <span className="fa-solid fa-right-to-bracket fa-xl" style={{color:colors.colorGreen}}></span>
                </button>
              </Link>:
              <button onClick={logOutHandler}>
                <span>Log Out</span>
                <span className="fa-solid fa-right-to-bracket fa-xl" style={{color:colors.colorGreen}}></span>
              </button>}
            </div>
          </div>
        </div>
    </NavBarSection>
  )
}
