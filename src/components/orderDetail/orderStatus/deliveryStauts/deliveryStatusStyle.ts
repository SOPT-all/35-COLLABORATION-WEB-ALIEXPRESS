import { Theme, css } from '@emotion/react';

export const headerStringStyle = (theme: Theme) => css`
	${theme.fonts.kor.bodyMediumGray14};
`;

export const dateStringStyle = (theme: Theme) => css`
	${theme.fonts.eng.captionMediumGray12};
`;

export const textStringStyle = (theme: Theme) => css`
	${theme.fonts.eng.titleBold20};
`;

export const deliveryStatusContainserStyle = (theme: Theme) => css`
	display: flex;
	flex-direction: column;
	gap: 1.4rem;
	align-items: flex-start;
	width: 48.5rem;
	height: 35.7rem;
	padding: 2rem 2.4rem 3rem;

	background-color: ${theme.colors.white};
	border: 1px solid black;
`;

export const contentContainerStyle = css`
	display: flex;
	flex-direction: column;
	gap: 3.2rem;
	align-items: center;
	justify-content: center;
`;

export const textStatusContainerStyle = (theme: Theme) => css`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	align-items: center;
	justify-content: center;
	width: 43.7rem;
	padding: 1.3rem 0;

	background: ${theme.colors.gray2};
	border: 1px solid ${theme.colors.gray3};
	border-radius: 12px;
`;

export const iconContainerStyle = css`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: center;
	justify-content: center;
`;

export const eachIconContainerStyle = (theme: Theme) => css`
	display: flex;
	gap: 1.6rem;
	align-items: center;
	justify-content: center;
	${theme.fonts.kor.captionMediumGray12};
`;

export const iconBoxStyle = css`
	display: flex;
	flex-direction: column;
	gap: 0.6rem;
	align-items: center;
	width: 5.6rem;
`;

export const currentSpanStyle = (theme: Theme) => css`
	${theme.fonts.kor.captionBold12};
	color: ${theme.colors.black};
`;
