import { css } from '@emotion/react';

export const defaultBtnStyle = css`
	color: black;

	background-color: transparent;
	border: 1px solid gray;

	:hover {
		color: red;
	}
`;

export const SmallBtnContainerStyle = css`
	box-sizing: border-box;
	width: 10.4rem;
	height: 3rem;

	border-radius: 20px;
`;

export const MediumBtnContainerStyle = css`
	box-sizing: border-box;
	width: 14.2rem;
	height: 3.4rem;

	border-radius: 20px;
`;

export const BtnSizeMap = {
	small: SmallBtnContainerStyle,
	medium: MediumBtnContainerStyle,
};
