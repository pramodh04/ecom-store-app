import React from "react";
const Card = (props) =>{
const {item,id,handlefav,isFav,handleunfav,handlebag,isbag} = props;
const alertbtn = ()=>{
    alert("Aleardy Item exists in a Bag");
}

 return(
     <div className="card" key={id}>
      <img src={item.img} alt="product" className="product"/>
      <p className="title-tag">{item.title}</p>
      <h4 className="cost">Cost :
       <i class="fas fa-rupee-sign"></i> {item.cost}</h4>
       {
           isbag?<button className="add-btn" onClick={alertbtn}>Go to Bag</button>:<button className="add-btn" onClick={()=>{handlebag(item)}}>Add to Bag</button>
       }
      <i class="far fa-heart" id={`${isFav?"heart":""}`} onClick={()=>{isFav?handleunfav(item):handlefav(item)}}></i>
     </div>
 );
}
export default Card;