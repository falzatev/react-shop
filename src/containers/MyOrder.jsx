import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from "@context/AppContext";
import '@styles/MyOrder.scss';

import flechaIcon from '@icons/flechita.svg';

const MyOrder = () => {
	const { state: {cart}, setToggleOrders } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		
		const sum = cart.reduce(reducer, 0);
		return sum;
	}

    return (
        <aside className="MyOrder">
			<div className="title-container">
				<img src={flechaIcon} alt="arrow" onClick={setToggleOrders} className='arrow'/>
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				<div className="order-list">
					{cart.map((item, index) => (
						<OrderItem product={item} key={`orderItem-${index}`} index={index}/>
					))}
				</div>
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
    )
}

export default MyOrder
