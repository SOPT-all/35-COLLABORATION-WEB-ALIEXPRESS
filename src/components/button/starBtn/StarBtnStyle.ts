import { css, Theme } from '@emotion/react';

export const StarBtnContainerStyle = css`
	display: flex;
	align-items: center;
	width: 11.5rem;
	height: 2rem;

	background-color: transparent;
	border: none;
`;

export const StartIconBoxStyle = css`
	display: flex;
	gap: 0.2rem;
	margin-left: 0.3rem;
`;

export const RatingStyle = (theme: Theme) => css`
	margin-left: 0.6rem;

	${theme.fonts.eng.captionBold11};
`;

export const ReviewCountSTyle = (theme: Theme) => css`
	margin-left: 0.4rem;

	${theme.fonts.eng.captionMedium12};
`;
