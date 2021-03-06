import React, { useState } from "react";
import { Button } from "react-bootstrap"

export default function ItemCount({ tope, ini, onAdd }) {

    const [cantidad, setCantidad] = useState(ini);

    function sumar() {

        if (cantidad < tope) setCantidad(cantidad + 1)
    }

    function restar() {
        if (cantidad > ini) setCantidad(cantidad - 1)
    }


    return (
        <>
            <Button variant="outline-secondary" onClick={() => restar()}>-</Button>{' '}
            <b>{cantidad}</b>
            <Button variant="outline-secondary" onClick={() => sumar()}>+</Button>{' '}
            <Button variant="secondary" onClick={() => onAdd(cantidad)}>AGREGAR</Button>

        </>
    )

}