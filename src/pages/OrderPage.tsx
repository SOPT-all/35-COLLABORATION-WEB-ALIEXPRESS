import OrderLayout from 'layout/OrderLayout';
import { SideBarComponent } from '@components/orderDetail/sideBar/sideBar';
import { OrderInfoComponent } from '@components/orderDetail/orderInfo/orderInfo';
import OrderStatusComponent from '@components/orderDetail/orderStatus/orderStatus';
import OrderHistory from '@components/orderDetail/orderHistory/orderHistory';
import ServiceIntroduce from '@components/orderDetail/serviceIntroduce/serviceIntroduce';
import ProductRecommendComponent from '@components/orderDetail/productRecommend/productRecommend';
import { mainComponentStyle } from './orderPageStyle';

const OrderPage = () => (
	<OrderLayout>
		<SideBarComponent />
		<div css={mainComponentStyle}>
			<OrderInfoComponent />
			<OrderStatusComponent />
			<OrderHistory />
			<ServiceIntroduce />
			<ProductRecommendComponent />
		</div>
	</OrderLayout>
);

export default OrderPage;
