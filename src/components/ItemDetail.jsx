import React from "react";
import ItemCount from "./ItemCount"

const ItemDetail = ({item}) =>{      
     
return(
<div className="row my-6">
    <div className="col-md-4 offset-md-4 text center">
        <img src={item.imagen} className="img-fluid" alt="ok"></img>
        <h1>{item.nombre}</h1>
        <p>{item.description}</p>
        <p><b>${item.precio}</b></p>
        <ItemCount stockItems={item.stock} />
        </div> 
        
    </div>

  

    

)
 
}

export default ItemDetail;
