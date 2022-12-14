import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) =>{      
     
return(
    <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
<div className="card border border-0">
    <img src={item.imagen} className="card-img-top" alt={item.nombre}></img>



    <div className="card-body">
        <p className="card-text ">{item.nombre}</p>
        <p className="card-text ">${item.precio}</p>

</div>
    </div>
</Link>


    


)
 
}

export default Item;
