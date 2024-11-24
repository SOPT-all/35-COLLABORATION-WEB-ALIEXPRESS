import { IcArrowrightGray12 } from '@assets/icons';
import ProductCard from '@components/product/ProductCard';
import { ProductWrapper, RecommandedListContainer, TitleLayout } from '@components/product/RecommandedListStyle';
import recommandedProductData from '@constants/recommandedProductData';

const RecommandedList = () => (
	<article css={RecommandedListContainer}>
		<title css={TitleLayout}>
			상점 내 추천 상품
			<IcArrowrightGray12 />
		</title>
		<section css={ProductWrapper}>
			{recommandedProductData.map((product) => (
				<ProductCard
					key={product.id}
					image={product.image}
					name={product.name}
					price={product.price}
					discountRate={product.discountRate}
					rating={product.rating}
					reviewCount={product.reviewCount}
				/>
			))}
		</section>
	</article>
);

export default RecommandedList;
