import React, { useState } from 'react'
import phone from '../assets/image/phone.png'
import "./signup.css"
import google from '../assets/google.svg'
import { Link } from 'react-router-dom'
import {auth} from "../firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {  toast } from 'react-toastify';
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";




function SignUp() {
  const[user, setUser] = useState({email:"", password:""})
  const[active, setActive] = useState(false)
  function handler(event){
    const {value, name}=event.target;

    setUser({...user, [name]:value})
  }
  async function createUser() {
    try {
      const res = await createUserWithEmailAndPassword(auth,user.email,user.password);
      if(res){
        toast.success("user was succes create")
      }
      console.log(res);
      
    } catch (error) {
      console.log(error);
      toast.error("user already in use")
    }
  }
  return (
    <div>
      
      <div className='sign-left'>
           <img src={phone} alt="" />
     

      <div className='sign-right'>
        <div className='content-top'>
          <h4>Create an account</h4>
          <p>Enter your details below</p>
        </div>
        <div className='content-bottom'>
          <div className='inputs'>
               <input type="text"  placeholder='Name' />
               <input type="email" placeholder='Email or Phone Number' value={user.email} name="email" onChange={handler}/>
               <div className='icons'>
               <input type={active?"text":"password"} placeholder='Password' value={user.password} name="password" onChange={handler} />
              {active ? <LuEye  onClick={()=> setActive(false)} />: <LuEyeOff onClick={()=>setActive(true)} />}

               </div>

          </div>
          <div className='account'>
            <button onClick={()=> createUser()}>Create Account</button>
            <div>
                <div className='account-top'>
                  <img src={google} alt="" />
                  <h6>Sign up with Google</h6>
                </div>
                <div className='account-bottom'>
                   <p>Already have account?</p>
                   <Link to="/login">Log in</Link>
                </div>
          
            </div>
          </div>
        </div>



      </div>

      </div>
    </div>
  )
}

export default SignUp
