import {
	ImgLogotypeL,
	ImgFlagKorS,
	IcArrowbottomSWhite12,
	ImgLine,
	IcUserWhite16,
	IcCartWhite16,
} from '@assets/icons/index';

import {
	headerStyle,
	rightSectionLayout,
	rightSectionGap,
	textKoStyle,
	textEnStyle,
	textCircleStyle,
} from './OrderHeaderStyle';

const OrderHeader = () => (
	<header css={headerStyle}>
		{/* 로고섹션 */}
		<div role="banner">
			<ImgLogotypeL />
		</div>
		{/* 오른쪽 섹션 */}
		<div css={rightSectionLayout}>
			{/* 국가섹션 */}
			<div css={rightSectionGap}>
				<ImgFlagKorS />
				<div css={rightSectionLayout}>
					<p css={textKoStyle}>수원시 장안구</p>
					<p css={textEnStyle}>/KO/KRW</p>
					<IcArrowbottomSWhite12 />
				</div>
			</div>
			<ImgLine />
			{/* 유저섹션 */}
			<div css={rightSectionGap}>
				<IcUserWhite16 />
				<div css={rightSectionLayout}>
					<p css={textEnStyle}>Hi,</p>
					<p css={textKoStyle}>이</p>
					<IcArrowbottomSWhite12 />
				</div>
			</div>
			{/* 카트섹션 */}
			<div css={rightSectionGap}>
				<IcCartWhite16 />
				<p css={textKoStyle}>장바구니</p>
				<p css={[textEnStyle, textCircleStyle]}>9</p>
			</div>
		</div>
	</header>
);

export default OrderHeader;
