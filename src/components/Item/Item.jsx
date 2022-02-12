import React from "react";
import { Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom';

export default function Item({ producto }) {

    return (
        <>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.imageId} />
                <Card.Body>
                    <Card.Title>{producto.title}</Card.Title>
                    <Card.Text>
                        ${producto.price}
                    </Card.Text>
                    <Button variant="outline-secondary">
                        <Link to={`/item/${producto.id}`}>Ver</Link>
                    </Button>{' '}
                </Card.Body>
            </Card>

        </>
    )

}