import React from 'react'
import "./wishlist.scss"
import delet from "../assets/delete.svg"
import cart from "../assets/cart.svg"
import item from "../assets/image/item.png"
import { useSelector } from 'react-redux'


function Wishlist() {
   const{items} = useSelector((state) => state.wishlist)
  return (
    <div className='wishlist container'>
     <div className='wishlist-top'>
      <h6>Wishlist ({items.length})</h6>
      <button>Move All To Bag</button>
     </div>
     <div className='contents'>
      {
        items?.map((data)=>(

     <div className='content'>
      <div className='content-top'>
        <div className='con-img'><img  src={data.imageUrl} alt="" /></div>
        <div className='icons'>
          <h6>-35%</h6>

          <img src={delet} alt="" />
        </div>
        <div className='btn'>
        <button>Add To Cart</button>
         <img src={cart} alt="" />
        </div>
      </div>
      <div className='content-bottom'>
        <h5>{data.title}</h5>
        <div className='price'>
          <p className='p1'>$120</p>
          <p className='p2'> %160</p>
        </div>
      </div>
     </div>
        ))
      }
     </div>
     </div>
  )
}

export default Wishlist
