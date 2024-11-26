import ProductCard from './ProductCard';
import {
	productListContainer,
	relatedProductsContainer,
	relatedProductsHeaderStyle,
	relatedProductsStyle,
} from './ProductCardListStyle';
import TextBtn from '@components/button/textBtn/TextBtn';
interface Product {
	image: string;
	name: string;
	price: number;
	discountRate: number;
	hasCoupon?: boolean;
	rating: number;
	reviewCount: number;
}

interface ProductCardListProps {
	products: Product[];
}

const ProductCardList = ({ products }: ProductCardListProps) => {
	return (
		<section css={relatedProductsContainer}>
			<div css={relatedProductsHeaderStyle}>
				<p css={relatedProductsStyle}>연관 상품</p>
			</div>
			<article css={productListContainer}>
				{products.map((product) => (
					<ProductCard
						image={product.image}
						name={product.name}
						price={product.price}
						discountRate={product.discountRate}
						hasCoupon={product.hasCoupon}
						rating={product.rating}
						reviewCount={product.reviewCount}
					/>
				))}
			</article>
			<TextBtn btnText="더보기" color="red" size="medium" />
		</section>
	);
};

export default ProductCardList;
