import React from "react";
import carrito from "./carrito.png";


export default function CartWidget (){
    return (
        <div>
            <img src={carrito} alt="" />
            <span className='badge'>0</span>
        </div>
    );
}