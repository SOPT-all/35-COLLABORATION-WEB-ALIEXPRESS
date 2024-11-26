import { css, Theme } from '@emotion/react';

const recommanedBtnContainer = (theme: Theme) => css`
	align-content: center;
	width: 5.6rem;
	height: 2.2rem;

	text-align: center;

	background-color: ${theme.colors.brandDisable};
	border: 1px solid ${theme.colors.brandPrimary};
	border-radius: 2px;

	${theme.fonts.eng.captionBold12}
`;

const RecommanedBtn = () => <div css={recommanedBtnContainer}>추천 상점</div>;

export default RecommanedBtn;
