import React from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Cart = (props) =>{
  const qty = [1,2,3,4,5,6,7,8];
  const sizes = ["XS","S","M","L","XL","XXL"];

  const {item,remove} = props;
    return(
        <div >
            <div className="cart-item">
        <div className="cart-card">
            <div className="cart-info">
                <p className="cart-title">{item.title}</p>
                <h4>Cost : <i class="fas fa-rupee-sign"></i> {item.cost}</h4>
                <div id="select"> <span className="select">
                    Size : <ExpandMoreIcon />
                </span>
                <span className="select">
                    Quantity : <ExpandMoreIcon/>
                </span></div>
               
            </div>
            <div >
             <img className="cart-img" src={item.img} alt="cart-image"/>
            </div>
        </div>
        <div className="cart-btn">
            <button className="btn-cart" onClick={()=>remove(item)}>Remove</button>
            <hr/>
            <button className="btn-cart">Move to wishlist</button>
        </div>
        </div>
        </div>
    );
}

export default Cart;