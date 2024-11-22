import { Theme, css } from '@emotion/react';

export const buyerInfoComponentStyle = css`
	display: flex;
	gap: 1.7rem;
	width: 44.8rem;
	height: 10.8rem;
	padding: 1.6rem 2.4rem;
`;

export const infoDetailStyle = css`
	display: flex;
	flex-direction: column;
	gap: 0.9rem;
`;

export const korStringStyle = (theme: Theme) => css`
	${theme.fonts.kor.bodyMedium14}
`;

export const engStringStyle = (theme: Theme) => css`
	${theme.fonts.eng.bodyBold14}
`;
