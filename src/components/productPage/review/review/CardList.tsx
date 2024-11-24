import Card from '@components/productPage/review/review/Card';
import { reviewContainer, reviewLayout } from '@components/productPage/review/review/CardListStyle';
import { data } from '@constants/userReview';

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
