import React, { useState,useEffect } from "react"
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer() {
    const [llegoLaPromesa, setLlegoLaPromesa] = useState(false);
    const [arrayDeItems, setArrayDeItems] = useState([
        { id: '001', title: 'Remera', price: 100, pictureUrl: '', stock: 5, initial: 1 },
        { id: '002', title: 'Buzo', price: 50, pictureUrl: '', stock: 5, initial: 1 },
        { id: '003', title: 'Campera', price: 70, pictureUrl: '', stock: 5, initial: 1 }
    ]);

    const productosEnStock = new Promise((resolve, reject) => {
        setTimeout(() => {
            //reject('server caido');
            resolve(arrayDeItems);
        }, 2000)
    });

    useEffect(() => {
        productosEnStock
            .then(res => {
                setLlegoLaPromesa(true);
                setArrayDeItems(res);

            })
            .catch(err => {
                console.log(err);
            });
    })


    return (
        <>
            {(llegoLaPromesa) ?

                <>
                    <ItemList items={arrayDeItems} />
                </>
                :
                <>Loading...</>
            }
        </>

    )
}