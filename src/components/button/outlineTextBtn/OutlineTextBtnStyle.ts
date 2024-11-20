import { css, Theme } from '@emotion/react';

export const defaultBtnStyle = (theme: Theme) => css`
	box-sizing: border-box;

	color: ${theme.colors.black};

	background-color: transparent;
	border: 1px solid ${theme.colors.gray7};

	${theme.fonts.kor.bodySemibold13};

	:hover {
		color: ${theme.colors.brandPrimary};
	}
`;

export const SmallBtnContainerStyle = css`
	width: 10.4rem;
	height: 3rem;

	border-radius: 20px;
`;

export const MediumBtnContainerStyle = css`
	width: 14.2rem;
	height: 3.4rem;

	border-radius: 20px;
`;

export const BtnSizeMap = {
	small: SmallBtnContainerStyle,
	medium: MediumBtnContainerStyle,
};
