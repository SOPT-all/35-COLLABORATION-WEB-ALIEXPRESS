import { Theme, css } from '@emotion/react';

export const FlexStyle = (theme: Theme) => css`
	display: flex;
	align-items: center;
	justify-content: center;
	white-space: nowrap;
	gap: 0.3rem;
	width: 9.2rem;
	height: 2.4rem;
	${theme.fonts.captionMedium12};
`;

export const ClickedBtnContainerStyle = (theme: Theme) => css`
	display: flex;
	box-sizing: border-box;
	padding: 0.4rem 0.8rem;
	border-radius: 0.4rem;

	color: ${theme.colors.notificationPrimary};
	border: 1px solid ${theme.colors.notificationSecondary};
	background-color: ${theme.colors.notificationBg};

	&:hover {
		background-color: ${theme.colors.notificationSecondary};
	}
`;

export const NonClickedBtnContainerStyle = (theme: Theme) => css`
	display: flex;
	box-sizing: border-box;
	padding: 0.4rem 0.8rem;
	border-radius: 0.4rem;

	color: ${theme.colors.gray9};
	border: 1px solid ${theme.colors.gray3};
	background-color: ${theme.colors.gray2};

	&:hover {
		background-color: ${theme.colors.gray3};
	}
`;

export const BtnStyleMap = {
	true: ClickedBtnContainerStyle,
	false: NonClickedBtnContainerStyle,
};
