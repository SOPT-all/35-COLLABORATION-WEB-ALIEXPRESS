import { IcListBlack24 } from '@assets/icons';
import BUYER_INFO from '@constants/buyerInfo';

import {
	purchaseInfoComponentStyle,
	korStringStyle,
	engStringStyle,
	infoDetailStyle,
	copyButtonStyle,
	copyStringStyle,
} from './purchaseInfoStyle';

export const PurchaseInfoComponent = () => {
	const handleCopyClick = () => {
		const copyText = `${BUYER_INFO.orderId}`;
		navigator.clipboard.writeText(copyText);
	};

	return (
		<div css={purchaseInfoComponentStyle}>
			<IcListBlack24 />
			<div css={infoDetailStyle}>
				<div>
					<span css={korStringStyle}>주문 </span>
					<span css={engStringStyle}>ID: </span>
					<span css={engStringStyle}>{BUYER_INFO.orderId}</span>
				</div>
				<div>
					<span css={korStringStyle}>주문일: </span>
					<span css={engStringStyle}>{BUYER_INFO.orderYear}</span>
					<span css={korStringStyle}>년</span>
					<span css={engStringStyle}> {BUYER_INFO.orderMonth}</span>
					<span css={korStringStyle}>월</span>
					<span css={engStringStyle}> {BUYER_INFO.orderDay}</span>
					<span css={korStringStyle}>일</span>
				</div>
				<span css={korStringStyle}>결제 수단: {BUYER_INFO.paymentMethod}</span>
			</div>
			<div css={copyButtonStyle}>
				<span id="copyTxt" onClick={handleCopyClick} css={copyStringStyle}>
					복사
				</span>
			</div>
		</div>
	);
};
