import react from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Card } from "react-bootstrap"

export default function Item({ id,name,price,src,stock,ini }) {

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{id}{name}{price}{src}</Card.Title>
                    <Card.Text>
                        <ItemCount tope={stock} ini={ini} />
                    </Card.Text>
                </Card.Body>
            </Card>

        </>
    )

}