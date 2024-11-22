import { css, Theme } from '@emotion/react';

export const orderBoxContinerStyle = (theme: Theme) => css`
	display: flex;
	flex-direction: column;
	gap: 1.7rem;
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
	gap: 1rem;
	width: 100%;
	height: 14.6rem;
`;

export const orderTitleWrapperStyle = css`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 1.8rem;
`;

export const korTitleStyle = (theme: Theme) => css`
	${theme.fonts.kor.captionMedium12}
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
	gap: 1.2rem;
	width: 100%;
	height: 10.8rem;
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
