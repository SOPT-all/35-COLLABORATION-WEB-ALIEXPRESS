import ProductHeader from '@components/header/productHeader/ProductHeader';
import InfoTable from '@components/infoTable/InfoTable';
import OrderBox from '@components/orderBox/OrderBox';
import ProductCardList from '@components/product/ProductCardList';
import RecommandedList from '@components/product/RecommandedList';
import ProductInfo from '@components/productInfo/ProductInfo';
import ReviewPage from '@components/productPage/review/review/ReviewPage';
import Nav from '@components/productPage/review/reviewTop/Nav';
import RatingPage from '@components/productPage/review/reviewTop/RatingPage';
import ProductSummay from '@components/productSummary/ProductSummay';
import RecommandedBox from '@components/recommandedProducts/RecommandedBox';
import SANPLE_PRODUCTS from '@constants/sampleProducts';
import ProductOrderBox from '@components/productOrderBox/ProductOrderBox';

const ProductPage = () => (
	<>
		<ProductHeader />
		<ProductOrderBox />
		<Nav />
		<RatingPage />
		<ReviewPage />
		<InfoTable />
		<ProductSummay />
		<RecommandedBox />
		<RecommandedList />
		<ProductCardList products={SANPLE_PRODUCTS} />
	</>
);

export default ProductPage;
