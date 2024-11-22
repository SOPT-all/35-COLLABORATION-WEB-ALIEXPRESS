import { css, Theme } from '@emotion/react';

export const InfoTableContainerStyle = css`
	margin-top: 10px;
	width: 96rem;
	height: 28rem;
	display: flex;
	flex-direction: column;
	gap: 2.4rem;
`;

export const infoTableLayoutStyle = css`
	width: 100%;
	height: 17.8rem;
`;

export const infoTitleStyle = (theme: Theme) => css`
	height: 4.6rem;
	align-content: center;

	${theme.fonts.kor.titleBold20}
`;

export const infoTableStyle = (theme: Theme) => css`
	width: 100%;
	height: 13.2rem;
	border-radius: 8px;

	th,
	td {
		width: 34.1rem;
		height: 4.4rem;
		padding: 1.2rem;
		border: 1px solid ${theme.colors.gray3};
		box-sizing: border-box;

		text-align: left;
		${theme.fonts.eng.captionMedium12}
	}

	th {
		width: 13.7rem;

		background-color: ${theme.colors.gray2};
		${theme.fonts.kor.captionSemibold12}
	}
`;
