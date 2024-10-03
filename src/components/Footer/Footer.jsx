import React from 'react'
import "./footer.scss"
import vector from '../../assets/vector.svg'
import facebook from "../../assets/facebook.svg"
import twitter from "../../assets/twitter.svg"
import instagram from "../../assets/instagram.svg"
import linkedin from "../../assets/linkedin.svg"
import qrcode from "../../assets/qrcode.svg"
import appstore from "../../assets/appstore.svg"
import gplay from "../../assets/gplay.svg"
function Footer() {
  return (
    <div className='footer'>
     <div className='contents'>
     <div className='footer-content'>
        <h4>Exclusive</h4>
        <p>Subscribe</p>
        <p>Get 10% off your first order</p>
        <div className='foot'>
        <button className='btn'>Enter your email</button>
         <img src={vector} alt="" />
        </div>

      </div>
      <div className='footer-content'>
        <h4>Support</h4>
        <p>111 Bijoy sarani, Dhaka, <br />  DH 1515, Bangladesh.</p>
        <p>exclusive@gmail.com</p>
        <p>+88015-88888-9999</p>
      </div>
      <div className='footer-content'>
        <h4>Account</h4>
        <p>My Account</p>
        <p>Login / Register</p>
        <p>Cart</p>
        <p>Wishlist</p>
        <p>Shop</p>
      </div>
      <div className='footer-content'>
        <h4>Quick Link</h4>
        <p>Privacy Policy</p>
        <p>Terms Of Use</p>
        <p>FAQ</p>
        <p>Contact</p>
      </div>
       <div className='footer-content'>
        <h4>Download App</h4>
        <h6>Save $3 with App New User Only</h6>
         <div className='icons'>
               <div className='icon-top'>
                <img src={qrcode} alt="" />
                <div className='icon-right' >
                  <img src={gplay} alt="" />
                  <img src={appstore} alt="" />
                </div>
               </div>
               <div className='icon-bottom'>
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
                <img src={linkedin} alt="" />
               </div>
         </div>
      </div>
     </div>
    </div>
  )
}

export default Footer
