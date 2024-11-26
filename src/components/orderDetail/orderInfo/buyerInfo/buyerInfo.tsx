import { IcMapBlackStorke24 } from '@assets/icons';
import BUYER_INFO from '@constants/buyerInfo';

import { buyerInfoComponentStyle, korStringStyle, engStringStyle, infoDetailStyle } from './buyerInfoStyle';

export const BuyerInfoComponent = () => (
	<div css={buyerInfoComponentStyle}>
		<IcMapBlackStorke24 />
		<div css={infoDetailStyle}>
			<span css={korStringStyle}>{BUYER_INFO.name}</span>
			<span css={engStringStyle}>{BUYER_INFO.phone}</span>
			<span css={engStringStyle}>{BUYER_INFO.address}</span>
		</div>
	</div>
);
