import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./item.scss";
import axios from "axios";
import star from "../../assets/star.svg";
import like from "../../assets/like.svg";
import delivery from "../../assets/delivery1.svg";
import delivery2 from "../../assets/delivery2.svg";

const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/advertisement";
function ItemProduct() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [image, setImage] = useState("");
  const [products, setProducts] = useState([]);

  async function getProductById() {
    try {
      const res = await axios.get(`${API}/${id}`);

      setData(res.data);
      setImage(res.data.imageUrl);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProductById();
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
  return (
    <div>
      <div className="item container">
        <div className="item-imgs">
          {data.imagesUrl?.map((item) => (
            <div onClick={() => setImage(item)} className="img">
              <img src={item} alt="" />
            </div>
          ))}
        </div>
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="item-content">
          <h2>Havic HV G-92 Gamepad</h2>
          <div className="stars">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <p>(150 Reviews)</p>
            <div className="p"></div>
            <h6>In Stock</h6>
          </div>

          <div className="price">$192.00</div>
          <h5>
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </h5>
          <div className="line"></div>

          <div className="color">
            <h4>Colours:</h4>
            <div className="ellipse">
              <p className="p1"></p>
              <p className="p2"></p>
            </div>
          </div>

          <div className="size">
            <h4>Size:</h4>

            {data.size?.map((x, index) => (
              <span key={index}>{x}</span>
            ))}
          </div>
          <div className="btn">
            <div className="count">
              <div className="minus">-</div>
              <div className="two">2</div>
              <div className="plus">+</div>
            </div>
            <button className="buy">Buy Now</button>

            <div className="btn-img">
              <img src={like} alt="" />
            </div>
          </div>
          <div className="delivery">
            <div className="delivery-top">
              <img src={delivery} alt="" />
              <div className="del-text">
                <h5>Free Delivery</h5>
                <h6>Enter your postal code for Delivery Availability</h6>
              </div>
            </div>

            <div className="delivery-bottom">
              <img src={delivery2} alt="" />
              <div className="del-text">
                <h5>Return Delivery</h5>
                <h6>Free 30 Days Delivery Returns. Details</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relates container">
        <div className="relate">
          <div className="red-line"></div>
          <h4>Related Item</h4>
        </div>

        <div className="item-products">
          {/* {products?.map=((item)=>(
                
            <div key={item.id}>
                  <div className='item-top'>
                    <div className='item-img'>
                      <img src={item.imageUrl} alt="" />
                    </div>
                    <div className='icons'>
                      <img src={wishlist} alt="" />
                      <img src={aye} alt="" />
                    </div>
                    <div className='sale'>
                      <h6>-30%</h6>
                    </div>
                  </div>

                  <div className='item-bottom'>
                    <h3>{item.title}</h3>

                    <div className='price'>
                      <p className='p1'>120$</p>
                      <p className='p2'> 160$</p>
                    </div>
                     
                     <div className='stars'>
                      <div ></div>
                      <p>(88)</p>
                     </div>
                  </div>
                </div>
                ))} */}
        </div>
      </div>
    </div>
  );
}

export default ItemProduct;
