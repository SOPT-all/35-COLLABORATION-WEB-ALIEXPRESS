import { Theme, css } from '@emotion/react';

export const headerStringStyle = (theme: Theme) => css`
	display: flex;
	align-items: center;
	min-height: 5.7rem;

	${theme.fonts.kor.bodyMedium14};
	color: ${theme.colors.gray6};
`;

export const deliveryStatusContainserStyle = (theme: Theme) => css`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 35.6rem;
	height: 35.7rem;
	padding: 0 2.4rem 0 2.5rem;

	background-color: ${theme.colors.gray1};
	border-radius: 8px;
`;

export const deliveryStatusCardStyle = (theme: Theme) => css`
	display: flex;
	flex-direction: column;
	gap: 2.4rem;
	box-sizing: border-box;
	width: 30.4rem;
	max-height: 30rem;
	padding: 0 4rem 2.4rem 2rem;
	overflow: hidden auto;

	&::-webkit-scrollbar {
		width: 1rem;
	}

	&::-webkit-scrollbar-thumb {
		width: 1rem;
		height: 10rem;

		background: ${theme.colors.gray6};
		border-radius: 24px;
	}

	&::-webkit-scrollbar-track {
		margin-bottom: 1rem;

		background: ${theme.colors.white};
		border-radius: 24px;
	}
`;

export const lineConnectorStyle = (theme: Theme) => css`
	position: relative;

	&::after {
		position: absolute;
		top: 1.6rem;
		left: 6.5rem;
		width: 0.2rem;
		height: calc(100% + 0.7rem);

		background-color: ${theme.colors.gray3};
		transform: translateX(-50%);

		content: '';
	}
`;

export const statusNameStringStyle = (theme: Theme) => css`
	${theme.fonts.kor.bodyBold13};
	color: ${theme.colors.gray7};
`;

export const firstStringStyle = (theme: Theme) => css`
	color: ${theme.colors.brandPrimary};

	svg path {
		fill: ${theme.colors.brandPrimary6};
	}
`;
export const stepMessageStringStyle = (theme: Theme) => css`
	${theme.fonts.kor.captionMedium10};
	color: ${theme.colors.gray7};
`;

export const dateStringStyle = (theme: Theme) => css`
	${theme.fonts.both.captionBothMedium10};
	color: ${theme.colors.gray4};
`;

export const titleDateStringStyle = (theme: Theme) => css`
	width: 4.3rem;
	height: 2.4rem;

	color: ${theme.colors.gray4};
	text-align: right;
	${theme.fonts.both.captionBothMedium10};
`;

export const frameContentStyle = css`
	display: flex;
	flex-direction: column;
	min-width: 22.3rem;
`;

export const frameTitleStyle = css`
	display: flex;
	gap: 1.4rem;
`;

export const frameDetailStyle = css`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	padding-left: 8.7rem;
`;

export const frameDetailContentStyle = css`
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
`;
