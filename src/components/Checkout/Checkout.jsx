import React from "react";
import { useState, useRef } from "react";
import { useContext } from "react";
import { getFirestore } from "../../firebase/firebase";
import { contexto } from "../CartContext/CartContext";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import firebase from "firebase";


const Checkout = () => {

    const { cart, sumarTodo } = useContext(contexto);

    const [orderId, setOrderId] = useState('');

    const nameRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();

    function handleClick() {

        const db = getFirestore();
        const orders = db.collection("orders");

        const miOrden = {
            buyer: {
                name: nameRef.current.value,
                address: addressRef.current.value,
                city: cityRef.current.value,
                state: stateRef.current.value,
                email: emailRef.current.value,
                mobile: mobileRef.current.value,
            },
            items: cart,
            total: sumarTodo(),
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        orders.add(miOrden)
            .then(({ id }) => {
                console.log('orden ingresada: ' + id);
                setOrderId(id);
            })
            .catch((err) => {
                console.log(err);
            });

    }


    return (

        <>
            {orderId && (<h1>Felicitaciones tu order es {orderId}</h1>)}

            <Container className="justify-content-center align-items-center">
                <Row>
                    <Col>
                        <h3>Ingresa tus datos:</h3>

                        <input type="text" name="name" ref={nameRef} placeholder="Nombre y Apelllido" />
                        <br />

                        <input type="text" name="mobile" ref={mobileRef} placeholder="Nro de Celular" />
                        <br />

                        <input type="text" name="email" ref={emailRef} placeholder="Email" />
                        <br />

                        <input type="text" name="state" ref={stateRef} placeholder="Provincia" />
                        <br />

                        <input type="text" name="city" ref={cityRef} placeholder="Ciudad" />
                        <br />

                        <input type="text" name="address" ref={addressRef} placeholder="Direccion" />
                        <br />

                        <Button variant="success" onClick={() => handleClick()} > Finalizar</Button>
                    </Col>
                </Row>

            </Container>
        </>
    );
}

export default Checkout