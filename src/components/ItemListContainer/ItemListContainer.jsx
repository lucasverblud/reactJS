import React, { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router";

export default function ItemListContainer() {
    const { categoriaId } = useParams();
    const [llegoLaPromesa, setLlegoLaPromesa] = useState(false);
    const [arrayDeItems, setArrayDeItems] = useState([]);


    // const productosEnStock = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         //reject('server caido');
    //         resolve(arrayDeItems);
    //     }, 2000)
    // });

    // useEffect(() => {
    //     productosEnStock
    //         .then(res => {
    //             setLlegoLaPromesa(true);
    //             setArrayDeItems(res);

    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // })
    useEffect(() => {

        const productos = [{ id: '001', title: 'Remera', price: 100, pictureUrl: "https://d22fxaf9t8d39k.cloudfront.net/6da0a68dbed7261cde30c9aa72c5483fcc40fe18c207a659d9140afc481ab8fb66621.jpeg", stock: 5, initial: 1, categoria: 'remera' },
        { id: '002', title: 'Buzo', price: 50, pictureUrl: "https://d22fxaf9t8d39k.cloudfront.net/c46bc4e954b3288e69bbdb808af37bf2d0811ea809711542c41445a92dfa664066621.jpeg", stock: 5, initial: 1, categoria: 'buzo' },
        { id: '003', title: 'Hoodie', price: 70, pictureUrl: "https://d22fxaf9t8d39k.cloudfront.net/9714f9d574809aeccf1fb2d0e1ec98a5ac02f888b01977398ee42f6bbb477de866621.jpeg", stock: 5, initial: 1, categoria: 'hoodie' }];

        if (categoriaId) {
            setArrayDeItems(productos.filter(item => item.categoria == categoriaId))
        } else {
            setArrayDeItems(productos)
        }

    }, [categoriaId])


    return (
   
        <>
            <ItemList items={arrayDeItems} />
        </>


    )
    
}