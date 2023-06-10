import { Outlet } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { NavBar } from '../components/HomePage/NavBar'
import { Fragment, useEffect, useState } from 'react'
import ScrollToTop from './Utils/ScrollToTop';
import { colors } from '../constant';
import { Loading } from './Loading/Loading';

export const Main = () => {
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },3000);
  },[]);

  return (
    <Fragment>
      {
      loading?
      <div>
        <Loading/>
        <i className="fa-solid fa-spinner fa-spin" style={{color: colors.colorGreen,fontSize:'5rem'}}/>
      </div>
      :<Fragment>
        <NavBar/>
        <div>
          <ToastContainer
            icon={false}
            position="top-right"
            autoClose={500}
            newestOnTop={true}
            limit={2}
            closeOnClick
            draggable
            theme="dark"
          />
          <Outlet/>
        </div>
      </Fragment>
      }
      <ScrollToTop/>
      <div id="modaloverlay"></div>
    </Fragment>
  )
}
