import { css, Theme } from '@emotion/react';

export const orderBoxContinerStyle = (theme: Theme) => css`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	box-sizing: border-box;
	width: 30rem;
	height: 38rem;
	padding: 1.1rem 1.3rem;

	border: 1px solid ${theme.colors.gray4};
	border-radius: 6px;
`;

export const dividerStyle = (theme: Theme) => css`
	width: 27.4rem;
	height: 0.1rem;

	background-color: ${theme.colors.gray2};
`;

export const orderInfoLayoutStyle = css`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 14.6rem;
`;

export const orderTitleWrapperStyle = css`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 1.8rem;
	margin-bottom: 1rem;
`;

export const korTitleStyle = (theme: Theme) => css`
	${theme.fonts.kor.captionBold12}
`;

export const engTitleStyle = (theme: Theme) => css`
	${theme.fonts.eng.captionMedium12}
`;

export const adressStyle = (theme: Theme) => css`
	${theme.fonts.eng.captionMedium12}
	display: flex;
	align-items: center;
`;

export const orderInfoLayouttyle = css`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 10.8rem;
	margin-top: 1rem;
`;

export const freeOrderInfoWrapperStyle = css`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 2.4rem;
	margin-bottom: 0.4rem;
`;

export const flexBoxStyle = css`
	display: flex;
	align-items: center;
	height: 100%;
`;

export const arrivalDateWrapperStyle = css`
	box-sizing: border-box;
	width: 100%;
	height: 1.9rem;
	padding-left: 2.2rem;
`;

export const arriveTitleStyle = (theme: Theme) => css`
	margin-right: 0.3rem;

	color: ${theme.colors.gray6};
	${theme.fonts.kor.captionMedium12}
`;

export const privacyInfoLayoutStyle = css`
	display: flex;
	flex-direction: column;
	gap: 0.3rem;
	width: 100%;
	height: 4.9rem;
`;

export const privacyTitleBoxStyle = css`
	display: flex;
	align-items: center;
	height: 4rem;
	margin-top: 1.2rem;
`;

export const descriptionBoxStyle = (theme: Theme) => css`
	display: flex;
	flex-direction: column;
	gap: 0.3rem;
	align-items: flex-start;
	box-sizing: border-box;
	width: 100%;
	height: 2.5rem;
	padding: 0 2.2rem;

	color: ${theme.colors.gray6};
	${theme.fonts.kor.captionMedium9}
`;

export const orderButtonsLayoutStyle = css`
	width: 100%;
	height: 17.8rem;
`;

export const countButtonsStyle = css`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 6.7rem;
	height: 1.8rem;
	margin: 0.8rem 0 1.6rem;
`;

export const iconWrapperStyle = (theme: Theme) => css`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 1.8rem;
	height: 1.8rem;

	background-color: ${theme.colors.gray2};
	border-radius: 50px;

	&:hover {
		background-color: ${theme.colors.gray4};
	}

	&:hover svg path {
		stroke: ${theme.colors.gray6};
	}
`;

export const engCaptionBoldStyle = (theme: Theme) => css`
	${theme.fonts.eng.captionBold12}
`;

export const orderBtnWrapperStyle = css`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	width: 100%;
	height: 12.5rem;
`;

export const emojiBtnWrapperStyle = css`
	display: flex;
	gap: 0.8rem;
	width: 100%;
	height: 3.6rem;
`;
