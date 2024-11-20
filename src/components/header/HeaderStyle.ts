import { Theme, css } from '@emotion/react';

export const headerStyle = (theme: Theme) => css`
	position: relative;
	display: flex;
	gap: 1.6rem;
	justify-content: space-between;
	width: 100%;
	height: 5.4rem;
	padding: 0.5rem 5.6rem 0.5rem 2.6rem;

	background-color: ${theme.colors.gray10};

	& > div:not(:first-child) {
		display: flex;
		align-items: center;
	}
`;

export const logoDescStyle = css`
	position: absolute;
	bottom: 0.7rem;
	display: flex;
	gap: 0.2rem;
	align-items: center;
	justify-content: center;
`;

export const fontEnStyle = (theme: Theme) => css`
	color: ${theme.colors.white};
	${theme.fonts.eng.captionMedium11};
`;

export const fontKoStyle = (theme: Theme) => css`
	color: ${theme.colors.white};
	${theme.fonts.kor.captionMedium09};
`;

export const hambergerStyle = (theme: Theme) => css`
	width: 2.4rem;
	height: 2.4rem;
	margin: 1rem 0;
	padding: 0.5rem;

	background-color: ${theme.colors.gray7};
	border-radius: 999px;
`;
