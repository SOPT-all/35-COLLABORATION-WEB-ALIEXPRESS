import { css, Theme } from '@emotion/react';

const flexBoxStyle = css`
	display: flex;
	align-items: center;
	height: 2rem;
`;

export const starBtnContainerStyle = css`
	width: 11.5rem;

	background-color: transparent;
	border: none;
	${flexBoxStyle}
`;

export const startIconBoxStyle = css`
	display: flex;
	gap: 0.2rem;
	margin-left: 0.3rem;
`;

export const ratingStyle = (theme: Theme) => css`
	margin-left: 0.6rem;

	${theme.fonts.eng.captionBold11};
	${flexBoxStyle}
`;

export const reviewCountSTyle = (theme: Theme) => css`
	margin-left: 0.4rem;

	${flexBoxStyle}
	${theme.fonts.eng.captionMedium12};
`;
