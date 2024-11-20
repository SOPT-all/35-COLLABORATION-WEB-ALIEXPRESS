import { IcShareBlack24, IcShopBlack24 } from '../../../assets/icons/index';

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
