import { Theme, css } from '@emotion/react';

export const btnStyle = (theme: Theme) => css`
	${theme.fonts.kor.captionMedium12}
	color: ${theme.colors.notificationPrimary};

	background-color: transparent;
	border: none;
`;

interface OriginalTextBtnProps {
	onClick: () => void;
}

const OriginalTextBtn = ({ onClick }: OriginalTextBtnProps) => (
	<button type="button" css={btnStyle} onClick={onClick}>
		원문표시
	</button>
);

export default OriginalTextBtn;
