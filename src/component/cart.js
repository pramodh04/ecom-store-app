import React from "react";


const Cart = (props) =>{
  const {item,remove} = props;
    return(
        <div >
            <div className="cart-item">
        <div className="cart-card">
            <div className="cart-info">
                <p className="cart-title">{item.title}</p>
                <h4>Cost : <i class="fas fa-rupee-sign"></i> {item.cost}</h4>
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