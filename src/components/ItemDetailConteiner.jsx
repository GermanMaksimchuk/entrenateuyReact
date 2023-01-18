import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";





const ItemDetailConteiner = () => {
    const [item, setItem] = useState({});
    const { id } = useParams()



    useEffect(() => {
        const db = getFirestore();
        const documento = doc(db, "Items", id);
        getDoc(documento).then((snapShot) => {
            if (snapShot.exists()) {
                setItem({ id: snapShot.id, ...snapShot.data() });

            } else {
                console.log("Error! No se encontró el Documento!");
            }
        });
    }, []);

    return (

        <div className="conteiner py-5 ">
            <ItemDetail item={item} />

        </div>

    )

}

export default ItemDetailConteiner;
