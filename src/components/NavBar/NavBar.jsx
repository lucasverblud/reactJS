import React, { useContext } from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Navbar, Nav, Container } from "react-bootstrap"
import logo from "./logo.png"
import { NavLink } from "react-router-dom";
import { contexto } from "../CartContext/CartContext";
import { useState } from "react";
import { useEffect } from "react";

export default function NavBar() {
    const { cart,sumarCantidad } = useContext(contexto);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    useEffect(() => {
        setCantidadTotal(sumarCantidad());
    })


    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand><img src={logo} alt="" width={50} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className='me-2' to="/">
                                Inicio
                            </NavLink>
                            <NavLink className='me-2' to="/categoria/remera">
                                Remeras
                            </NavLink>
                            <NavLink className='me-2' to="/categoria/buzo">
                                Buzos
                            </NavLink>
                            <NavLink className='me-2' to="/categoria/hoodie">
                                Hoodies
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <CartWidget />
                
                {
                     (cantidadTotal )
                }
            </Navbar>
        </>
    );
}