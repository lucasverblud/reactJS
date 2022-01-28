import React, { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {

    const { categoriaId } = useParams();
    const [Loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);

    const productos = [
        { id: '001', title: 'Remera1', price: 100, pictureUrl: "https://d22fxaf9t8d39k.cloudfront.net/6da0a68dbed7261cde30c9aa72c5483fcc40fe18c207a659d9140afc481ab8fb66621.jpeg", stock: 5, initial: 1, categoria: 'remera' },
        { id: '002', title: 'Buzo1', price: 50, pictureUrl: "https://d22fxaf9t8d39k.cloudfront.net/c46bc4e954b3288e69bbdb808af37bf2d0811ea809711542c41445a92dfa664066621.jpeg", stock: 5, initial: 1, categoria: 'buzo' },
        { id: '003', title: 'Hoodie1', price: 70, pictureUrl: "https://d22fxaf9t8d39k.cloudfront.net/9714f9d574809aeccf1fb2d0e1ec98a5ac02f888b01977398ee42f6bbb477de866621.jpeg", stock: 5, initial: 1, categoria: 'hoodie' }
    ];
    

    
    useEffect(() => {
        const productosEnStock = new Promise((resolve, reject) => {
            setTimeout(() => {
                //reject('server caido');
                resolve(productos);
            }, 3000)
        });
        productosEnStock
            .then(res => {
                
                setLoading(true);
                if (categoriaId) {
                    setItems(res.filter(item => item.categoria === categoriaId))
                } else {
                    setItems(res)
                }
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    },[categoriaId])

    return (

        <>
            {(Loading) ?
                <>
                    Loading...
                </>
                :
                <ItemList products={items} />
            }

        </>
    )
}