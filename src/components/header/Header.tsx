import {
	ImgLogotypeL,
	IcHamburgermenuWhite14,
	IcSearchWhite24,
	IcImagesearchBlack24,
	IcQrcodeWhite24,
	ImgFlagKorL,
	IcArrowbottomSWhite12,
	IcUserWhite24,
	IcCartWhite24,
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
	flagLayout,
	flagContainer,
	fontKRWStyle,
	arrowStyle,
	fontMStyle,
	fontBStyle,
	cartLayout,
	numBackStyle,
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
					<p css={fontMStyle}>앱 다운로드</p>
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
			<div css={appLogLayout}>
				<IcUserWhite24 />
				<div css={flagContainer}>
					<div css={textContainer}>
						<p css={fontMStyle}>환영합니다!/</p>
						<p css={fontBStyle}>로그인/회원가입</p>
					</div>
					<IcArrowbottomSWhite12 css={arrowStyle} />
				</div>
			</div>
			<div css={cartLayout}>
				<IcCartWhite24 />
				<div css={textContainer}>
					<p css={[fontKRWStyle, numBackStyle]}>0</p>
					<p css={fontMStyle}>장바구니</p>
				</div>
			</div>
		</div>
	</div>
);

export default Header;
