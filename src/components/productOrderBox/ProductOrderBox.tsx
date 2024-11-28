import OrderBox from '@components/orderBox/OrderBox';
import ProductInfo from '@components/ProductInfo/ProductInfo';
import { css } from '@emotion/react';

const ProductOrderBoxContainer = css`
	display: flex;
	gap: 1.8rem;
	width: 127.7rem;
	margin: 2.2rem 0 2.4rem;
`;

const ProductOrderBox = () => (
	<div css={ProductOrderBoxContainer}>
		<ProductInfo productId={1} />
		<OrderBox />
	</div>
);

export default ProductOrderBox;
