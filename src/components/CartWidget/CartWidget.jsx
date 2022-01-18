import React from "react";
import carrito from "./carrito.png";

export default function CartWidget (){
    return (
        <div>
            <img src={carrito} alt="" />
            <p>4</p>
        </div>
    );
}