import { Theme, css } from '@emotion/react';

export const relativeStyle = css`
	position: relative;
`;

export const FilterBtnContainer = (theme: Theme) => css`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 15.4rem;
	height: 3rem;
	padding: 0.8rem 1.2rem;

	background-color: ${theme.colors.gray2};
	border-radius: 6px;
`;

export const fontStyle = (theme: Theme) => css`
	${theme.fonts.kor.captionMedium12}
	z-index: 5;
`;

export const dropDownLayoutStyle = (theme: Theme) => css`
	position: absolute;
	top: 3.2rem;
	width: 15.4rem;

	background-color: ${theme.colors.gray1};
	border: 1px solid ${theme.colors.gray3};
	border-radius: 6px;
`;

export const listStyle = (theme: Theme) => css`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 3rem;
	padding: 0.8rem 1.2rem;

	border-bottom: 1px solid ${theme.colors.gray3};

	&:nth-of-type(3) {
		border-bottom: none;
	}
`;
