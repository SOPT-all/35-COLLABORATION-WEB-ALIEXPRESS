import {
	cardLayout,
	cardWrapper,
	titleStyle,
	cardBox,
} from '@components/productPage/review/reviewTop/RatingServiceCardStyle';
import Level from '@components/productPage/review/reviewTop/Level';

const AverageCard3 = () => (
	<div css={cardLayout}>
		<div css={cardWrapper}>
			<p css={titleStyle}>성능</p>
			<div css={cardBox}>
				<div>그래프 자리</div>
				<Level />
			</div>
		</div>

		<div css={cardWrapper}>
			<p css={titleStyle}>안전성</p>
			<div css={cardBox}>
				<div>그래프 자리</div>
				<Level />
			</div>
		</div>
		<div css={cardWrapper}>
			<p css={titleStyle}>A/S 서비스</p>
			<div css={cardBox}>
				<div>그래프 자리</div>
				<Level />
			</div>
		</div>
	</div>
);

export default AverageCard3;
