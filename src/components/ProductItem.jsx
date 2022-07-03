import React, { useState } from 'react';
import '@styles/ProductItem.scss';

import addToCard from '@icons/bt_add_to_cart.svg';

const ProductItem = ({product}) => {
	const [cart, setCard] = useState([]);
	const handeClick = () => {
		setCard([]);
	}
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt="" />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={handeClick}>
					<img src={addToCard} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
