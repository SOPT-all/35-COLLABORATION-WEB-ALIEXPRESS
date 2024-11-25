import {
	NavContainer,
	fontLayout,
	fontKoStyle,
	fontEnStyle,
	fontStyle,
} from '@components/productPage/review/reviewTop/NavStyle';

const Nav = () => (
	<div css={NavContainer}>
		<div css={fontLayout}>
			<p css={fontKoStyle}>리뷰</p>
			<p css={fontEnStyle}>(497)</p>
		</div>
		<p css={fontStyle}>상품 정보</p>
		<p css={fontStyle}>개요</p>
		<p css={fontStyle}>상점</p>
		<p css={fontStyle}>연관 상품</p>
	</div>
);

export default Nav;
