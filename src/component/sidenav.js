import React,{useState} from "react";
import Filters from "./filter"

const Sidenav = (props) =>{
    const {favorite,cart} = props;
    const fdata =["Category","Size","Color","Design","Brand","Fit","Top wear","Bottom wear","Night Wear","Formals","Accessories","Sort By"];
     const [filter,setfilter] = useState(fdata);
    return(
        <div className={`${(favorite||cart)?"display":"side-nav"}`} >;
         <ul className="nav-list">
             Filters
             {filter.map((fil,index)=>{
                 return <>
                 <Filters key={index} name={fil} id={index}/>
                 </>
             })}
         </ul>
        </div>
    );
}
export default Sidenav;