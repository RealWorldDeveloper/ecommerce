import React, { useDebugValue, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import {LoginPop} from "../../Redux/Login/LoginSlice";
function NavBar() {
  const [menu , Setmenu] = useState('Home')
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={assets.logo} alt="" />
      </div>
      <div className="navbar-middle">
        <ul>
          <li> <Link to={'/'} onClick={() => Setmenu('Home')} className={menu === 'Home'? 'active': '' } >Home</Link></li>
          <li onClick={() => Setmenu('Mobile App')} className={menu === 'Mobile App'? 'active': ''} >Mobile App</li>
          <li onClick={() => Setmenu('Menu')} className={menu === 'Menu'? 'active': ''} >Menu</li>
          <li onClick={() => Setmenu('Contact')} className={menu ==='Contact'? 'active': '' } >Contact</li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="icon1"><i class="fa-solid fa-magnifying-glass"></i></div>
        <Link to={'/cartpage'} className="icon2"><i class="fa-solid fa-cart-shopping"><span className="indication">{cartItems.length}</span></i></Link>
        <div className="icon3" onClick={()=> dispatch(LoginPop(true))}><i class="fa-solid fa-user"></i></div>
      </div>
      
    
    
    
    
    </div>
  );
}

export default NavBar;
