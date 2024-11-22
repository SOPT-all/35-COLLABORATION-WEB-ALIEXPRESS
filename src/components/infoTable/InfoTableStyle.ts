import { css, Theme } from '@emotion/react';

export const infoTableLayoutStyle = css`
	width: 96rem;
	height: 17.8rem;
`;

export const infoTitleStyle = (theme: Theme) => css`
	height: 4.6rem;
	align-content: center;

	${theme.fonts.kor.titleBold20}
`;

export const infoTableStyle = (theme: Theme) => css`
	width: 96rem;
	height: 13.2rem;
	border-radius: 8px;

	th,
	td {
		width: 34.1rem;
		height: 4.4rem;
		padding: 0 1.2rem;
		box-sizing: border-box;

		text-align: left;
		${theme.fonts.eng.captionMedium12}
		display: flex;
		align-items: center;
	}

	th {
		width: 13.7rem;

		background-color: ${theme.colors.gray2};
		${theme.fonts.kor.captionSemibold12}
		gap: 0.6rem;
	}

	tr {
		display: flex;
		border: 1px solid ${theme.colors.gray3};
	}
`;
