import React, { useContext } from 'react';
import { contexto } from '../CartContext/CartContext';

const CartItem = ({ prod }) => {

  const { removeItem } = useContext(contexto);

  return (
      <div>
        <h3>{prod.item.title}</h3>
        <p>quantity: {prod.count}</p> 
        <button onClick={() => removeItem(prod.item.id)}>Delete</button>
      </div>
  )
};

export default CartItem;