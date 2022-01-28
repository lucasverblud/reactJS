import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Navbar, Nav, Container } from "react-bootstrap"
import logo from "./logo.png"
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/"><img src={logo} alt="" width={50} /></Navbar.Brand>
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
            </Navbar>
        </>
    );
}