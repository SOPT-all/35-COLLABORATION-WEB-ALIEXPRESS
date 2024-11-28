import ProductCardList from '@components/product/ProductCardList';
import RecommandedList from '@components/product/RecommandedList';
import ProductOrderBox from '@components/productOrderBox/ProductOrderBox';
import ReviewPage from '@components/productPage/review/review/ReviewPage';
import Nav from '@components/productPage/review/reviewTop/Nav';
import RatingPage from '@components/productPage/review/reviewTop/RatingPage';
import Title from '@components/productPage/review/reviewTop/Title';
import ProductSummay from '@components/productSummary/ProductSummay';
import RecommandedBox from '@components/recommandedProducts/RecommandedBox';
import ProductLayout from 'layout/ProductLayout';

const ProductPage = () => (
	<ProductLayout>
		<ProductOrderBox />
		<Nav />
		<Title />
		<RatingPage />
		<ReviewPage />
		<ProductSummay />
		<RecommandedBox />
		<RecommandedList />
		<ProductCardList productId={1} />
	</ProductLayout>
);

export default ProductPage;
