import { css } from '@emotion/react';

export const defaultBtnStyle = css`
	display: flex;
	align-items: center;
	justify-content: flex-start;

	color: black;

	background-color: white;
	border: none;

	:hover {
		color: red;
	}
`;

export const SmallBtnContainerStyle = css`
	gap: 0.3rem;
	box-sizing: border-box;
	width: 17rem;
	height: 2.5rem;
	padding: 0 0.4rem;

	border-radius: 6px;
`;

export const MediumBtnContainerStyle = css`
	gap: 0.6rem;
	box-sizing: border-box;
	width: 19.3rem;
	height: 3rem;
	padding: 0 0.6rem;

	border-radius: 6px;
`;

export const BtnSizeMap = {
	small: SmallBtnContainerStyle,
	medium: MediumBtnContainerStyle,
};
