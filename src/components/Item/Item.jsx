import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom';

export default function Item({  producto  }) {

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.src} />
                <Card.Body>
                    <Card.Title>{producto.id}{producto.name}{producto.price}{producto.categoria}</Card.Title>
                    <Card.Text>
                        <ItemCount tope={producto.stock} ini={producto.ini} />
                        <Button variant="outline-secondary">
                            <Link to={`/item/${producto.id}`}>Ver</Link>
                        </Button>{' '}
                    </Card.Text>
                </Card.Body>
            </Card>

        </>
    )

}