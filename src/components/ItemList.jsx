import React from "react";
import Item from "./Item";


const ItemList = ({ items }) => {
    console.log(items);
    return (

        <div className="row">
            {
                items.map(item =>
                    <div className="col-md-2" key={item.id}>
                        <Item item={item} />
                    </div>

                )}
        </div>


    )

}

export default ItemList;
