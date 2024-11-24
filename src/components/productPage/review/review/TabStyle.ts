import { Theme, css } from '@emotion/react';

export const TabLayout = (theme: Theme) => css`
	display: flex;
	gap: 0.6rem;
	align-items: center;
	width: 96rem;
	height: 5.6rem;
	padding: 0.4rem;

	background-color: ${theme.colors.gray2};
	border-radius: 12px;
`;

export const btnStyle = (theme: Theme, isActive: boolean) => css`
	width: 31.3rem;
	height: 4.8rem;

	${theme.fonts.kor.bodyBold13}
	background-color: ${isActive ? theme.colors.white : theme.colors.gray2};
	border: none;
	border-radius: 8px;
`;
