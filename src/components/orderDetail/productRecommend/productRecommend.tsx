import { BtnLeftDefault, BtnRightDefault } from '@assets/icons';
import ProductCard from '@components/product/ProductCard';
import PRODUCT_RECOMMEND_DATA from '@constants/productRecommend';

import {
	productRecommandContainer,
	productListContainer,
	headerStringStyle,
	btnLeftStyle,
	btnRightStyle,
} from './productRecommendStyle';

const ProductRecommendComponent = () => {
	const products = PRODUCT_RECOMMEND_DATA;
	return (
		<section css={productRecommandContainer}>
			<header css={headerStringStyle}>
				<h2>다른 상품 추천</h2>
			</header>
			<article css={productListContainer}>
				<BtnLeftDefault css={btnLeftStyle} />
				<div css={{ display: 'flex', gap: '1.3rem' }}>
					{products.map((product) => (
						<ProductCard
							image={product.image}
							name={product.name}
							price={product.price}
							discountRate={product.discountRate}
							hasCoupon={product.hasCoupon}
							rating={product.rating}
							reviewCount={product.reviewCount}
							width="15.7rem"
							hoverLarge={false}
						/>
					))}
				</div>
				<BtnRightDefault css={btnRightStyle} />
			</article>
		</section>
	);
};

export default ProductRecommendComponent;
