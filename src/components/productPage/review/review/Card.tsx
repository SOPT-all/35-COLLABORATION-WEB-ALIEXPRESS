import { ImgUser2, IcShieldWhite12, IcMeatballLightgray20 } from '@assets/icons/index';
import ReviewBtn from '@components/button/recommendBtn/reviewBtn';
import {
	cardLayout,
	relativeStyle,
	nameStyle,
	dateStyle,
	colorStyle,
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
import UserReview from '@constants/userReview';
import { useState } from 'react';

const Card = () => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<div css={[cardLayout, relativeStyle]}>
			<div>
				<ImgUser2 />
				<IcShieldWhite12 css={circleStyle} />
			</div>
			<div css={infoWrapper}>
				<div css={cardTitleStyle}>
					<span css={nameStyle}>{UserReview.username}</span>
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
				<RenderStar rating={UserReview.rating} />
				<span css={colorStyle}>색상: 검정</span>
				<p css={reviewStyle}>
					{UserReview.isMonth === true && <div css={monthChipStyle}>한달사용리뷰</div>}
					{UserReview.contentKorean}
				</p>
				<div css={imgWrapper}>
					<img src={UserReview.reviewImage} alt={`${UserReview.username}님의 리뷰 이미지`} />
					<img src={UserReview.reviewImage} alt={`${UserReview.username}님의 리뷰 이미지`} />
				</div>
				<div css={reviewBtnWrapper}>
					<ReviewBtn type="useful" clickedCount={UserReview.usefulCount} />
					<ReviewBtn type="recommend" clickedCount={UserReview.recommendCount} />
					<ReviewBtn type="like" clickedCount={UserReview.likeCount} />
				</div>
			</div>
		</div>
	);
};

export default Card;
