import react, { useState } from "react";
import { Button } from "react-bootstrap"

export default function ItemCount({ tope, ini }) {

    const [cantidad, setCantidad] = useState(ini);

    function sumar() {

        if (cantidad < tope) setCantidad(cantidad + 1)
    }

    function restar() {
        if (cantidad > ini) setCantidad(cantidad - 1)
    }

    function onAdd() {
        alert(cantidad);
    }

    return (
        <>
            <Button variant="outline-secondary" onClick={() => restar()}>-</Button>{' '}
            {cantidad}
            <Button variant="outline-secondary" onClick={() => sumar()}>+</Button>{' '}
            <br />
            <Button variant="secondary" onClick={() => onAdd()}>AGREGAR</Button>
            <br />
            <br />
        </>
    )

}