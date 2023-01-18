import React, { useState, useContext } from "react";
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore";
import { CartContext } from "./context/CartContext";

const Checkout = () => {
    const { cart, clear, sumTotal, cartTotal } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        const fecha = new Date();
        const order = {
            buyer: { name: nombre, email: email, phone: telefono },
            items: cart.map(item => ({ id: item.id, title: item.nombre, price: item.precio, quantity: item.quantity, price_total: item.quantity * item.precio })),
            date: `${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`,
            total: sumTotal(),
            quantity: cartTotal()
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((snapShot) => {
            setOrderId(snapShot.id);
            const orderDoc = doc(db, "orders", snapShot.id);
            updateDoc(orderDoc, { total: order.total * 0.85 });
            clear();
        });
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label for="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" placeholder="Ingrese su Nombre" onInput={(e) => { setNombre(e.target.value) }} />
                        </div>
                        <div class="mb-3">
                            <label for="email" className="form-label">Email</label>
                         <input type="email" required  className="form-control"   id="email" placeholder="Ingrese su Email" onInput={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label for="telefono" className="form-label">Teléfono</label>
                            <input  className="form-control" id="telefono"   placeholder="Ingrese su Teléfono" onInput={(e) => { setTelefono(e.target.value) }} />
                        </div>
                        <button type="button" onClick={generarOrden} className="btn btn-success">Generar Orden</button>
                    </form>
                </div>
                <div className="col">
                    <table class="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={64} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">${item.quantity * item.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3} className="text-end"><b>Total</b></td>
                                <td className="text-center"><b>${sumTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div class="alert alert-success" role="alert">
                        <h1>Felicitaciones!</h1>
                        <p>Tu Número de Orden : {orderId}</p>
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;