import React from "react";
import { Container } from "react-bootstrap";

const FooterPage = () => {
    return (
        <>
            <div className="footer-copyright text-center py-3">
                <Container fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/lucasverblud/reactJS"> Lucas Verblud </a>
                </Container>
            </div>
        </>
    );
}

export default FooterPage;