import React, { useState } from 'react'
import"./signup.css"
import phone  from "../assets/image/phone.png"
import {auth} from "../firebase"
import { signInWithEmailAndPassword } from 'firebase/auth'
import {  toast } from 'react-toastify';
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

function Login() {
  const[user, setUser] = useState({email:"", password:""})
  const[active, setActive] = useState(false)
  function handler(event){
    const {value, name}=event.target;

    setUser({...user, [name]:value})
  }
  async function createUser() {
    try {
      const res = await signInWithEmailAndPassword(auth,user.email,user.password);
      if(res){
        toast.success("user was succes create")
      }
      console.log(res);
      // signInWithEmailAndPassword
    } catch (error) {
      console.log(error);
      toast.error("user already in use")
    }
  }
  return (
    <div>
         <div className='login'>
        <img src={phone} alt="" />
        <div className='login-content'>
            <div className='login-top' >
                <h4>Log in to Exclusive</h4>
                <p>Enter your details below</p>
           </div>
            
              <div className='login-bottom' >
                <div className='inputs'>
                  <input type="email"  placeholder='Email or Phone Number' value={user.email} name="email" onChange={handler}/>
                  <div className='icons'>

                  <input type={active?"text":"password"}  placeholder='Password' value={user.password} name="password" onChange={handler} />
                 {active? <FiEye onClick={()=>setActive(false)}/>:<FiEyeOff  onClick={()=>setActive(true)} />}
                  </div>
                </div>
                <div className='password'>
                  <button onClick={()=> createUser()}>Log In</button>
                  <h6>Forget Password?</h6>
                </div>
              </div>
         </div>
       </div>

    </div>
  )
}

export default Login
