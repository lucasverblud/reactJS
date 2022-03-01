import React, { useContext } from 'react';
import { contexto } from '../CartContext/CartContext';
import { Card, Col, Row, Button } from "react-bootstrap";

const CartItem = ({ prod }) => {

  const { removeItem } = useContext(contexto);

  return (
    // <div>
    //   <h3>{prod.item.title}</h3>
    //   <p>Cantidad: {prod.cantidad}</p> 
    //   <p>Precio ${prod.item.price} </p>
    //   <p>SubTotal ${prod.item.price * prod.cantidad}</p>
    //   <button onClick={() => removeItem(prod.item.id)}>Eliminar producto</button>
    // </div>

    <Card className="mt-3">
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <Card.Img
            variant="top"
            src={prod.item.imageId}
            style={{ height: "9rem", objectFit: "contain" }}
          />
        </Col>

        <Col>
          <Card.Body className="d-flex flex-column justify-content-between align-items-start">
            <Card.Title>{prod.item.title}</Card.Title>
            <Card.Text>
              ${new Intl.NumberFormat().format(prod.item.price)} x {prod.cantidad} = $
              {new Intl.NumberFormat().format(prod.item.price * prod.cantidad)}
            </Card.Text>

            <Button variant="outline-danger" onClick={() => removeItem(prod.item.id)}>
              Eliminar producto
            </Button>

          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
};

export default CartItem;