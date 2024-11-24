import FilterBtn from '@components/productPage/review/review/FilterBtn';
import TranslationBtn from '@components/productPage/review/review/TranslationBtn';
import { css } from '@emotion/react';

export const btnBox = css`
	position: relative;
	display: flex;
`;
const ReviewPage = () => (
	<div css={btnBox}>
		<FilterBtn />
		<TranslationBtn />
	</div>
);

export default ReviewPage;
