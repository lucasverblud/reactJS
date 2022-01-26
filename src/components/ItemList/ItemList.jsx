import react from "react"
import Item from "../Item/Item"
import { Container, Row, Col } from "react-bootstrap"

export default function ItemList({ items }) {

    return (
        <Container className="px-3 px-md-5 mt-5" >
            <Row className="row row-cols-1 row-cols-md-2 row-cols-xl-4 gx-4 justify-content-center">
                <Col className="col mb-5">
                    {items.map((item) => (
                        <Item
                            id={item.id}
                            name={item.title}
                            price={item.price}
                            src={item.pictureUrl}
                            stock={item.stock}
                            ini={item.initial} />
                    ))}
                </Col>
            </Row>
        </Container>
    )

}