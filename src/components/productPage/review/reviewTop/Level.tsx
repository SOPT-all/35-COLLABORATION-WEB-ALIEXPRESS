import { Theme, css } from '@emotion/react';

export const levelContainer = css`
	display: flex;
	gap: 11.4rem;

	/* justify-content: space-around; */
`;

export const fontStyle = (theme: Theme) => css`
	${theme.fonts.kor.captionMedium10}
	color: ${theme.colors.gray6}
`;

const Level = () => (
	<div css={levelContainer}>
		<p css={fontStyle}>낮음</p>
		<p css={fontStyle}>보통</p>
		<p css={fontStyle}>높음</p>
	</div>
);

export default Level;
