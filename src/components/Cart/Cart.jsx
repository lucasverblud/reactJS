import React, { useContext } from "react";
import { contexto } from "../CartContext/CartContext";
import { Link } from 'react-router-dom';
import CartItem from "../CartItem/CartItem";

const Cart = () => {

  const { cart, clear, sumarTodo } = useContext(contexto);

  // const [total, setTotal] = useState(0);

  // useEffect(() => {
  //   setTotal(sumarTodo());
  // }, [])

  return (
    <>
      {cart.length === 0 ?
        <div>
          <p>No existen productos agregados!</p>
          <Link to='/'>Ir al Inicio</Link>
        </div>
        :
        <div>
          {cart.map(element => <CartItem key={element.item.id} prod={element} />)}
          Total ${sumarTodo()}
          <button onClick={() => clear()}>Clear Cart</button>
        </div>
      }
      
    </>
  )
}

export default Cart;