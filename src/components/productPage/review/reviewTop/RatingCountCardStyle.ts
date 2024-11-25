import { Theme, css } from '@emotion/react';

export const cardLayout = (theme: Theme) => css`
	display: flex;
	flex-direction: column;
	gap: 0.6rem;
	justify-content: center;
	width: 26.6rem;
	height: 13.2rem;
	padding: 1.4rem 2.4rem;

	background-color: ${theme.colors.gray2};
	border-radius: 8px;
`;

export const cardWrapper = css`
	display: flex;
	gap: 0.8rem;
`;

export const fontStyle = (theme: Theme) => css`
	${theme.fonts.eng.captionMedium10}
`;
