import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';


export default function ItemDetail({ producto, onAdd, added }) {

  
    return (
        <>

            <Container fluid className="contenedorProd">
                <Row className="d-flex justify-content-center">
                    <Col className="contenedorProdInv text-center col-md-6">
                        <p className="fs-4 text-primary">{producto.title}</p>
                        <p className="lead text-secondary text-uppercase">{producto.description}</p>
                        <img alt='img' src={producto.imageId} />
                        <p className="lead"><span className="fw-bold">Precio: $ </span>{producto.price}</p>
                        {
                            added ?

                                <Button variant="secondary">
                                    <Link to={`/cart`}>Finalizar compra</Link>
                                </Button>
                                :
                                <ItemCount tope={producto.stock} ini={producto.initial} onAdd={onAdd} />

                        }
                    </Col>
                </Row>
            </Container>
        </>
    );
}