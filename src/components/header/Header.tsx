import { ImgLogotypeL } from '@assets/icons/index';

import { defaultStyle, headerStyle, logoOverlapStyle, logoDescStyle, fontEnStyle, fontKoStyle } from './HeaderStyle';

const Header = () => (
	<div css={[defaultStyle, headerStyle]}>
		<div>
			<ImgLogotypeL css={logoOverlapStyle} />
			<div css={[defaultStyle, logoDescStyle]}>
				<p css={fontEnStyle}>Alibaba Group</p>
				<p css={fontKoStyle}>해외 직구 플랫폼</p>
			</div>
		</div>
		<div>햄버거바 구역</div>
		<div>검색창구역</div>
		<div>오른쪽 박스구역</div>
	</div>
);

export default Header;
