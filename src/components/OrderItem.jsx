import React, { useContext } from "react";
import AppContext from '@context/AppContext';
import '@styles/OrderItem.scss';

import iconDelete from '@icons/icon_close.png';

const OrderItem = ({ product, index }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = item => {
    removeFromCart(item, index)
  }

  return (
    <div className="OrderItem">
      <figure>
        <img
          src={product.category["image"]}
          alt={product.title}
        />
      </figure>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <img src={iconDelete} alt="delete" className="close" onClick={() => handleRemove(product)}/>
    </div>
  );
};

export default OrderItem;
