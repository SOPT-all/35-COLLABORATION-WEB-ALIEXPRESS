import { Theme, css } from '@emotion/react';

export const MyLayout = (theme: Theme) => css`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
	width: 20rem;
	height: 25.7rem;
	padding: 2rem 1.3rem;

	background-color: ${theme.colors.white};
	border-radius: 12px;
`;

export const MyContainerStyle = css`
	display: flex;
	gap: 0.9rem;
`;

export const MyWrapperStyle = css`
	display: flex;
	flex-direction: column;
	gap: 0.3rem;
`;

export const mFontStyle = (theme: Theme) => css`
	${theme.fonts.kor.captionMedium10}
`;
export const bFontStyle = (theme: Theme) => css`
	${theme.fonts.eng.captionBold11}
	margin-bottom: 0.3rem;
`;
export const mFontColorStyle = (theme: Theme) => css`
	color: ${theme.colors.notificationPrimary};
`;

export const dividerStyle = (theme: Theme) => css`
	width: 16.95rem;
	height: 0;

	border-top: 1px solid ${theme.colors.gray3};
`;
