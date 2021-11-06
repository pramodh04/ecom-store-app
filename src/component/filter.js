import React from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const Filters = (props) =>{
    const {name,id} = props;
    return (
    <div className="filter" key={id}>
        <li  className="list-item">{name}</li>
        <ExpandMoreIcon/>
</div>
    );
}
export default Filters;