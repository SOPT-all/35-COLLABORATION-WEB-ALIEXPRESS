import { Theme, css } from '@emotion/react';

export const redTagStyle = (theme: Theme) => css`
    padding: 0.4rem 0.6rem;

	color: ${theme.colors.white};
	${theme.fonts.eng.captionBold10}

	background-color: ${theme.colors.brandPrimary};
    border-radius: 2px;
`;

export const grayTagStyle = (theme: Theme) => css`
    padding: 0.4rem 0.6rem;

	color: ${theme.colors.gray8};
	${theme.fonts.eng.captionBold10}

	background-color: ${theme.colors.gray2};
    border: 1px solid ${theme.colors.gray3};
    border-radius: 2px;
`;

export const tagStyleMap = {
	red: redTagStyle,
	gray: grayTagStyle
};