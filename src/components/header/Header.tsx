import { ImgLogotypeL, IcHamburgermenuWhite14, IcSearchWhite24, IcImagesearchBlack24 } from '@assets/icons/index';

import {
	relativeStyle,
	headerStyle,
	logoDescStyle,
	fontEnStyle,
	fontKoStyle,
	hambergerStyle,
	inputStyle,
	IconContainer,
	searchStyle,
} from './HeaderStyle';

const Header = () => (
	<div css={[relativeStyle, headerStyle]}>
		<div>
			<ImgLogotypeL />
			<div css={logoDescStyle}>
				<p css={fontEnStyle}>Alibaba Group</p>
				<p css={fontKoStyle}>해외 직구 플랫폼</p>
			</div>
		</div>
		<div css={hambergerStyle}>
			<IcHamburgermenuWhite14 />
		</div>
		<div css={relativeStyle}>
			<input type="text" css={inputStyle} placeholder="충전기" />

			<div css={IconContainer}>
				<IcImagesearchBlack24 />
				<IcSearchWhite24 css={searchStyle} />
			</div>
		</div>
		<div>오른쪽 박스구역</div>
	</div>
);

export default Header;
