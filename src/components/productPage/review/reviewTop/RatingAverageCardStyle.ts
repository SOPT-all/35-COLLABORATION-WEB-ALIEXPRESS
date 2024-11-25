import { Theme, css } from '@emotion/react';

export const cardLayout = (theme: Theme) => css`
	display: flex;
	flex-direction: column;
	gap: 0.6rem;
	width: 26.6rem;
	height: 13.2rem;
	padding: 1.4rem 2.4rem;

	background-color: ${theme.colors.gray2};
	border-radius: 8px;
`;

export const numStyle = (theme: Theme) => css`
	${theme.fonts.eng.headBold48};
`;

export const starWrapper = css`
	display: flex;
	gap: 0.6rem;
`;

export const descStyle = (theme: Theme) => css`
	${theme.fonts.kor.captionSemibold12}
	color: ${theme.colors.successPrimary};
`;
