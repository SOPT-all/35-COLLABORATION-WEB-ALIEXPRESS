import { css, Theme } from '@emotion/react';

export const RecommandedListContainer = css`
	display: flex;
	flex-direction: column;
	width: 127.7rem;
	height: 34.5rem;
`;

export const TitleLayout = (theme: Theme) => css`
	display: flex;
	gap: 0.4rem;
	align-items: center;
	width: 100%;
	height: 1.6rem;
	margin: 1.25rem 0;

	color: ${theme.colors.gray9};
	${theme.fonts.kor.bodyBold16}
`;

export const ProductWrapper = css`
	display: flex;
	gap: 1.3rem;
	width: 100%;
	height: 30rem;
`;
