import { IcCometReviewStarFill12, IcCometReviewStarBlank12 } from '@assets/icons/index';
import { css } from '@emotion/react';

export const starBox = css`
	display: flex;
	gap: 0;
`;

type RenderStarsProps = {
	rating: number; // 1부터 5까지의 숫자 (별점)
};

const RenderStars = ({ rating }: RenderStarsProps) => {
	const totalStars = 5; // 별점은 총 5개

	// rating에 해당하는 채운 별 개수
	const filledCount = Math.floor(rating);

	// 빈 별 개수는 5개에서 채운 별을 뺀 값
	const blankCount = totalStars - filledCount;

	return (
		<div css={starBox}>
			{/* 채운 별 */}
			{[...Array(filledCount)].map((_, idx) => (
				<IcCometReviewStarFill12 key={`filled-star-${idx}`} />
			))}
			{/* 빈 별 */}
			{[...Array(blankCount)].map((_, idx) => (
				<IcCometReviewStarBlank12 key={`blank-star-${idx}`} />
			))}
		</div>
	);
};

export default RenderStars;
