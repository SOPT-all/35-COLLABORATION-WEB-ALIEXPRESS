import { Theme, css } from '@emotion/react';

export const flexStyle = css`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const buttonStyle = (theme: Theme) => css`
	width: 9.6rem;
	height: 3rem;
	padding: 0.3rem 1.2rem;

	background: none;
	border: 1px solid ${theme.colors.gray9};
	border-radius: 999px;

	&:hover {
		border: 1px solid ${theme.colors.gray7};
	}
`;

export const fontStyle = (theme: Theme) => css`
	color: ${theme.colors.gray8};
	white-space: nowrap;

	fill: ${theme.colors.gray8};

	${theme.fonts.eng.bodyBold13};

	button:hover & {
		color: ${theme.colors.gray7};

		fill: ${theme.colors.gray7};
	}
`;
