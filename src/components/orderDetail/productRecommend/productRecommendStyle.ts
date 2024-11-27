import { Theme, css } from '@emotion/react';

export const productRecommandContainer = css`
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
	width: 91.1rem;
	padding: 0.8rem 2.4rem 6.8rem;
`;

export const headerStringStyle = (theme: Theme) => css`
	display: flex;
	align-items: center;
	${theme.fonts.kor.titleBold20};
	height: 4.6rem;
`;

export const productListContainer = css`
	position: relative;
	display: flex;
	justify-content: space-between;
	width: 86.5rem;
	height: 33rem;
	padding: 0 1.3rem;
	overflow: hidden;
`;

export const scrollContainerStyle = css`
	display: flex;
	gap: 1.3rem;
	overflow: hidden;
	scroll-behavior: smooth;
`;

export const navigationButtonStyle = css`
	position: absolute;
	top: 48%;
	z-index: 2;

	transform: translateY(-50%);
	cursor: pointer;

	rect:hover {
		fill-opacity: 0.6;
	}
`;

export const btnLeftStyle = css`
	${navigationButtonStyle}
	left: 0;
`;

export const btnRightStyle = css`
	${navigationButtonStyle}
	right: 0;

	rect:hover {
		fill-opacity: 0.6;
	}
`;
