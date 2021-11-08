import React, { useState } from "react";
import {data} from "./data";
import Card from "./card";
import Cart from "./cart"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Items =(props)=>{
    const {favorite,cart,setfavorite,setcart} = props;
    const [items,setitem] = useState(data);
    const [fav,setfav] = useState([]);
    const [bag,setbag] = useState([]);

    const handlefav=(product)=>{
        setfav((prevstate)=>[...prevstate,product]);
    }
    const handlebag=(product)=>{
        setbag((prevstate)=>[...prevstate,product]);
    }

const isfav = (item)=>{
    let index = fav.findIndex((singleitem)=>singleitem == item);
    if(index != -1)
    return true;
    else 
    return false;
}
const isbag = (item)=>{
    let index = bag.findIndex((singleitem)=>singleitem == item);
    if(index != -1)
    return true;
    else 
    return false;
}
let totalcost=0;
bag.map((item)=>{
    totalcost += parseInt(item.cost);
})
let discount = parseInt(0.3 * totalcost) ;
console.log(discount);
 const handleunfav =(item)=>{
    let unfavlist = fav.filter((singleitem)=>singleitem !== item);
    setfav(unfavlist);
 }

 const removebag =(item)=>{
    let removelist = bag.filter((singleitem)=>singleitem !== item);
    setbag(removelist);
 }

  const itemslist = favorite?fav:items;
  if(cart){
      if(bag.length > 0)
      {
      return(
           <div className="cart">
               <div className="cart-main">
                   <h3>My Bag</h3>
               <p className="delivery">Yay! You got FREE delivery on this order</p>
                   {
                       bag.map((item,index)=>{
                           return(
                            <Cart key={index} item={item} remove={removebag}/>  
                           )
                       })
                   }
               </div>
               <div className="summary">
                   <h4 className="prime">Save extra Rs.100 with prime</h4>
                   <p className="get-offer">Get flat Rs 100 Discount on your First Purchase above Rs.499 & Free shipping. Coupon code - NEW100</p>
                   <h3 className="coupon">Have a coupon? or referal?</h3>
                   <div className="price">
                   <h4 className="pricesummary">Price Summary</h4>
        <ul>
            <li className="cart-list-item">Total MRP(including all taxes) :    <i class="fas fa-rupee-sign"> {totalcost+discount}</i></li>
            <li className="cart-list-item">Bag Discount : <i class="fas fa-rupee-sign"> {discount}</i></li>
            <li className="cart-list-item">Delivery charges : <span>FREE</span>    </li>
                      
        <li className="cart-list-item">  subTotal : 
        <i class="fas fa-rupee-sign"> {totalcost}</i> </li>
        <li className="cart-list-item" id="list-discount"> Congratulations! You save Rs.{discount} on this order. </li>  
        </ul>
        <h3 id="total">Total :  <i class="fas fa-rupee-sign">  {totalcost}</i>  </h3>
                   </div>
                   <h2 id="address">ADD ADDRESS</h2>
      </div>
           </div>
      );
                }else{
                    return(
                        <div className="cart-empty">
                         <div className="wishlist-empty">
           <img src="https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png" alt="empty-cards" className="empty-img"/>
           <h2 >Your Bag is Empty!</h2>
           <h2 id="continue-shopping" onClick={()=>setcart(false)}>Continue Shopping</h2>
         </div>
                        </div>
                    );
                }
  }else
  {
      if(itemslist < 1 && favorite)
      {
         return <>
         <div className="wishlist-empty">
           <img src="https://images.bewakoof.com/web/group-3x-1509961969.png" alt="empty-cards" className="empty-img"/>
           <h2 >Your Wishlist is Empty!</h2>
           <h2 id="continue-shopping" onClick={()=>setfavorite(false)}>Continue Shopping</h2>
         </div>
         </>
      }else{
        return(<>
            <div>
            <h2 className={`${favorite?"wishlist-title":"display"}`}>
                    WISHLIST
                </h2>
            
            <div className="items"  id = {`${favorite?"wishlist":""}`}>
                
                {
                    itemslist.map((item,index)=>{
                        return(
                           <Card key={index} item={item} id={index} handlefav={handlefav} isFav={isfav(item)} handleunfav={handleunfav} handlebag={handlebag} isbag={isbag(item)}/> 
                        );
                    })
                }
            </div>
            </div>
            
            </>);
      }
   
  }
}
export default Items;