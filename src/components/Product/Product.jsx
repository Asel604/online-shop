import React, { useState, useEffect } from "react";
import "./Product.scss";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";
import foto from "../../assets/image/foto.png";
import wishlist from "../../assets/wishlist.svg";
import aye from "../../assets/aye.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reduceCart, reduceCount } from "../../redux/counter/countSlice.js";
import { addWish } from "../../redux/wishlist/wishSlice.js";
import { addCart } from "../../redux/cart/cart.js";

import axios from "axios";

import Star from "../../assets/Star.jsx";
import { addCheck } from "../../redux/check/checkOut.js";

const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/advertisement";

function Product() {
  const [products, setProducts] = useState([]);
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const targetTime = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (difference < 0) {
        clearInterval(interval);
      } else {
        setTime({ days, hours, minutes, seconds });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  async function getProduct() {
    try {
      const res = await axios.get(API);

      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  function checkPrice(p, d) {
    return p - p * (d / 100).toFixed(0);
  }
  checkPrice();

  return (
    <div className="sales container">
      <div className="flash">
        <div className="flash-left">
          <div className="today">
            <div className="text">
              <div className="red-line"></div>
              <p>Today's</p>
            </div>
            <h3> Flash Sales</h3>
          </div>
          <div className="group">
            <div className="count">
              <p>Days</p>
              <h4>{time.days}</h4>
            </div>
            <div className="delete">:</div>
            <div className="count">
              <p>Hours</p>
              <h4>{time.hours}</h4>
            </div>
            <div className="delete">:</div>
            <div className="count">
              <p>Minutes</p>
              <h4>{time.minutes}</h4>
            </div>
            <div className="delete">:</div>
            <div className="count">
              <p>Seconds</p>
              <h4>{time.seconds}</h4>
            </div>
          </div>
        </div>
        <div className="flash-icons">
          <div className="icon">
            <img src={left} alt="" />
            <img src={right} alt="" />
          </div>
          <button onClick={() => dispatch(reduceCount(items))}>
            Reduce Wishlist
          </button>
          <button onClick={() => dispatch(reduceCart())}>Reduce Cart</button>
        </div>
      </div>

      <div className="products">
        {products?.map((item) => (
          <div key={item.id}>
            <div className="product-top">
              <Link to={`/product/${item.id}`} className="product-image">
                <img src={item.imageUrl} alt="" />
              </Link>
              <div className="product-icons">
                <img
                  onClick={() => dispatch(addWish(item))}
                  src={wishlist}
                  alt=""
                />

                <img src={aye} alt="" />
              </div>
              {item.discount && (
                <div className="sale">
                  <h6>{item.discount}%</h6>
                </div>
              )}
            </div>
            <button onClick={() => dispatch(addCart(item))}>Add to cart</button>
            <div className="product-bottom">
              <h3>{item.title}</h3>
              <div className="price">
                <p className="p1">${checkPrice(item.price, item.discount)}</p>
                {item.discount && <p className="p2">${item.price}</p>}
              </div>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((x) => (
                  <Star key={x} fill={item.star >= x ? "#FFAD33" : "grey"} />
                ))}

                <p>(88)</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
