import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import {Navbar, Nav, Container} from "react-bootstrap"
import logo from "./logo.png"

export default function NavBar({ data }){
    return(
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="" width={50}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {data.map((item) =>{
                                return <Nav.Link href={item.enlace}>
                                    {item.nombre}
                                </Nav.Link>
                            })}
                        </Nav>

                    </Navbar.Collapse>             
                </Container>
                <CartWidget/>
            </Navbar>          
        </>
    );
}