import RatingAverageCard from '@components/productPage/review/reviewTop/RatingAverageCard';
import RatingCountCard from '@components/productPage/review/reviewTop/RatingCountCard';
import RatingServiceCard from '@components/productPage/review/reviewTop/RatingServiceCard';
import { css } from '@emotion/react';

export const AverageContainer = css`
	display: flex;
	gap: 1.2rem;
	width: 96rem;
`;

const RatingPage = () => (
	<div css={AverageContainer}>
		<RatingAverageCard />
		<RatingCountCard />
		<RatingServiceCard />
	</div>
);

export default RatingPage;
