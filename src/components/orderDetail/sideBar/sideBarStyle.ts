import { Theme, css } from '@emotion/react';

export const sideBarComponentStyle = (theme: Theme) => css`
	display: flex;
	flex-direction: column;
	align-items: center;
	align-items: flex-end;
	width: 28rem;
	height: 133.4rem;
	padding-right: 1.1rem;

	background-color: ${theme.colors.gray2};
`;

export const pathInfoStyle = (theme: Theme) => css`
	display: flex;
	align-items: center;
	width: 28rem;
	height: 4.8rem;
	padding-left: 1.2rem;

	.last-item {
		color: ${theme.colors.gray10};
	}
	color: ${theme.colors.gray6};
	${theme.fonts.kor.captionRegular12};
`;
