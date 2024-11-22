import { Theme, css } from '@emotion/react';

export const qrCodeComponentStyle = css`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 28rem;
	height: 22.6rem;
`;

export const qrCodeTextStyle = css`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const qrTitleStyle = (theme: Theme) => css`
	${theme.fonts.eng.bodyBold16};
	margin-bottom: 0.6rem;
`;

export const qrContentStyle = (theme: Theme) => css`
	${theme.fonts.kor.captionMedium12};
	color: ${theme.colors.gray6};
`;

export const qrImageStyle = css`
	margin: 0.8rem 0;
`;
