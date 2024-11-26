import { Theme, css } from '@emotion/react';

export const serviceIntroduceContainer = css`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	width: 91.1rem;
	height: 28rem;
	padding: 2.4rem 1.6rem;
`;

export const hedarTitleStyle = (theme: Theme) => css`
	${theme.fonts.kor.bodyBold14};
	color: ${theme.colors.gray9};
`;

export const sectionContainerStyle = css`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	width: 87.9rem;
	height: 19.6rem;
`;

export const contentTitleStyle = (theme: Theme) => css`
	${theme.fonts.kor.bodyBold14};
	color: ${theme.colors.gray10};
`;

export const contentStyle = (theme: Theme) => css`
	${theme.fonts.kor.captionMedium12};
	color: ${theme.colors.gray7};
`;

export const contentContainerStyle = css`
	display: flex;
	gap: 0.8rem;
	align-items: center;
	height: 4.4rem;
`;

export const contentBoxStyle = css`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	width: 100%;
`;

export const contentLineStyle = css`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const diverStyle = css`
	margin-top: 1.6rem;
`;
