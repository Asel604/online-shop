import React from "react";
import "./checkOut.scss";
import checkbox from "../assets/checkbox.svg";
import cart from "../assets/image/cart.png";
import { useSelector, useDispatch } from "react-redux";
import ellipse from "../assets/ellipse.svg";
import bank1 from "../assets/image/bank1.png";
import bank2 from "../assets/image/bank2.png";
import bank3 from "../assets/image/bank3.png";
import bank4 from "../assets/image/bank4.png";

function CheckOut() {
  const { list } = useSelector((state) => state.check);
  const dispatch = useDispatch();

  console.log(list);

  return (
    <div className="checkout container">
      <div className="check-left">
        <div className="head">
          <p>Account</p>/<p>My Account</p>/<p>Product</p>/<p>View Cart</p>/
          <p>Check Out</p>
        </div>
        <h3>Billing Details</h3>

        <div className="mains">
          <div className="main">
            <h6> First Name*</h6>
            <input type="text" />
          </div>
          <div className="main">
            <h6> Company Name</h6>
            <input type="text" />
          </div>
          <div className="main">
            <h6>Street Address*</h6>
            <input type="text" />
          </div>
          <div className="main">
            <h6> Apartment, floor, etc. (optional)</h6>
            <input type="text" />
          </div>
          <div className="main">
            <h6>Town/City*</h6>
            <input type="text" />
          </div>
          <div className="main">
            <h6>Phone Number*</h6>
            <input type="text" />
          </div>
          <div className="main">
            <h6>Email Address*</h6>
            <input type="text" />
          </div>
        </div>
        <div className="checkbox">
          <img src={checkbox} alt="" />
          <h5>Save this information for faster check-out next time</h5>
        </div>
      </div>
      <div className="check-right">
        {list?.map((data) => (
          <div className="check-product">
            <img src={data.imageUrl} alt="" />
            <div className="price">
              <h4>
                {data.title}
              </h4>
              <h4>${data.result}</h4>
            </div>
          </div>
        ))}

        <div className="totals">
          <div className="total">
            <h4>Subtotal:</h4>
            <h4>$68</h4>
          </div>
          <div className="total">
            <h4>Shipping:</h4>
            <h4>$500</h4>
          </div>
          <div className="total">
            <h4>Total</h4>
            <h4>$1110</h4>
          </div>
        </div>

        <div className="bank">
          <img src={ellipse} alt="" />
          <h4>Bank</h4>
          <img src={bank1} alt="" />
          <img src={bank2} alt="" />
          <img src={bank3} alt="" />
          <img src={bank4} alt="" />
        </div>
        <div className="cash">
          <img src={ellipse} alt="" />
          <h4>Cash on delivery</h4>
        </div>
        <div className="coupon">
          <div className="code">
            <h6>Coupon Code</h6>
          </div>
          <button>Apply Coupon</button>
        </div>
        <button className="btn">Place Order</button>
      </div>
    </div>
  );
}

export default CheckOut;
