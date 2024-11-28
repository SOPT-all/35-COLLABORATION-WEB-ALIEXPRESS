import { Theme, css } from '@emotion/react';

export const orderLayoutContainerStyle = (theme: Theme) => css`
	width: 100vw;
	margin: 0 auto;

	background-color: ${theme.colors.gray2};
`;

export const orderLayoutStyle = css`
	display: flex;
	gap: 1.2rem;
	width: 121.4rem;
	margin: 0 auto;
	margin-top: 0.6rem;
	margin-bottom: 4rem;
`;
