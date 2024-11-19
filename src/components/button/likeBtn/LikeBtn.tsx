import { IcFvrBlack24 } from '../../../assets/icons';

import { defaultStyle, buttonStyle, contentContainer, fontStyle } from './LikeBtnStyle';

const LikeBtn = () => (
	<button type="button" css={[defaultStyle, buttonStyle]}>
		<div css={[defaultStyle, contentContainer]}>
			<IcFvrBlack24 />
			<p css={fontStyle}>853</p>
		</div>
	</button>
);

export default LikeBtn;
