import React from "react";
import carrito from "./carrito.png";
import { Link } from "react-router-dom";


export default function CartWidget (){
    return (
        <div>
            <Link to={`/cart/`}><img src={carrito}/></Link>
        </div>
    );
}