


 
import React from "react";
import poisk from '../../assets/poisk.svg'
import like from '../../assets/like.svg'
import shop from '../../assets/shop.svg'
import "./Header.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function Header() {
  const {t , i18n} = useTranslation()
  const{value} = useSelector((state)=>state.counter)
  const {items} = useSelector((state)=> state.wishlist)
  const{list} = useSelector((state)=>state.cart)
  function handleChangeLng(event) {
    const lng = event.target.value;
    i18n.changeLanguage(lng)
  }
  return (
    <div>
      <div className="top-header">
        <div className="container flex">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <select onChange={handleChangeLng}>
            <option  value="kg">KGZ</option>
            <option value="en">ENG</option>
            <option value="ru">RUS</option>
          </select>
        </div>
      </div>
      <header className="header container">
        <div className="header-left">
          <h1>{t("logo")}</h1>
          <ul>
            <li>
              <Link to="/">{t("home")}</Link>
            </li>
            <li>
              <Link to="/about">{t("about")}</Link>
            </li>
            <li>
              <Link to="/contact">{t("contact")}</Link>
            </li>
            <li>
              <Link to="/register">{t("sign")}</Link>
            </li>
          </ul>
        </div>
        <div className="header-right">
          <div className="search">
            <input type="text" placeholder="What are you looking for?" />
            <img src={poisk} alt="" />
          </div>
          <div className="icons">
           <div className="icon">

             <Link to="Wishlist">
            <img className="icon1" src={like} alt="" />
            </Link>
            <div className="count">{items.length}</div>

           </div>
          
            <div className="icon">
           <Link to="cart">
            <img className="icon2" src={shop} alt="" />
        
          </Link>
             <div className="count2">{list.length}</div>
              </div>  
                
            
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;


