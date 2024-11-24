import Card from '@components/productPage/review/review/Card';
import { data } from '@constants/userReview';
import { css } from '@emotion/react';

export const reviewContainer = css`
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
	width: 96rem;
	height: 62rem;
	overflow: hidden;
`;

export const reviewLayout = (activeTab: string) => css`
	display: flex;
	flex-flow: ${activeTab === 'total' ? 'column' : 'row'} wrap;
	gap: 2rem;
`;

interface CardListProps {
	activeTab: string;
}

const CardList = ({ activeTab }: CardListProps) => {
	const { goodReviews, badReviews } = data;

	return (
		<div css={reviewContainer}>
			{/* 긍정 리뷰 */}
			{activeTab !== 'negative' && (
				<div css={reviewLayout(activeTab)}>
					{goodReviews.map((review) => (
						<Card key={review.reviewId} review={review} />
					))}
				</div>
			)}

			{/* 비판 리뷰 */}
			{activeTab !== 'positive' && (
				<div css={reviewLayout(activeTab)}>
					{badReviews.map((review) => (
						<Card key={review.reviewId} review={review} />
					))}
				</div>
			)}
		</div>
	);
};

export default CardList;
