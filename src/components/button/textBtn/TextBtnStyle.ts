import { css, Theme } from '@emotion/react';

export const blackBtnStyle = (theme: Theme) => css`
	color: ${theme.colors.black};

	background-color: transparent;
	border: 1px solid ${theme.colors.black};

	:hover {
		color: ${theme.colors.magenta};
	}
`;

export const redBtnStyle = (theme: Theme) => css`
	color: ${theme.colors.white};

	background-color: ${theme.colors.red};
	border: none;

	:hover {
		background-color: ${theme.colors.brandPrimary};
	}
`;

export const grayBtnStyle = (theme: Theme) => css`
	color: ${theme.colors.black};

	background-color: ${theme.colors.gray2};
	border: none;

	:hover {
		background-color: ${theme.colors.gray4};
	}
`;

export const btnStyleMap = {
	red: redBtnStyle,
	black: blackBtnStyle,
	gray: grayBtnStyle,
};

export const largeBtnContainerStyle = css`
	width: 27.5rem;
	height: 3.6rem;

	border-radius: 18.5px;
`;

export const mediumBtnContainerStyle = css`
	width: 12.7rem;
	height: 3.4rem;

	border-radius: 36px;
`;

export const defaultBtnStyle = (theme: Theme) => css`
	box-sizing: border-box;

	${theme.fonts.kor.captionBold12};
`;

export const btnSizeMap = {
	medium: mediumBtnContainerStyle,
	large: largeBtnContainerStyle,
};
