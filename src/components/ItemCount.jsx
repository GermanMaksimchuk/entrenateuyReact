
import { useState } from "react";

const ItemCount= ({stockitem}) => { 
    const [counter ,setCounter] = useState (1);
    const [stock ,setstock] = useState (stockitem);
    
    const incrementarstock = () => {
        if (counter < stock){ 
    setCounter( counter +1) }
}
    
    const decrementarstock = () => {
        if (counter >1){
    setCounter( counter -1)} 
}
    
    const onAdd = () =>{
    if((stock > 0)&& (counter < stock)){
        setstock(stock-counter);
        setCounter(0);
        console.log (counter)
}
    }
    

   
    
return(
    <div className="container">
<div className="row">
    <div className="col-md-12">
    <div className="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" className="btn btn-outline-primary" onClick={decrementarstock}>-</button>
  <button type="button" className="btn btn-outline-primary">{counter}</button>
  <button type="button" className="btn btn-outline-primary"onClick={incrementarstock}>+</button>
</div> 
<div className="row">
    <div className="col-md-12">
    <button className="btn btn-outline-primary"onClick={onAdd}>Agregar al Carrito</button>
    </div>
    </div>
    </div>
<div>
    
</div>
</div>


</div>
)
  }


export default ItemCount;
