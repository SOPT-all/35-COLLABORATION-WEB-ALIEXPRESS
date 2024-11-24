import { css } from '@emotion/react';

export const reviewContainer = css`
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
	width: 96rem;
	height: 62rem;
	overflow: hidden;
`;

export const reviewLayout = (activeTab: string) => css`
	display: flex;
	flex-flow: ${activeTab === 'total' ? 'column' : 'row'} wrap;
	gap: 2rem;
`;
