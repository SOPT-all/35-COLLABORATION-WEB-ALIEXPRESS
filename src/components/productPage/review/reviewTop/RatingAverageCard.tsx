import { IcCometReviewStarFill18, IcCometReviewStarHalf18 } from '@assets/icons/index';
import { cardLayout, numStyle, starWrapper, descStyle } from '@components/productPage/review/reviewTop/RatingAverageCardStyle';

const AverageCard1 = () => (
	<div>
		{/* 카드1 */}
		<div css={cardLayout}>
			<p css={numStyle}>4.8</p>
			<div css={starWrapper}>
				{[...Array(4)].map((_, idx) => (
					<IcCometReviewStarFill18 key={`star-${idx}`} />
				))}
				<IcCometReviewStarHalf18 />
			</div>
			<p css={descStyle}>모든 리뷰는 구매 인증 후 작성되었습니다</p>
		</div>
	</div>
);

export default AverageCard1;
