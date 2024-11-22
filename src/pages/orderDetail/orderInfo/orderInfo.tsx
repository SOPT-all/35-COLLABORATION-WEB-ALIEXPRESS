import { IcListBlack24 } from '@assets/icons';
import { buyerInfo } from '@constants/buyerInfo';

export const OrderInfoComponent = () => (
	<div css={orderInfoComponentStyle}>
		<IcListBlack24 />
		<div css={infoDetailStyle}>
			<span css={korStringStyle}>{buyerInfo.name}</span>
			<span css={engStringStyle}>{buyerInfo.phone}</span>
			<span css={engStringStyle}>{buyerInfo.address}</span>
		</div>
	</div>
);
