import RecommandedList from '@components/product/RecommandedList';
import ProductInfo from '@components/ProductInfo/ProductInfo';
import RecommandedBox from '@components/recommandedProducts/RecommandedBox';

const ProductPage = () => (
	<div>
		<ProductInfo />
		<RecommandedBox />
		<RecommandedList />
	</div>
);

export default ProductPage;
