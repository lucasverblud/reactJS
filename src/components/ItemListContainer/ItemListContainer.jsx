import React, { useState } from "react"
import Product from "../Products/Product";

export default function ItemListContainer() {
    const [arrayDeProductos, setArrayDeProductos] = useState([
        { nombre: 'Remera', stock: 5, initial: 1 },
        { nombre: 'Buzo', stock: 6, initial: 1 },
        { nombre: 'Campera', stock: 7, initial: 1 }
    ]);

    return (
        <>
            {
                arrayDeProductos.map(item => <Product item={item} />)
            }
        </>
    )
}