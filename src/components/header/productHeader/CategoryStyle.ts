import { Theme, css } from '@emotion/react';

export const CategoryLayout = css`
	position: absolute;
	top: 3.5rem;
	left: -9rem;
	display: flex;
	flex-direction: column;
	gap: 0;
	align-items: center;
	justify-content: center;

	box-shadow:
		0 0.6rem 1.2rem 0 rgb(0 0 0 / 12%),
		0 0.4rem 0.8rem 0 rgb(0 0 0 / 8%),
		0 0 0.4rem 0 rgb(0 0 0 / 8%);
	border-radius: 12px;
`;

export const CategoryContainerStyle = (theme: Theme) => css`
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
	padding: 0 0.1rem 0.6rem 0.6rem;

	background-color: ${theme.colors.white};
	border-radius: 9px;
`;

export const ScrollStyle = (theme: Theme) => css`
	height: 38.4rem;
	overflow: hidden scroll;

	/* 스크롤바 스타일링 */
	&::-webkit-scrollbar {
		width: 0.4rem;
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${theme.colors.gray4};
		border-radius: 999px;
	}
`;

export const TitleStyle = (theme: Theme) => css`
	display: flex;
	${theme.fonts.kor.bodyBold13}
	gap: 0.6rem;
	padding: 1.2rem 9.425rem 1.2rem 0.575rem;

	white-space: nowrap;
`;
