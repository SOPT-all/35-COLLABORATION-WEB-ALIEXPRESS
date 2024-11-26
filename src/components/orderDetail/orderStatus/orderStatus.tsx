import { LAST_STATUS } from '@constants/orderStatusList';
import DeliveryStatusComponent from './deliveryStauts/deliveryStatus';
import DetailStatusComponent from './detailStatus/detailStatus';
import {
	orderStatusComponentStyle,
	componentsStyle,
	headerStringStyle,
	contentStringStyle,
	headerComponentStyle,
} from './orderStatusStyle';

const OrderStatusComponent = () => (
	<div css={orderStatusComponentStyle}>
		<header css={headerComponentStyle}>
			<h1 css={headerStringStyle}>상태: {LAST_STATUS.name}</h1>
			<p css={contentStringStyle}>{LAST_STATUS.description}</p>
		</header>
		<div css={componentsStyle}>
			<DeliveryStatusComponent />
			<DetailStatusComponent />
		</div>
	</div>
);

export default OrderStatusComponent;
