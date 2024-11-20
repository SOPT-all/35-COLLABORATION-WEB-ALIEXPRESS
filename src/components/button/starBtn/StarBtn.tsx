import {
	IcCometReviewStarFillBlack10,
	IcCometReviewStarHalfBlack10,
	IcCometReviewStarBlankBlack10,
} from '@assets/icons/index';
import {
	StarBtnContainerStyle,
	StartIconBoxStyle,
	RatingStyle,
	ReviewCountSTyle,
} from '@components/button/starBtn/StarBtnStyle';

interface StarBtnProps {
	rating: number;
	reviewCount: number;
	isRatingVisible?: boolean;
}

const StarBtn = ({ rating, reviewCount, isRatingVisible = true }: StarBtnProps) => {
	const generateStarIcons = Array.from({ length: 5 }, (_, i) => {
		const starValue = i + 1;
		if (rating >= starValue) {
			return <IcCometReviewStarFillBlack10 key={i} />;
		}
		if (rating >= starValue - 0.5) {
			return <IcCometReviewStarHalfBlack10 key={i} />;
		}
		return <IcCometReviewStarBlankBlack10 key={i} />;
	});

	return (
		<button type="button" css={StarBtnContainerStyle}>
			<div css={StartIconBoxStyle}>{generateStarIcons}</div>
			{isRatingVisible && <p css={RatingStyle}>{rating.toFixed(1)}</p>}
			<p css={ReviewCountSTyle}>({reviewCount})</p>
		</button>
	);
};

export default StarBtn;
