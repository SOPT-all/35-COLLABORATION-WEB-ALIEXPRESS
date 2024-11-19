import { Theme, css } from '@emotion/react';

const defaultStyle = (theme: Theme) => css`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 8rem;
	height: 3.6rem;
	padding: 1.1rem 1rem;

	background: none;
	background-color: ${theme.colors.gray2};
	border: none;
	border-radius: 18.5px;

	&:hover {
		background-color: ${theme.colors.gray4};
	}
`;

export default defaultStyle;
