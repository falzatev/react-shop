import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@styles/ProductItem.scss';

import addToCartIcon from '@icons/bt_add_to_cart.svg';
import addedToCartIcon from '@icons/bt_added_to_cart.svg';

const ProductItem = ({product}) => {
	const { state: {addedIds}, addToCart } = useContext(AppContext);

	const _id = addedIds.filter((id) => id === product.id);

	const handleClick = item => {
		addToCart(item);
	}
    return (
        <div className="ProductItem">
			<img src={product.category["image"]} alt="" />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				{_id.length ? 
					<figure>					
						<img src={addedToCartIcon} alt="add to cart" />
					</figure> 
				 	: <figure onClick={() => handleClick(product)}>
					
						<img src={addToCartIcon} alt="add to cart" />
					</figure>
				}
				
			</div>
		</div>
    )
}

export default ProductItem
