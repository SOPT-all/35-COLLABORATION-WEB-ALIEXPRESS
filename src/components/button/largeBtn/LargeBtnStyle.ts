import { css } from '@emotion/react';

export const BlackBtnStyle = css`
	background-color: transparent;
	color: black;
	border: 1px solid black; //black
	:hover {
		color: red; //magenta
	}
`;

export const RedBtnStyle = css`
	background-color: red; //red
	color: white; //white
	:hover {
		background-color: pink; //brand_primary
	}
`;

export const LargeBtnContainerStyle = css`
	width: 27.5rem;
	height: 3.6rem;
	border-radius: 18.5px;
	box-sizing: border-box;
	border: none;
`;

export const largeBtnStyleMap = {
	red: RedBtnStyle,
	black: BlackBtnStyle,
};
