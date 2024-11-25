import { Theme, css } from '@emotion/react';

export const cardLayout = (theme: Theme) => css`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
	justify-content: center;
	width: 48rem;
	height: 13.2rem;
	padding: 2.1rem 2.4rem;

	background-color: ${theme.colors.gray2};
	border-radius: 8px;
`;

export const cardWrapper = css`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const titleStyle = (theme: Theme) => css`
	${theme.fonts.kor.captionBold12}
`;

export const cardBox = css`
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
`;
