import MESSAGE from '@constants/footerMsg';

import { grayLayout, footerStyle, subtitleStyle, desc } from './FooterStyle';

const Footer = () => (
	<footer>
		<div css={grayLayout}>
			<section css={subtitleStyle}>
				도움말
				<p css={desc}>{MESSAGE.HELP}</p>
			</section>
			<section css={subtitleStyle}>
				AliExpress 다국어 사이트
				<p css={desc}>{MESSAGE.ALI}</p>
			</section>
			<section css={subtitleStyle}>
				카테고리별 검색
				<p css={desc}>{MESSAGE.CATEGORY}</p>
			</section>
			<section css={subtitleStyle}>
				Alibaba 그룹
				<p css={desc}>{MESSAGE.GROUP}</p>
			</section>
		</div>
		<div css={footerStyle}>
			<p>{MESSAGE.FOOTER}</p>
		</div>
	</footer>
);

export default Footer;
