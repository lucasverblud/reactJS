import React, { useContext } from "react";
import { contexto } from "../CartContext/CartContext";
import { Link } from 'react-router-dom';
import CartItem from "../CartItem/CartItem";

const Cart = () => {

    const { cart,clear } = useContext(contexto);

    return (
        <>
          {cart.length === 0 ?
            <div>
              <p>Empty Cart</p>
              <Link to='/'>Go to shop!</Link>
            </div>
            :
            <div>
              {cart.map(element => <CartItem key={element.item.id} prod={element} />)}
              <button onClick={() => clear()}>Clear Cart</button>
            </div>
          }
        </>
      )
}

export default Cart;