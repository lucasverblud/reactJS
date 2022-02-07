import React, { useContext } from "react";
import { contexto } from "../CartContext/CartContext";
import { Link } from 'react-router-dom';
import CartItem from "../CartItem/CartItem";
import { useState } from "react";
import { useEffect } from "react";

const Cart = () => {

  const { cart, clear, sumarTodo, sumarCantidad } = useContext(contexto);

  const [total, setTotal] = useState(0);
  const [cantidadTotal, setCantidadTotal] = useState(0);

  useEffect(() => {
    setTotal(sumarTodo());
    setCantidadTotal(sumarCantidad());
  }, [])

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
          Total ${total}
          <button onClick={() => clear()}>Clear Cart</button>
        </div>
      }
      
    </>
  )
}

export default Cart;