import { Theme, css } from '@emotion/react';

export const purchaseInfoComponentStyle = css`
	display: flex;
	gap: 1rem;
	width: 44.8rem;
	height: 10.8rem;
	padding: 1.6rem 2.4rem;
`;

export const infoDetailStyle = css`
	display: flex;
	flex-direction: column;
	gap: 1.1rem;
`;

export const copyButtonStyle = css`
	display: flex;
	padding-left: 1rem;
`;

export const korStringStyle = (theme: Theme) => css`
	${theme.fonts.kor.bodyMedium14}
`;

export const engStringStyle = (theme: Theme) => css`
	${theme.fonts.eng.bodyBold14}
`;

export const copyStringStyle = (theme: Theme) => css`
	${theme.fonts.kor.bodyMediumBlue14}
	cursor: pointer;
`;
