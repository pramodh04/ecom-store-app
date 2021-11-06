import React from "react";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import SearchIcon from '@material-ui/icons/Search';

const Topnav =(props)=>{
const {favorite,setfavorite,cart,setcart} = props;
   
return <>
<div className="top-nav">
<div className="logo">
    <div className="title" onClick ={()=>setfavorite(false),()=>setcart(false)}>
        <ShoppingBasketIcon id="basket"/>
<h1>Shop-In</h1></div>
<h4 className={`${(favorite||cart)?"display":"gender"}`}>Men</h4>
<h4 className={`${(favorite||cart)?"display":"gender"}`}>Women</h4>
</div>
<div className="options">
    <div className={`${(favorite||cart)?"display":"search"}`}>
        < SearchIcon id="search-icon"/>
    <input type="text" id="search-item" placeholder="Search by product,category or collection"/>
    </div>
    <hr/>
    <h4 className={`${(favorite||cart)?"display":""}`} id="login">Login</h4>
   <FavoriteBorderIcon onClick ={()=>setfavorite(true)}  className={`${favorite?"clicked":""}`} id={`${cart?"display":"favorite-icon"}`}/>
  <LocalMallIcon onClick ={()=>setcart(true)}  className={`${cart?"clicked":""}`} id={`${favorite?"display":"bag-icon"}`}/>
</div>
</div>
<hr/>
</>
}
export default Topnav;
