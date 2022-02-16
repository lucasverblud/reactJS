import React, { useContext } from "react";
import { contexto } from "../CartContext/CartContext";
import { Link } from 'react-router-dom';
import CartItem from "../CartItem/CartItem";
import { Button, Col, Container, Row } from "react-bootstrap";

const Cart = () => {

  const { cart, clear, sumarTodo } = useContext(contexto);


  return (
    <>
      {cart.length === 0 ?
        <div>
          <p>No existen productos agregados!</p>
          <Link to='/'>Ir al Inicio</Link>
        </div>
        :
        <Container>
          {cart.map(element => <CartItem key={element.item.id} prod={element} />)}

          <h4 className="my-3">Total ${sumarTodo()}</h4>

          <Row className="mb-3">
            <Col>
              <Link to="/checkout" className="btn btn-success me-2">Finalizar Compra</Link>
              <Button variant="danger" onClick={() => clear()}>Limpiar Carrito</Button>
            </Col>
          </Row>
        </Container>

      }

    </>
  )
}

export default Cart;