import React, { useState } from "react";
import { Container, Row, Col,Button } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';
import { contexto } from "../CartContext/CartContext";


export default function ItemDetail({ producto }) {

    const { addItem } = useContext(contexto);

    const [mostrarItemCount, setMostrarItemCount] = useState(true);

    function onAdd(cantidad) {
        //alert(cantidad);
        setMostrarItemCount(false);
        addItem(producto, cantidad);
    }


    return (
        <>

            <Container fluid className="contenedorProd">
                <Row className="d-flex justify-content-center">
                    <Col className="contenedorProdInv text-center col-md-6">
                        <p className="fs-4 text-primary">{producto.title}</p>
                        <p className="lead text-secondary text-uppercase">{producto.categoria}</p>
                        <img alt='img' src={producto.pictureUrl} />
                        <p className="lead"><span className="fw-bold">Precio: $ </span>{producto.price}</p>
                        {
                            (mostrarItemCount) ?
                                <ItemCount tope={producto.stock} ini={producto.initial} onAdd={onAdd} />
                                :
                                <Button variant="secondary">
                                    <Link to={`/cart`}>Finalizar compra</Link>
                                </Button>
                        }
                    </Col>
                </Row>
            </Container>
        </>
    );
}