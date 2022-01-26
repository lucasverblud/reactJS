import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, useParams, Link } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";


export default function ItemDetailContainer() {

    const { itemId } = useParams();
    const [producto, setProducto] = useState({});

    useEffect(() => {
        setTimeout(() => {

            let listadoDeProductos = [{ id: '001', title: 'Remera', price: 100, pictureUrl: '', stock: 5, initial: 1 },
            { id: '002', title: 'Buzo', price: 50, pictureUrl: '', stock: 5, initial: 1 },
            { id: '003', title: 'Campera', price: 70, pictureUrl: '', stock: 5, initial: 1 }];

            listadoDeProductos = listadoDeProductos.filter(item => item.id == itemId);

            let myProducto = listadoDeProductos[0];

            setProducto(myProducto);

        }, 2000)
    }, [itemId])

    return (
        <>
            {itemId}
            <ItemDetail producto={producto} />
            {/* <Link to={"/item/002"}>ir al item 2</Link> */}
        </>
    );
}