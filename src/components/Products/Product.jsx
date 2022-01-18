import react from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Card } from "react-bootstrap"

export default function Product({ item }) {

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{item.nombre}</Card.Title>
                    <Card.Text>
                        <ItemCount tope={item.stock} ini={item.initial} />
                    </Card.Text>
                </Card.Body>
            </Card>

        </>
    )

}