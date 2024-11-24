import Card from '@components/productPage/review/review/Card';
import { data } from '@constants/userReview';
import { css } from '@emotion/react';

export const reviewContainer = css`
	display: flex;
	gap: 2rem;
`;

export const reviewLayout = css`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;
const CardList = () => {
	const { goodReviews, badReviews } = data;

	return (
		<div css={reviewContainer}>
			{/* 긍정 리뷰 */}
			<div css={reviewLayout}>
				{goodReviews.map((review) => (
					<Card key={review.reviewId} review={review} />
				))}
			</div>

			{/* 비판 리뷰 */}
			<div css={reviewLayout}>
				{badReviews.map((review) => (
					<Card key={review.reviewId} review={review} />
				))}
			</div>
		</div>
	);
};

export default CardList;
