import React from 'react'
import about from "../assets/image/about.png"
import "./about.scss"
import ellipse from "../assets/about.svg"
import ellipse2 from "../assets/about2.svg"
import ellipse3 from "../assets/about3.svg"
import ellipse4 from "../assets/about4.svg"
import person1 from "../assets/image/person1.png"
import person2 from "../assets/image/person2.png"
import person3 from "../assets/image/person3.png"
import twitter from "../assets/twitter.svg"
import instagram from "../assets/instagram.svg"
import linkedin from "../assets/linkedin.svg"
import service1 from "../assets/service1.svg"
import service2 from "../assets/service2.svg"
import service3 from "../assets/service3.svg"



function About() {
  return (
    <div className='boxes container'>
         <div className='about '>
          <div className='about-text'>
            <h3>Our Story</h3>
            <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
            <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
          </div>
          <img className='about-img' src={about} alt="" />
         </div>

         <div className='box'>
          <div className='box-content'>
            <img src={ellipse} alt="" />
            <h2>
            10.5k 
            </h2>

            <h6>Sallers active our site</h6>
          </div>

          <div className='box-content'>
            <img  src={ellipse2} alt="" />
            <h2>
            33k 
            </h2>

            <h6>Mopnthly Produduct Sale</h6>
          </div>

          <div className='box-content'>
            <img src={ellipse3} alt="" />
            <h2>
            45.5k 
            </h2>

            <h6>Customer active in our site</h6>
          </div>

          <div className='box-content'>
            <img src={ellipse4} alt="" />
            <h2>
            25k 
            </h2>

            <h6>Anual gross sale in our site</h6>
          </div>
         </div>

         <div className='persons'>
             <div className='person'>
                  <div className='person-img'>
                  <img src={person1} alt="" />
                  </div>
                  <div className='person-content'>
                    <h3>Tom Cruise</h3>
                    <p>Founder & Chairman</p>
                    <div className='icons'>
                      <img src={twitter} alt="" />
                      <img src={instagram} alt="" />
                      <img src={linkedin} alt="" />
                    </div>
                  </div>
             </div>
             <div className='person'>
                  <div className='person-img'>
                  <img src={person2} alt="" />
                  </div>
                  <div className='person-content'>
                    <h3>Emma Watson</h3>
                    <p>Managing Director</p>
                    <div className='icons'>
                      <img src={twitter} alt="" />
                      <img src={instagram} alt="" />
                      <img src={linkedin} alt="" />
                    </div>
                  </div>
             </div>
             <div className='person'>
                  <div className='person-img'>
                  <img src={person3} alt="" />
                  </div>
                  <div className='person-content'>
                    <h3>Will Smith</h3>
                    <p>Product Designer</p>
                    <div className='icons'>
                      <img src={twitter} alt="" />
                      <img src={instagram} alt="" />
                      <img src={linkedin} alt="" />
                    </div>
                  </div>
             </div>
         </div>

         <div className='services'>
          <div className='service'>
            <img src={service1} alt="" />
            <h5>FREE AND FAST DELIVERY</h5>
            <h6>Free delivery for all orders over $140 </h6>
          </div>
          <div className='service'>
            <img src={service2} alt="" />
            <h5>24/7 CUSTOMER SERVICE</h5>
            <h6>Friendly 24/7 customer support </h6>
          </div>
          <div className='service'>
            <img src={service3} alt="" />
            <h5>MONEY BACK GUARANTEE</h5>
            <h6>We reurn money within 30 days </h6>
          </div>
         </div>

    </div>
  )
}
export default About
