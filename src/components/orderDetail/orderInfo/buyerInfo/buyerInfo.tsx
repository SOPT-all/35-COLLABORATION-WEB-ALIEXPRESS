import { IcMapBlackStorke24 } from '@assets/icons';
import { buyerInfo } from '@constants/buyerInfo';

import { buyerInfoComponentStyle, korStringStyle, engStringStyle, infoDetailStyle } from './buyerInfoStyle';

export const BuyerInfoComponent = () => (
	<div css={buyerInfoComponentStyle}>
		<IcMapBlackStorke24 />
		<div css={infoDetailStyle}>
			<span css={korStringStyle}>{buyerInfo.name}</span>
			<span css={engStringStyle}>{buyerInfo.phone}</span>
			<span css={engStringStyle}>{buyerInfo.address}</span>
		</div>
	</div>
);
