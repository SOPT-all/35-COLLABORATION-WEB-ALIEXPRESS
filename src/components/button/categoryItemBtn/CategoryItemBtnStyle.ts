import { css, Theme } from '@emotion/react';

export const defaultBtnStyle = (theme: Theme) => css`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	box-sizing: border-box;

	color: ${theme.colors.black};

	background-color: ${theme.colors.white};
	border: none;
	border-radius: 6px;

	${theme.fonts.kor.captionSemibold11};

	:hover {
		color: ${theme.colors.magenta};

		background-color: ${theme.colors.gray2};
	}
`;

export const SmallBtnContainerStyle = css`
	gap: 0.3rem;
	width: 17rem;
	height: 2.5rem;
	padding: 0 0.4rem;
`;

export const MediumBtnContainerStyle = css`
	gap: 0.6rem;
	width: 19.3rem;
	height: 3rem;
	padding: 0 0.6rem;
`;

export const BtnSizeMap = {
	small: SmallBtnContainerStyle,
	medium: MediumBtnContainerStyle,
};
