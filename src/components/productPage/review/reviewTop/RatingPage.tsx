import RatingAverageCard from '@components/productPage/review/reviewTop/RatingAverageCard';
import RatingCountCard from '@components/productPage/review/reviewTop/RatingCountCard';
import RatingServiceCrad from '@components/productPage/review/reviewTop/RatingServiceCrad';
import { css } from '@emotion/react';

export const AverageContainer = css`
	display: flex;
	gap: 1.2rem;
`;

const RatingPage = () => (
	<div css={AverageContainer}>
		<RatingAverageCard />
		<RatingCountCard />
		<RatingServiceCrad />
	</div>
);

export default RatingPage;
