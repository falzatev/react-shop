import React from "react";
import OrderItem from '@components/OrderItem';
import Menu from '@components/Menu';
import '@styles/Checkout.scss';

const Checkout = () => {
  return (
    <div className="Checkout">
      <div class="Checkout-container">
        <hi class="title">My Order</hi>
        <div class="Checkout-content">
          <div class="order">
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
          </div>
        </div>
        <OrderItem />
      </div>
    </div>
  );
};

export default Checkout;
