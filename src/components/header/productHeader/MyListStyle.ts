import { Theme, css } from '@emotion/react';

export const MyLayoutStyle = css`
	position: absolute;
	top: 4.5rem;
	right: -4rem;
	display: flex;
	flex-direction: column;
	gap: 0;
	align-items: center;
	justify-content: center;

	box-shadow:
		0 0.6rem 1.2rem 0 rgb(0 0 0 / 12%),
		0 0.4rem 0.8rem 0 rgb(0 0 0 / 8%),
		0 0 0.4rem 0 rgb(0 0 0 / 8%);
	border-radius: 12px;
`;

export const MyContainerStyle = (theme: Theme) => css`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
	width: 20rem;
	height: 25.7rem;
	padding: 2rem 1.3rem;

	background-color: ${theme.colors.white};
	border-radius: 12px;
`;

export const MyWrapperStyle = css`
	display: flex;
	gap: 0.9rem;
`;

export const infoStyle = css`
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
