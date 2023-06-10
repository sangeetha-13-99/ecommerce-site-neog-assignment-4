import { Outlet } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { NavBar } from '../components/HomePage/NavBar'
import { Fragment, useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import video from "../assets/LoadingVideo.mp4";
import ScrollToTop from './Utils/ScrollToTop';

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
        <ReactPlayer url={video} playing muted width="100%" height="100%" playbackRate={3}/>
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
