import {
	LabelWrapper,
	fontBox,
	fontEnStyle,
	fontKoStyle,
} from '@components/productPage/review/review/ReviewTypeLabelStyle';

const ReviewTypeLabel = () => (
	<div css={LabelWrapper}>
		<div css={fontBox}>
			<p css={fontEnStyle}>Best</p>
			<p css={fontKoStyle}>긍정 리뷰</p>
		</div>
		<div css={fontBox}>
			<p css={fontEnStyle}>Best</p>
			<p css={fontKoStyle}>비판 리뷰</p>
		</div>
	</div>
);

export default ReviewTypeLabel;
