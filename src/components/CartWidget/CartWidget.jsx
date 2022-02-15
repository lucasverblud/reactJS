import React, { useContext } from "react";
import carrito from "./carrito.png";
import { Link } from "react-router-dom";
import { contexto } from "../CartContext/CartContext";
import { Button } from "react-bootstrap"


export default function CartWidget() {
    const { sumarCantidad } = useContext(contexto);
    // const [cantidadTotal, setCantidadTotal] = useState(0);

    // useEffect(() => {
    //     setCantidadTotal(sumarCantidad());
    // })

    return (
        <div>
            <Button variant="outline-secondary">
                <Link to={`/cart/`}><img src={carrito} />
                    {
                        (sumarCantidad())
                    }
                </Link>
            </Button>{' '}
        </div>
    );
}