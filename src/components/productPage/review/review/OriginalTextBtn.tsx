import { Theme, css } from '@emotion/react';
import { useState } from 'react';

export const btnStyle = (theme: Theme) => css`
	${theme.fonts.kor.captionMedium12}
	color: ${theme.colors.notificationPrimary};

	background-color: transparent;
	border: none;
`;

const OriginalTextBtn = () => {
	const [isClicked, setIsClicked] = useState(false);
	return (
		<button type="button" css={btnStyle}>
			원문표시
		</button>
	);
};

export default OriginalTextBtn;
