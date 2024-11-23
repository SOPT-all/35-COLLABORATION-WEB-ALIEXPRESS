import { Theme, css } from '@emotion/react';

export const relativeStyle = css`
	position: relative;
`;

export const titleContainer = css`
	display: flex;
	align-items: center;
`;

export const fontKoStyle = (theme: Theme) => css`
	${theme.fonts.kor.titleBold20}
`;

export const fontEnStyle = (theme: Theme) => css`
	margin: 0 0.4rem 0 0.6rem;
	${theme.fonts.eng.titleBold20}
`;

export const alignStyle = css`
	margin-top: 0.2rem;

	cursor: pointer;
`;
export const toolStyle = (theme: Theme) => css`
	position: absolute;
	top: 2.8rem;
	left: 9.9rem;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem 1.4rem;

	color: ${theme.colors.white};

	background: ${theme.colors.black};
	${theme.fonts.eng.captionMedium12}
	border-radius: 4px;
`;
