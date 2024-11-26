import ProductCardList from '@components/product/ProductCardList';
import RecommandedList from '@components/product/RecommandedList';
import ProductOrderBox from '@components/productOrderBox/ProductOrderBox';
import ReviewPage from '@components/productPage/review/review/ReviewPage';
import Nav from '@components/productPage/review/reviewTop/Nav';
import RatingPage from '@components/productPage/review/reviewTop/RatingPage';
import Title from '@components/productPage/review/reviewTop/Title';
import ProductSummay from '@components/productSummary/ProductSummay';
import RecommandedBox from '@components/recommandedProducts/RecommandedBox';
import ProductLayout from '@constants/layout/ProductLayout';
import SANPLE_PRODUCTS from '@constants/sampleProducts';

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
		<ProductCardList products={SANPLE_PRODUCTS} />
	</ProductLayout>
);

export default ProductPage;
