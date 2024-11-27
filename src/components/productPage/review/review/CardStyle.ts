import { Theme, css } from '@emotion/react';

export const cardLayout = (theme: Theme) => css`
	display: flex;
	gap: 1.2rem;
	width: 47rem;
	height: 29.4rem;
	padding: 1.6rem 1.2rem;

	background-color: ${theme.colors.white};
	border: 1px solid ${theme.colors.gray3};
	border-radius: 8px;
`;

export const relativeStyle = css`
	position: relative;
`;

export const sizeStyle = css`
	width: 4rem;
	height: 4rem;
`;

export const circleStyle = (theme: Theme) => css`
	position: absolute;
	top: 1.2rem;
	left: 4rem;
	z-index: 10;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2rem;
	height: 2rem;
	padding: 0.4rem;

	background: ${theme.colors.brandPrimary};
	border-radius: 99px;
`;

export const infoWrapper = css`
	display: flex;
	flex-direction: column;
`;

export const cardTitleStyle = css`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const nameRightStyle = css`
	display: flex;
	gap: 1.2rem;
	align-items: center;
`;

export const nameStyle = (theme: Theme) => css`
	width: 31.2rem;
	height: 2rem;

	color: ${theme.colors.gray8};
	${theme.fonts.eng.titleBold16}
`;

export const dateStyle = (theme: Theme) => css`
	color: ${theme.colors.gray5};
	${theme.fonts.eng.captionMedium10}
`;

export const colorStyle = (theme: Theme) => css`
	margin-top: 0.8rem;

	color: ${theme.colors.gray6};
	${theme.fonts.eng.captionMedium12};
`;
export const reviewStyle = (theme: Theme) => css`
	display: -webkit-box;
	width: 39rem;
	height: 3.4rem;
	margin-top: 1.2rem;
	overflow: hidden;

	color: ${theme.colors.gray9};
	text-overflow: ellipsis;
	word-break: break-word;
	${theme.fonts.eng.captionMedium12};

	/* 말줄임표 처리 */
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
`;

export const monthChipStyle = (theme: Theme) => css`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 7.5rem;
	height: 2rem;
	margin-right: 0.3rem;
	padding: 0.2rem 0.4rem;

	color: ${theme.colors.brandPrimary};

	${theme.fonts.eng.captionMedium12};
	background-color: ${theme.colors.brandBg};
	border-radius: 2px;
`;

export const imgWrapper = css`
	display: flex;
	gap: 0.8rem;
	padding: 1.6rem 0;
`;

export const reviewBtnWrapper = css`
	display: flex;
	gap: 0.8rem;
`;

export const reportBtnStyle = (theme: Theme) => css`
	position: absolute;
	top: 2.4rem;
	right: 0;

	width: 4.9rem;
	height: 3.8rem;
	padding: 1rem 1.4rem;

	background-color: ${theme.colors.white};
	border: 1px solid ${theme.colors.gray3};
	${theme.fonts.kor.captionMedium10};
	border-radius: 4px;
`;

export const reviewImgStyle = css`
	width: 8rem;
	height: 8rem;
`;
