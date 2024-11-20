import { ImgLogotypeL, IcHamburgermenuWhite14 } from '@assets/icons/index';

import { headerStyle, logoDescStyle, fontEnStyle, fontKoStyle, hambergerStyle } from './HeaderStyle';

const Header = () => (
	<div css={[headerStyle]}>
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
		<div>검색창구역</div>
		<div>오른쪽 박스구역</div>
	</div>
);

export default Header;
