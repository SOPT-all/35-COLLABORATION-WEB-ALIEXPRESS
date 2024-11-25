import AverageCard1 from '@components/productPage/review/reviewTop/RatingAverageCard';
import AverageCard2 from '@components/productPage/review/reviewTop/RatingCountCard';
import AverageCard3 from '@components/productPage/review/reviewTop/RatingServiceCrad';
import { css } from '@emotion/react';

export const AverageContainer = css`
	display: flex;
	gap: 1.2rem;
`;

const AveragePage = () => (
	<div css={AverageContainer}>
		<AverageCard1 />
		<AverageCard2 />
		<AverageCard3 />
	</div>
);

export default AveragePage;
