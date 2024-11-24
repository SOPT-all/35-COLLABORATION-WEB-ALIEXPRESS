import { Theme, css } from '@emotion/react';

export const btnStyle = (theme: Theme) => css`
	position: absolute;
	top: 0.8rem;
	left: 16.6rem;

	${theme.fonts.kor.captionMedium12}
	color: ${theme.colors.notificationPrimary};

	background-color: transparent;
	border: none;
`;

const TranslationBtn = () => (
	<button type="button" css={btnStyle}>
		원문표시
	</button>
);

export default TranslationBtn;
