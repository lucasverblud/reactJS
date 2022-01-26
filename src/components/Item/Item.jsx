import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom';

export default function Item({ id, name, price, src, stock, ini }) {

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={src} />
                <Card.Body>
                    <Card.Title>{id}{name}{price}</Card.Title>
                    <Card.Text>
                        <ItemCount tope={stock} ini={ini} />
                        <Button variant="outline-secondary">
                            <Link to={`/item/${id}`}>Ver</Link>
                        </Button>{' '}
                    </Card.Text>
                </Card.Body>
            </Card>

        </>
    )

}