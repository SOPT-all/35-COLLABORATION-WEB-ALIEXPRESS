import {
	ImgLogotypeL,
	IcHamburgermenuWhite14,
	IcSearchWhite24,
	IcImagesearchBlack24,
	IcQrcodeWhite24,
	ImgFlagKorL,
	IcArrowbottomSWhite12,
} from '@assets/icons/index';

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
	appLogLayout,
	textContainer,
	fontEnAppStyle,
	fontKoAppStyle,
	flagLayout,
	flagContainer,
	fontKRWStyle,
	arrowStyle,
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
		<div>
			<div css={appLogLayout}>
				<IcQrcodeWhite24 />
				<div css={textContainer}>
					<p css={fontEnAppStyle}>AliExpress</p>
					<p css={fontKoAppStyle}>앱 다운로드</p>
				</div>
			</div>
			<div css={flagLayout}>
				<ImgFlagKorL />
				<div css={flagContainer}>
					<div css={textContainer}>
						<p css={fontEnAppStyle}>KO/</p>
						<p css={fontKRWStyle}>KRW</p>
					</div>
					<IcArrowbottomSWhite12 css={arrowStyle} />
				</div>
			</div>
			<div>3</div>
			<div>4</div>
		</div>
	</div>
);

export default Header;
