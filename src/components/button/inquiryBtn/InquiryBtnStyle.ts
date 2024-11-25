import { css, Theme } from '@emotion/react';

export const InquiryBtnContainer = (theme: Theme) => css`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 9.6rem;
	height: 3rem;

	color: ${theme.colors.gray9};

	border: 1px solid ${theme.colors.gray9};
	border-radius: 999px;
	${theme.fonts.eng.bodyBold13}
`;

export const textStyle = css`
	margin-top: 0.3rem;
`;
