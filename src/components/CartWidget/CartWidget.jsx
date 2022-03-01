import React, { useContext } from "react";
import carrito from "./carrito.png";
import { Link } from "react-router-dom";
import { contexto } from "../CartContext/CartContext";
import { Button } from "react-bootstrap"


export default function CartWidget() {
    const { sumarCantidad } = useContext(contexto);

    return (
        <div>
            <Link to={`/cart/`}>
                <Button variant="outline-secondary">
                    <img src={carrito} alt=""/>
                    {
                        (sumarCantidad())
                    }
                </Button>{' '}
            </Link>
        </div>
    );
}