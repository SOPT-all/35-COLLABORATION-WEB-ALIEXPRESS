import { Theme, css } from '@emotion/react';

export const headerStringStyle = (theme: Theme) => css`
	${theme.fonts.kor.bodyMedium14};
	color: ${theme.colors.gray6};
`;

export const textStringStyle = (theme: Theme) => css`
	${theme.fonts.kor.titleBold20};
`;

export const deliveryStatusContainserStyle = (theme: Theme) => css`
	display: flex;
	flex-direction: column;
	gap: 1.4rem;
	align-items: flex-start;
	width: 48.5rem;
	height: 35.7rem;
	padding: 2rem 2.4rem 3rem;

	background-color: ${theme.colors.gray1};
	border-radius: 8px;
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
	gap: 0.7rem;
	align-items: center;
	justify-content: center;
	width: 43.7rem;
	height: 7rem;
	padding: 1.3rem 0;

	background: ${theme.colors.gray2};
	border: 1px solid ${theme.colors.gray3};
	border-radius: 12px;
`;

export const dateStatusContainerStyle = (theme: Theme) => css`
	display: flex;
	align-items: center;
	height: 1.6rem;

	${theme.fonts.both.captionBothMedium12};
	color: ${theme.colors.gray6};
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

	color: ${theme.colors.gray6};
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
