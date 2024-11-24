import { Theme, css } from '@emotion/react';

export const menuComponentStyle = (theme: Theme) => css`
	display: inline-flex;
	flex-direction: column;
	gap: 1.4rem;
	align-items: center;
	justify-content: center;
	margin-bottom: 1.8rem;
	padding: 1.4rem 0 1.2rem;

	background-color: ${theme.colors.white};
`;

export const menuTitleStyle = (theme: Theme) => css`
	width: 24.8rem;
	${theme.fonts.kor.bodyBold16};
`;

export const inviteStyle = (theme: Theme) => css`
	display: flex;
	align-items: center;
	width: 28rem;
	height: 3.4rem;
	padding-left: 1.5rem;

	color: ${theme.colors.gray10};
	font-size: 1rem;

	cursor: pointer;

	${theme.fonts.kor.bodyMedium14};
`;

export const menuItemStyle = (theme: Theme) => css`
	display: flex;
	align-items: center;
	width: 28rem;
	height: 3.4rem;
	padding-left: 1.5rem;

	color: ${theme.colors.gray10};
	font-size: 1rem;

	cursor: pointer;

	${theme.fonts.kor.bodyMedium14};
`;

export const selectedMenuItemStyle = (theme: Theme) => css`
	position: relative;

	background-color: ${theme.colors.gray2};

	::after {
		position: absolute;
		left: 0;
		display: block;
		width: 0.4rem;
		height: 100%;

		background-color: ${theme.colors.warningPrimary};

		content: '';
	}
`;
