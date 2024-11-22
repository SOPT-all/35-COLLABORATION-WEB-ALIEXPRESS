import { IcListBlack24 } from '@assets/icons';
import { buyerInfo } from '@constants/buyerInfo';

import {
	purchaseInfoComponentStyle,
	korStringStyle,
	engStringStyle,
	infoDetailStyle,
	copyButtonStyle,
	copyStringStyle,
} from './purchaseInfoStyle';

export const PurchaseInfoComponent = () => (
	<div css={purchaseInfoComponentStyle}>
		<IcListBlack24 />
		<div css={infoDetailStyle}>
			<div>
				<span css={korStringStyle}>주문 </span>
				<span css={engStringStyle}>ID: </span>
				<span css={engStringStyle}>{buyerInfo.orderId}</span>
			</div>
			<div>
				<span css={korStringStyle}>주문일: </span>
				<span css={engStringStyle}>{buyerInfo.orderYear}</span>
				<span css={korStringStyle}>년</span>
				<span css={engStringStyle}>{buyerInfo.orderMonth}</span>
				<span css={korStringStyle}>월</span>
				<span css={engStringStyle}>{buyerInfo.orderDay}</span>
				<span css={korStringStyle}>일</span>
			</div>
			<span css={korStringStyle}>결제 수단: {buyerInfo.paymentMethod}</span>
		</div>
		<div css={copyButtonStyle}>
			<span css={copyStringStyle}>복사</span>
		</div>
	</div>
);
