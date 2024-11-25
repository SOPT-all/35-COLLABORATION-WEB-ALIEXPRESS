import { Theme, css } from '@emotion/react';

export const LabelWrapper = css`
	display: flex;
	gap: 2rem;
	margin: 1.4rem 0;
`;

export const fontBox = css`
	display: flex;
	gap: 0.4rem;
	width: 47rem;
`;

export const fontEnStyle = (theme: Theme) => css`
	color: ${theme.colors.brandPrimary};
	${theme.fonts.eng.titleBold16}
`;

export const fontKoStyle = (theme: Theme) => css`
	color: ${theme.colors.gray9};
	${theme.fonts.kor.bodyBold16}
`;
