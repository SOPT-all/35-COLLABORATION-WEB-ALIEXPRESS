import { Theme, css } from '@emotion/react';

export const headerStyle = (theme: Theme) => css`
	display: flex;
	gap: 1.6rem;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 5.4rem;
	padding: 0.9rem 5.2rem;

	background-color: ${theme.colors.gray10};
`;

export const rightSectionLayout = css`
	display: flex;
	align-items: center;
`;

export const rightSectionGap = css`
	display: flex;
	gap: 0.4rem;
	align-items: center;
	padding: 1.2rem 0.8rem;
`;

export const textKoStyle = (theme: Theme) => css`
	${theme.fonts.kor.captionMedium11};
	color: ${theme.colors.white};
`;

export const textEnStyle = (theme: Theme) => css`
	${theme.fonts.eng.captionMedium11};
	color: ${theme.colors.white};
`;

export const textCircleStyle = (theme: Theme) => css`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.3rem;
	height: 1.4rem;
	padding: 0 0.8rem;

	color: ${theme.colors.black};

	background-color: ${theme.colors.white};
	border-radius: 999px;
`;
