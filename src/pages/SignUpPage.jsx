import React, {useEffect, useState } from 'react'
import { Link,useNavigate, useLocation } from 'react-router-dom'
import { toast } from "react-toastify";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useAuthContext } from '../store/authContext';
import { signUpService } from '../services/auth/signup-service';
import { colors } from '../constant';
import { FormCard } from '../UI/FormCard';

export const SignUpPage = () => {
    const {state}=useLocation();
    const [loginError,setLoginError]=useState(null);
    const [signUpFormData,setSignUpFormData]=useState(
        {
            firstname:'',
            secondname:'',
            email:'',
            password:'',
            confirmpassword:'',
            checkbox:false
        }
    )
    const navigate=useNavigate();
    const {authData:{loader},dispatchAuthData}=useAuthContext();

    const [togglePassword,setTogglePassword]=useState({
        password:{type:'password',show:false},
        confirmPassword:{type:'password',show:false}
    });

    const showPasswordToggler= () => {
      setTogglePassword(prev=>{
        return {...prev,password:prev.password.show?{type:'password',show:false}:{type:'text',show:true}}
      })
    }
    const showConfirmPasswordToggler= () => {
        setTogglePassword(prev=>{
            return {...prev,confirmPassword:prev.confirmPassword.show?{type:'password',show:false}:{type:'text',show:true}}
          })
    }

    useEffect(()=>{
        const timer=setTimeout(() => {
            if(signUpFormData.password && signUpFormData.confirmpassword && signUpFormData.password!==signUpFormData.confirmpassword){
                setLoginError('confirm Password is not same as password field');
            }
            else{
                setLoginError(null);
            }
        }, 1000);
        return (()=>clearInterval(timer));
    },[signUpFormData.password,signUpFormData.confirmpassword]);

    const signUpFormHandler=async ()=>{
        const authData={
         firstName:signUpFormData.firstname,
         lastName:signUpFormData.secondname,
         email:signUpFormData.email,
         password:signUpFormData.password,
         confirmpassword:signUpFormData.confirmpassword,
         checkbox:signUpFormData.checkbox,
        }
        try{
            dispatchAuthData({type:'SETLOADER',payload:true});
            if(!authData.firstName|| !authData.lastName||!authData.email || !authData.password ||!authData.confirmpassword|| !authData.checkbox){
                throw ({response:{status:null,message:'Please Provide All Valid Details for signup'}});
            };
            if( authData.password !== authData.confirmpassword){
                throw ({response:{status:null,message:'confirm Password is not same as password field'}});
            }
            const data=await signUpService(authData);
            toast.success('SignUp Successful');
            return navigate('/login',{state:state});
          }catch({response}){
            if(response.status===422){
              return navigate('/login',{state:state});
            }
            else if(response.status){
                setLoginError(response.data.errors[0]);
            }
            else{
                setLoginError(response.message);
            }
            return;
          } finally{
            dispatchAuthData({type:'SETLOADER',payload:false});
          }

    }
   
  return (

    <FormCard>
        <h2 className='form-name'>Sign Up</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          signUpFormHandler(e);
        }}>
            {loader && <span className="fa-solid fa-spinner fa-spin" style={{color: colors.colorGreen}}></span>}
            {loginError && <p className='form-error'>{loginError}</p>}
            <div className='form-field-div'>
                <label className='form-label' htmlFor='firstname'>First Name</label>
                <div className='form-input-div'>
                    <input id="firstname" name="firstname" placeholder="adarsh" value={signUpFormData.firstname} onChange={(e)=>{setSignUpFormData(prev=>({...prev,firstname:e.target.value.trim()}))}}/>
                </div>
            </div>
            <div className='form-field-div'>
                <label className='form-label' htmlFor='secondname'>Second Name</label>
                <div className='form-input-div'>
                    <input id="secondname" name="secondname" placeholder="balika" value={signUpFormData.secondname} onChange={(e)=>{setSignUpFormData(prev=>({...prev,secondname:e.target.value.trim()}))}}/>
                </div>
            </div>
            <div className='form-field-div'>
                <label className='form-label' htmlFor='email'>Email Address</label>
                <div className='form-input-div'>
                    <input id="email" name="email" type="email" placeholder="abcd@neog.com" value={signUpFormData.email} onChange={(e)=>{setSignUpFormData(prev=>({...prev,email:e.target.value.trim()}))}}/>
                </div>
            </div>
            <div className='form-field-div'>
                <label className='form-label' htmlFor='password'>Password</label>
                <div  className='form-input-div'>
                    <input id="password" name="password" value={signUpFormData.password} onChange={(e)=>{setSignUpFormData(prev=>({...prev,password:e.target.value.trim()}))}} type={togglePassword.password.type} placeholder="*******"/>
                    <span>
                        {togglePassword.password.show ? <VisibilityIcon style={{color:colors.colorGreen}} onClick={showPasswordToggler}/>:
                        <VisibilityOffIcon style={{color:colors.colorGreen}} onClick={showPasswordToggler}/>}
                    </span>
                </div>
            </div>
            <div className='form-field-div'>
                <label className='form-label' htmlFor='confirmpassword'>Confirm Password</label>
                <div  className='form-input-div'>
                    <input id="confirmpassword" name="confirmpassword" value={signUpFormData.confirmpassword} 
                    onChange={
                        (e)=>{
                            setSignUpFormData(prev=>({...prev,confirmpassword:e.target.value.trim()}))
                        }
                    } type={togglePassword.confirmPassword.type} placeholder="*******"/>
                    <span>
                        {togglePassword.confirmPassword.show ? <VisibilityIcon style={{color:colors.colorGreen}} onClick={showConfirmPasswordToggler}/>:
                        <VisibilityOffIcon style={{color:colors.colorGreen}} onClick={showConfirmPasswordToggler}/>}
                    </span>
                </div>
            </div>
            <div className='form-field-div checkbox'>
                <input className='form-checkbox-div' type="checkbox" id="checkbox" name="checkbox" checked={signUpFormData.checkbox} onChange={(e)=>{setSignUpFormData(prev=>({...prev,checkbox:e.target.checked}))}}/>
                <label className='form-label-checkbox' htmlFor="checkbox">I Accept All Terms and Conditions</label>
            </div>
            <button className='form-button'>Sign Up</button>
        </form>
        <Link to="/login" className="form-navigate-link" state={state}>
            <span>
                Already Have An Account
            </span>
            <span className="fa-solid fa-caret-right fa-xl" style={{color: colors.colorGreen}}></span>
        </Link>
    </FormCard>
  )
}