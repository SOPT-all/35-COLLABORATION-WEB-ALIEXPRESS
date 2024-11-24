import { ImgUser2, IcShieldWhite12, IcMeatballLightgray20 } from '@assets/icons/index';
import ReviewBtn from '@components/button/recommendBtn/reviewBtn';
import UserReview from '@constants/userReview';
import { Theme, css } from '@emotion/react';

export const CardLayout = (theme: Theme) => css`
	display: flex;
	gap: 1.2rem;
	width: 47rem;
	height: 29.4rem;
	padding: 1.6rem 1.2rem;

	background-color: ${theme.colors.white};
	border: 1px solid ${theme.colors.gray3};
	border-radius: 8px;
`;

export const relativeStyle = css`
	position: relative;
`;

export const circleStyle = (theme: Theme) => css`
	position: absolute;
	top: 1.2rem;
	left: 4rem;
	z-index: 10;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2rem;
	height: 2rem;
	padding: 0.4rem;

	background: ${theme.colors.brandPrimary};
	border-radius: 99px;
`;

export const infoWrapper = css`
	display: flex;
	flex-direction: column;
`;

export const cardTitleStyle = css`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const nameRightStyle = css`
	display: flex;
	gap: 1.2rem;
	align-items: center;
`;

export const nameStyle = (theme: Theme) => css`
	width: 31.2rem;
	height: 2rem;

	color: ${theme.colors.gray8};
	${theme.fonts.eng.titleBold16}
`;

export const dateStyle = (theme: Theme) => css`
	color: ${theme.colors.gray5};
	${theme.fonts.eng.captionMedium10}
`;

export const colorStyle = (theme: Theme) => css`
	margin-top: 0.8rem;

	color: ${theme.colors.gray6};
	${theme.fonts.eng.captionMedium12};
`;

export const reviewStyle = (theme: Theme) => css`
	margin-top: 1.2rem;
	${theme.colors.gray9}
	${theme.fonts.eng.captionMedium12};
`;

export const imgWrapper = css`
	display: flex;
	gap: 0.8rem;
	padding: 1.6rem 0;
`;

export const reviewBtnWrapper = css`
	display: flex;
	gap: 0.8rem;
`;

const Card = () => (
	<div css={[CardLayout, relativeStyle]}>
		<div>
			<ImgUser2 />
			<IcShieldWhite12 css={circleStyle} />
		</div>
		<div css={infoWrapper}>
			<div css={cardTitleStyle}>
				<span css={nameStyle}>{UserReview.username}</span>
				<div css={nameRightStyle}>
					<span css={dateStyle}>24.08.22</span>
					<IcMeatballLightgray20 />
				</div>
			</div>
			<span>{UserReview.rating}점</span>
			<span css={colorStyle}>색상: 검정</span>
			<p css={reviewStyle}>{UserReview.contentKorean}</p>
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

export default Card;
