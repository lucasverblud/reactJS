import React from "react"
import Item from "../Item/Item"
import { Container, Row } from "react-bootstrap"

export default function ItemList({ items }) {


    return (
        <Container className="container-fluid px-3 px-md-5 mt-5 " >
            <Row className="row row-cols-1 row-cols-md-2 row-cols-xl-3 gx-3 justify-content-center">
                    {items.map(producto => <Item key={producto.id} producto={producto} />)}
            </Row>
        </Container>
    )

}
