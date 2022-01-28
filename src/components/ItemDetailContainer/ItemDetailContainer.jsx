import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, useParams, Link } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";


export default function ItemDetailContainer() {

    const { itemId } = useParams();
    const [producto, setProducto] = useState({});

    useEffect(() => {
        setTimeout(() => {

            let listadoDeProductos = [{ id: '001', title: 'Remera', price: 100, pictureUrl: "https://d22fxaf9t8d39k.cloudfront.net/6da0a68dbed7261cde30c9aa72c5483fcc40fe18c207a659d9140afc481ab8fb66621.jpeg", stock: 5, initial: 1 },
            { id: '002', title: 'Buzo', price: 50, pictureUrl: "https://d22fxaf9t8d39k.cloudfront.net/c46bc4e954b3288e69bbdb808af37bf2d0811ea809711542c41445a92dfa664066621.jpeg", stock: 5, initial: 1 },
            { id: '003', title: 'Hoodie', price: 70, pictureUrl: "https://d22fxaf9t8d39k.cloudfront.net/9714f9d574809aeccf1fb2d0e1ec98a5ac02f888b01977398ee42f6bbb477de866621.jpeg", stock: 5, initial: 1 }];

            listadoDeProductos = listadoDeProductos.filter(item => item.id === itemId);

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