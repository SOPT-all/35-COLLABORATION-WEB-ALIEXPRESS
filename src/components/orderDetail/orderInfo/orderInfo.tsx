import { PurchaseInfoComponent } from './purchaseInfo/purchaseInfo';
import { BuyerInfoComponent } from './buyerInfo/buyerInfo';
import { orderInfoComponentStyle, contentComponentStyle, headerComponentStyle } from './orderInfoStyle';

export const OrderInfoComponent = () => {
	return (
		<div css={orderInfoComponentStyle}>
			<header css={headerComponentStyle}>
				<h1>주문 & 배송</h1>
			</header>
			<div css={contentComponentStyle}>
				<BuyerInfoComponent />
				<PurchaseInfoComponent />
			</div>
		</div>
	);
};
