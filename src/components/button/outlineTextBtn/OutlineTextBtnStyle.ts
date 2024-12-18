import { css, Theme } from '@emotion/react';

export const defaultBtnStyle = (theme: Theme) => css`
	box-sizing: border-box;

	color: ${theme.colors.black};

	background-color: transparent;
	cursor: pointer;
	border: 1px solid ${theme.colors.gray7};

	${theme.fonts.kor.bodySemibold13};

	:hover {
		color: ${theme.colors.brandPrimary};
	}
`;

export const smallBtnContainerStyle = css`
	width: 10.4rem;
	height: 3rem;

	border-radius: 20px;
`;

export const mediumBtnContainerStyle = css`
	width: 14.2rem;
	height: 3rem;

	border-radius: 20px;
`;

export const btnSizeMap = {
	small: smallBtnContainerStyle,
	medium: mediumBtnContainerStyle,
};
