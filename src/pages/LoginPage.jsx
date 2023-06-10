
import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { loginService } from "../services/auth/login-service";
import { useAuthContext } from "../store/authContext";
import { colors } from "../constant";
import { FormCard } from "../UI/FormCard";

export const LoginPage = () => {
  const {state}=useLocation();
  const navigate =useNavigate();
  const loginEmailRef=useRef(null);
  const loginPasswordRef=useRef(null);
  const [loginError,setLoginError]=useState(null);
  const {authData:{loader},dispatchAuthData}=useAuthContext();
  const [togglePassword,setTogglePassword]=useState({type:'password',show:false});

  const showPasswordToggler= () => {
    setTogglePassword(prev=>{
      return prev.show?{type:"password",show:false}:{type:"text",show:true};
    })
  }

  const loginHelper=async(emailValue,passwordValue)=>{
    try {
      dispatchAuthData({type:'SETLOADER',payload:true});
      if (emailValue.trim() === "" || passwordValue.trim() === "") {
        throw {response:{status:"",message:"Please Provide Valid login Details"}};
      }
      const {
        data: { foundUser, encodedToken },
        status,
      } = await loginService(emailValue,passwordValue);
      if (status === 200) {
        localStorage.setItem("token", encodedToken);
        dispatchAuthData({type:'ADDAUTHDETAILS',payload:foundUser});
        toast.success('loggedIn Successful');
        return navigate(state!==null?state:"/");
      }
    } catch ({response}) {
      response.status===404 && toast.error('login Failed');
      response.status===404 ? 
        setLoginError("The email you entered is not Registered. create new account")
        : setLoginError(response.message);
        return;
    } finally{
      dispatchAuthData({type:'SETLOADER',payload:false});
    }
  }

  const loginFormHandler = () => {
    const emailValue=loginEmailRef.current.value;
    const passwordValue=loginPasswordRef.current.value;
    loginHelper(emailValue,passwordValue);
  };
  
  const loginHandlerWithTestData=()=>{
    loginHelper('adarshbalika@gmail.com','adarshbalika');
  }
  return (
    <FormCard>
      <h2 className="form-name">Login</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          loginFormHandler(e);
        }}
      >
        {loader && <i className="fa-solid fa-spinner fa-spin" style={{color: colors.colorGreen}}></i>}
        {loginError && <p className="form-error">{loginError}</p>}
        <div className="form-field-div">
          <label className="form-label" htmlFor="email">Email Address</label>
          <div className="form-input-div">
            <input id="email" type="email" name="email" placeholder="abcd@neog.com" ref={loginEmailRef} />
          </div>
        </div>
        <div className="form-field-div">
          <label className="form-label" htmlFor="password">Password</label>
          <div className="form-input-div">
            <input id="password" type={togglePassword.type} name="password" placeholder="******" ref={loginPasswordRef}/>
            <span>
              {togglePassword.show ? <VisibilityIcon style={{color:colors.colorGreen}} onClick={showPasswordToggler}/>:
              <VisibilityOffIcon style={{color:colors.colorGreen}} onClick={showPasswordToggler}/>}
            </span>
          </div>
        </div>
        <button className="form-button">Login</button>
      </form>
      <p>Or</p>
      <div className="button-align">
        <button className="form-button" onClick={loginHandlerWithTestData}>Login with Test Credentials</button>
        <Link to="/signup" className="form-navigate-link" state={state}>
          <span>Create New Account</span>
          <span className="fa-solid fa-caret-right fa-xl" style={{color: colors.colorGreen}}></span>
        </Link>
      </div>
    </FormCard>
  );
};
