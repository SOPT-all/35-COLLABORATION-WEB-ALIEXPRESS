import { IcShareBlack24 } from '../../../assets/icons';
import IcShopBlack24 from '../../../assets/icons/ic_shop_black_24.svg';

import defaultStyle from './EmojiBtnStyle';

interface EmojiBtnProps {
	type: 'seller' | 'share';
}

const EmojiBtn = ({ type }: EmojiBtnProps) => (
	<button type="button" css={defaultStyle}>
		{type === 'seller' ? <IcShopBlack24 /> : <IcShareBlack24 />}
	</button>
);

export default EmojiBtn;
