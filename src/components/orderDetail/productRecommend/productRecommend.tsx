import { BtnLeftDefault, BtnRightDefault } from '@assets/icons';
import ProductCard from '@components/product/ProductCard';
import PRODUCT_RECOMMEND_DATA from '@constants/productRecommend';
import { useRef } from 'react';

import {
	productRecommandContainer,
	productListContainer,
	headerStringStyle,
	btnLeftStyle,
	btnRightStyle,
	scrollContainerStyle,
} from './productRecommendStyle';

const ProductRecommendComponent = () => {
	const products = PRODUCT_RECOMMEND_DATA;

	const scrollContainerRef = useRef<HTMLDivElement | null>(null);
	const handleScroll = (direction: 'prev' | 'next'): void => {
		if (!scrollContainerRef.current) return;

		const { scrollLeft, clientWidth } = scrollContainerRef.current;
		const movedWidth = clientWidth * (3 / 5);

		scrollContainerRef.current.scrollTo({
			left: direction === 'prev' ? scrollLeft - movedWidth : scrollLeft + movedWidth,
		});
	};

	return (
		<section css={productRecommandContainer}>
			<header css={headerStringStyle}>
				<h2>다른 상품 추천</h2>
			</header>
			<article css={productListContainer}>
				<BtnLeftDefault css={btnLeftStyle} onClick={() => handleScroll('prev')} />
				<div ref={scrollContainerRef} css={scrollContainerStyle}>
					{products.map((product) => (
						<ProductCard
							key={product.id}
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
				<BtnRightDefault css={btnRightStyle} onClick={() => handleScroll('next')} />
			</article>
		</section>
	);
};

export default ProductRecommendComponent;
