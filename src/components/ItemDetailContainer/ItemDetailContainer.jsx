import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader";
import { contexto } from '../CartContext/CartContext';


export default function ItemDetailContainer() {

    const { addItem } = useContext(contexto);

    const { itemId } = useParams();
    const [Loading, setLoading] = useState(false);
    const [producto, setProducto] = useState([]);
    const [added, setAdded] = useState(false);

    const productos = [
        { id: '001', title: 'Remera1', price: 100, pictureUrl: "https://d22fxaf9t8d39k.cloudfront.net/6da0a68dbed7261cde30c9aa72c5483fcc40fe18c207a659d9140afc481ab8fb66621.jpeg", stock: 5, initial: 1, categoria: 'remera' },
        { id: '002', title: 'Buzo1', price: 50, pictureUrl: "https://d22fxaf9t8d39k.cloudfront.net/c46bc4e954b3288e69bbdb808af37bf2d0811ea809711542c41445a92dfa664066621.jpeg", stock: 5, initial: 1, categoria: 'buzo' },
        { id: '003', title: 'Hoodie1', price: 70, pictureUrl: "https://d22fxaf9t8d39k.cloudfront.net/9714f9d574809aeccf1fb2d0e1ec98a5ac02f888b01977398ee42f6bbb477de866621.jpeg", stock: 5, initial: 1, categoria: 'hoodie' }
    ];

    useEffect(() => {
        setLoading(true);
        const productosEnStock = new Promise((resolve, reject) => {
            setTimeout(() => {
                //reject('server caido');
                resolve(productos);
            }, 2000)
        });
        productosEnStock
            .then(res => {
                setProducto(res.find(item => item.id === itemId))

            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId])

    const onAdd = (cantidad) => {
        console.log(`Agregaste ${producto.title}, cantidad: ${cantidad}.`);
        addItem(producto, cantidad);
        setAdded(true); // seteo en true cuando es agregado el producto
      }

    return (

        <>
            {Loading ? <Loader /> : <ItemDetail onAdd={onAdd} producto={producto} added={added} />}

        </>
    )

}