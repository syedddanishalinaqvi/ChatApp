import React from 'react'
import {auth,provider} from "../firebase-config.js"
import {signInWithPopup} from "firebase/auth"
import google from "./google.png"

import Cookies from "universal-cookie"
const cookies=new Cookies();

const SignUp = (props) => {
    const{setIsAuth}=props;
    const handleClick=async ()=>{
        try{
        const result=await signInWithPopup(auth,provider);
        console.log(result)
        cookies.set("auth-token",result.user.refreshToken);
        setIsAuth(true)
        }
        catch(err){
            console.error(err);
        }
    }
  return (
    <div>
        <h1 className='bg-light'>Chatizo</h1>
    <div className='align-items-center text-center p-5 container'>
      <h2>Sign Up Using Google Account</h2>
      <span><img src={google} alt="/" /></span><button className='btn btn-primary m-5' onClick={handleClick}>Sign Up</button>
    </div>
    </div>
  )
}

export default SignUp
