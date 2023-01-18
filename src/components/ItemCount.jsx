
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const ItemCount = ({ stock, onAdd }) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [vendido, setVendido] = useState(false);


    const incrementarstock = () => {
        if (counter < itemStock) {
            setCounter(counter + 1)
        }
    }

    const decrementarstock = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    const addToCart = (quantity) => {
        setItemStock(itemStock - quantity);
        setCounter(1);
        setVendido(true);
        onAdd(quantity);
    }


    useEffect(() => {
        setItemStock(stock);
    }, [stock])



    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={decrementarstock}>-</button>
                        <button type="button" className="btn btn-outline-primary">{counter}</button>
                        <button type="button" className="btn btn-outline-primary" onClick={incrementarstock}>+</button>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {vendido ? <Link to={"/cart"} className="btn btn-outline-primary">Terminar Mi Compra</Link> : <button className="btn btn-outline-primary" onClick={() => { addToCart(counter) }}>Agregar al Carrito</button>}
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
