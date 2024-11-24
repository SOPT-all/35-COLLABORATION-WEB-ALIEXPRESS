import AverageCard1 from '@components/productPage/review/reviewTop/AverageCard1';
import AverageCard2 from '@components/productPage/review/reviewTop/AverageCard2';
import AverageCard3 from '@components/productPage/review/reviewTop/AverageCard3';
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
