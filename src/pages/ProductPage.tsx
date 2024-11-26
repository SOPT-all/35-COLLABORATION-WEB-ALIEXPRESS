import Footer from '@components/footer/Footer';
import ProductHeader from '@components/header/productHeader/ProductHeader';
import ProductCardList from '@components/product/ProductCardList';
import RecommandedList from '@components/product/RecommandedList';
import ProductOrderBox from '@components/productOrderBox/ProductOrderBox';
import ReviewPage from '@components/productPage/review/review/ReviewPage';
import Nav from '@components/productPage/review/reviewTop/Nav';
import RatingPage from '@components/productPage/review/reviewTop/RatingPage';
import Title from '@components/productPage/review/reviewTop/Title';
import ProductSummay from '@components/productSummary/ProductSummay';
import RecommandedBox from '@components/recommandedProducts/RecommandedBox';
import SANPLE_PRODUCTS from '@constants/sampleProducts';

const ProductPage = () => (
	<>
		<ProductHeader />
		<ProductOrderBox />
		<Nav />
		<Title />
		<RatingPage />
		<ReviewPage />
		<ProductSummay />
		<RecommandedBox />
		<RecommandedList />
		<ProductCardList products={SANPLE_PRODUCTS} />
		<Footer />
	</>
);

export default ProductPage;
