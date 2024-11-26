import { IcCometReviewStarFill18, IcCometReviewStarBlank18 } from '@assets/icons/index';
import { css } from '@emotion/react';

interface RenderStarProps {
	rating: number;
}

export const starBox = css`
	display: flex;
`;

const RenderStar = ({ rating }: RenderStarProps) => (
	<div css={{ starBox }}>
		{Array.from({ length: 5 }, (_, index) =>
			index < rating ? (
				<span key={`filled-${index}`}>
					<IcCometReviewStarFill18 />
				</span>
			) : (
				<span key={`blank-${index}`}>
					<IcCometReviewStarBlank18 />
				</span>
			),
		)}
	</div>
);

export default RenderStar;
