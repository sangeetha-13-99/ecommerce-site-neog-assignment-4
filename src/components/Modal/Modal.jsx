import React, { Fragment } from 'react'
import {createPortal} from "react-dom"
import { useModalContext } from '../../store/modalContext'
import { colors } from '../../constant'
import { useAddressContext } from '../../store/addressContext'
const BackDropModal=({onClick})=>{
    
    return (
        <div className='backdrop-modal' onClick={onClick}>
        </div>
    )
}

const ModalContent=({children,onClick})=>{
    return (
        <div className='modal'>
            <button className='button-close' onClick={onClick}><span className="fa-solid fa-xmark fa-2xl" style={{color:colors.colorWhite}}></span></button>
            {children}
        </div>
    )
}

export const Modal = ({children,modalType}) => {
    const {dispatchModalData}=useModalContext();
    const {dispatchAddressData}=useAddressContext();
    return (
        <Fragment>
            { createPortal(<BackDropModal onClick={()=>{
                dispatchModalData({type:"CLOSEMODAL",payload:modalType})
                }}/>,document.getElementById("modaloverlay"))}

            { createPortal(<ModalContent  onClick={()=>{
                if(modalType==="formModal"){
                    dispatchAddressData({type:"SETEDITSTATE",payload:{isEdit:false,userId:'',addressId:'',formData:{}}});
                }
                dispatchModalData({type:"CLOSEMODAL",payload:modalType});
                }}>{children}</ModalContent>,document.getElementById("modaloverlay"))}
        </Fragment>
    )
}
