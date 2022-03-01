import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader";
import { contexto } from '../CartContext/CartContext';
import { getFirestore } from "../../firebase/firebase";


export default function ItemDetailContainer() {

    const { addItem } = useContext(contexto);

    const { itemId } = useParams();
    const [Loading, setLoading] = useState(false);
    const [producto, setProducto] = useState([]);
    const [added, setAdded] = useState(false);

    useEffect(() => {

        const db = getFirestore();
        const itemCollection = db.collection("items");
        const miItem = itemCollection.doc(itemId);

        miItem.get()
            .then((doc) => {

                setLoading(true);
                if (!doc.exists) {
                    console.log('no existe ese documento');
                    return
                }

                console.log('item found');
                setProducto({ id: doc.id, ...doc.data() });

            })
            .catch((err) => {
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