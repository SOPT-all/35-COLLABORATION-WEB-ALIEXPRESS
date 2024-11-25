import { IcShieldWhite12, IcMeatballLightgray20 } from '@assets/icons/index';
import ReviewBtn from '@components/button/recommendBtn/reviewBtn';
import {
	cardLayout,
	relativeStyle,
	nameStyle,
	dateStyle,
	colorStyle,
	sizeStyle,
	circleStyle,
	reviewStyle,
	infoWrapper,
	monthChipStyle,
	reportBtnStyle,
	cardTitleStyle,
	nameRightStyle,
	imgWrapper,
	reviewBtnWrapper,
} from '@components/productPage/review/review/CardStyle';
import RenderStar from '@components/productPage/review/review/RenderStar';
import profileImages from '@constants/userImg';
import { Review } from '@constants/userReview';
import { useState } from 'react';

interface CardProps {
	review: Review;
	isOriginal: boolean;
}

const Card = ({ review, isOriginal }: CardProps) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div css={[cardLayout, relativeStyle]}>
			{/* 작성자 프로필 이미지 */}
			<div>
				{profileImages.map((Image, index) =>
					index === review.reviewId % profileImages.length ? <Image key={index} css={sizeStyle} /> : null,
				)}
				<IcShieldWhite12 css={circleStyle} />
			</div>
			{/* 리뷰 상세 내용 */}
			<div css={infoWrapper}>
				{/* 작성자 정보, 신고기능 */}
				<div css={cardTitleStyle}>
					<span css={nameStyle}>{review.username}</span>
					<div css={[nameRightStyle, relativeStyle]}>
						<span css={dateStyle}>24.08.22</span>
						<IcMeatballLightgray20 onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} />
						{isHovered && (
							<button type="button" css={reportBtnStyle}>
								신고
							</button>
						)}
					</div>
				</div>

				{/* 별점 렌더링 */}
				<RenderStar rating={review.rating} />
				<span css={colorStyle}>색상: 검정</span>

				{/* 한달사용여부, 리뷰상세내용 */}
				<div css={reviewStyle}>
					{review.isMonth === true && <div css={monthChipStyle}>한달사용리뷰</div>}
					{isOriginal ? review.contentOriginal : review.contentKorean}
				</div>

				{/* 리뷰 이미지 데이터 받아오면 한개로 줄일예정 */}
				<div css={imgWrapper}>
					<img src={review.reviewImage} alt={`${review.username}님의 리뷰 이미지`} />
					<img src={review.reviewImage} alt={`${review.username}님의 리뷰 이미지`} />
				</div>

				{/* 좋아요 버튼 */}
				<div css={reviewBtnWrapper}>
					<ReviewBtn type="useful" clickedCount={review.usefulCount} />
					<ReviewBtn type="recommend" clickedCount={review.recommendCount} />
					<ReviewBtn type="like" clickedCount={review.likeCount} />
				</div>
			</div>
		</div>
	);
};

export default Card;
