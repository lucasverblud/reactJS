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
                    <Navbar.Brand><img src={logo} alt="" width={100} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className='me-2' to="/">
                                Inicio
                            </NavLink>
                            <NavLink className='me-2' to="/categoria/remeras">
                                Remeras
                            </NavLink>
                            <NavLink className='me-2' to="/categoria/hoodies">
                                Hoodies
                            </NavLink>
                            <NavLink className='me-2' to="/categoria/accesorios">
                                Accesorios
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <CartWidget />
            </Navbar>
        </>
    );
}