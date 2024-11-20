import { css } from '@emotion/react';

export const BlackBtnStyle = css`
	color: black;

	background-color: transparent;
	border: 1px solid black;

	:hover {
		color: red;
	}
`;

export const RedBtnStyle = css`
	color: white;

	background-color: red;

	:hover {
		background-color: pink;
	}
`;

export const GrayBtnStyle = css`
	color: black;

	background-color: white;

	:hover {
		background-color: gray;
	}
`;

export const BtnStyleMap = {
	red: RedBtnStyle,
	black: BlackBtnStyle,
	gray: GrayBtnStyle,
};

export const LargeBtnContainerStyle = css`
	box-sizing: border-box;
	width: 27.5rem;
	height: 3.6rem;

	border: none;
	border-radius: 18.5px;
`;

export const MediumBtnContainerStyle = css`
	box-sizing: border-box;
	width: 12.7rem;
	height: 3.4rem;

	border: none;
	border-radius: 36px;
`;

export const BtnSizeMap = {
	medium: MediumBtnContainerStyle,
	large: LargeBtnContainerStyle,
};
