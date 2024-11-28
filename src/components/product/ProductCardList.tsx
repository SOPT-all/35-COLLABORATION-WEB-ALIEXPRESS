import useRelatedProducts from '@apis/productPage/product/productQueries';
import ProductCard from './ProductCard';
import {
	productListContainer,
	relatedProductsContainer,
	relatedProductsHeaderStyle,
	relatedProductsStyle,
} from './ProductCardListStyle';
import TextBtn from '@components/button/textBtn/TextBtn';
import { AxiosError } from 'axios';
import MESSAGE from '@constants/errorMessages';

interface ProductCardListProps {
	productId: number;
}

const ProductCardList = ({ productId }: ProductCardListProps) => {
	const { data, isError, error } = useRelatedProducts(productId);

	if (isError) {
		const axiosError = error as AxiosError<{ error: { message: string } }>;
		const errorMessage = axiosError.response?.data?.error?.message || MESSAGE.UNKNOWN_ERROR;
		console.error(errorMessage);
	}

	return (
		<section css={relatedProductsContainer}>
			<div css={relatedProductsHeaderStyle}>
				<p css={relatedProductsStyle}>연관 상품</p>
			</div>
			<article css={productListContainer}>
				{data.map((product) => (
					<ProductCard
						key={product.productId}
						image={product.productImage}
						name={product.detail}
						price={product.priceOriginal}
						discountRate={product.percent}
						hasCoupon={product.isCoupon}
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
