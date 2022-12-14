import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import arrayProductos from "./arrayProductos.json"
import ItemDetail from "./ItemDetail";
import { useParams} from "react-router-dom";



const ItemDetailConteiner = () =>{      
   const [item, setItem]=useState({});
   const {id} = useParams();
   useEffect(() =>{
    const promesa = new Promise((resolve) =>{ 
   
    setTimeout(() => {
        resolve(arrayProductos.find(item => item.id === parseInt(id))); 
    }, ); 
    

    });
    promesa.then((data) => {
        setItem(data);
    })
    }, [id]);
     
return(

<div className="conteiner">
   <ItemDetail item= {item}/>
 
</div>

)
 
}

export default ItemDetailConteiner;
