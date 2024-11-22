import { Theme, css } from '@emotion/react';

export const relativeStyle = css`
	position: relative;
`;

export const headerStyle = (theme: Theme) => css`
	display: flex;
	gap: 1.6rem;
	justify-content: space-between;
	width: 100%;
	height: 5.4rem;
	padding: 0.5rem 5.6rem 0.5rem 2.6rem;

	background-color: ${theme.colors.gray10};

	& > *:not(:first-of-type) {
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

export const inputStyle = (theme: Theme) => css`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 67.7rem;
	height: 3.2rem;
	padding: 0.3rem 2rem;

	border: none;
	border-radius: 999px;

	&::placeholder {
		color: ${theme.colors.gray4};
		${theme.fonts.kor.captionBold11}
	}
`;

export const IconContainer = css`
	position: absolute;
	right: 0.3rem;
	display: flex;
	gap: 0.5rem;
	align-items: center;
`;

export const searchStyle = (theme: Theme) => css`
	width: 4.4rem;
	height: 2.6rem;

	background-color: ${theme.colors.black};
	border-radius: 99px;
`;

export const appLogLayout = css`
	display: flex;
	gap: 0.4rem;
	align-items: center;
	padding: 1rem 0.8rem;
`;

export const textContainer = (theme: Theme) => css`
	display: flex;
	flex-direction: column;

	color: ${theme.colors.white};
`;

export const fontEnAppStyle = (theme: Theme) => css`
	${theme.fonts.eng.captionMedium10};
`;

export const fontMStyle = (theme: Theme) => css`
	${theme.fonts.kor.captionMedium10};
`;
export const flagLayout = css`
	display: flex;
	gap: 0.2rem;
	align-items: center;
	padding: 1rem 0.8rem;
`;

export const flagContainer = css`
	display: flex;
`;

export const fontKRWStyle = (theme: Theme) => css`
	${theme.fonts.eng.captionBold10};
`;

export const arrowStyle = css`
	align-self: flex-end;
`;

export const fontBStyle = (theme: Theme) => css`
	${theme.fonts.kor.captionBold10};
`;

export const cartLayout = css`
	display: flex;
	gap: 0.3rem;
	align-items: center;
	padding: 1rem 0.8rem;
`;

export const numBackStyle = (theme: Theme) => css`
	display: flex;
	justify-content: center;
	width: 1.9rem;
	height: 1.2rem;

	color: ${theme.colors.gray10};

	background-color: ${theme.colors.white};
	border-radius: 999px;
`;
