import { Global, ThemeProvider } from '@emotion/react';
import Theme from './styles/theme';
import GLOBALSTYLE from './styles/global';
import { css } from '@emotion/react';
import ReviewBtn from './components/button/recommendBtn/reviewBtn';

const buttonContainerStyle = css`
	display: flex;
	flex-direction: column; /* 세로 정렬 설정 */
	gap: 16px; /* 버튼 간 간격 */
	align-items: center; /* 버튼들을 가운데 정렬 */
	margin-top: 10rem;
`;

const App = () => {
	const serverData = {
		usefulCount: 1,
		recommendCount: 25,
		likeCount: 999,
	};

	return (
		<>
			<ThemeProvider theme={Theme}>
				<Global styles={GLOBALSTYLE} />
				<div css={buttonContainerStyle}>
					<ReviewBtn type="useful" clickedCount={serverData.usefulCount} />
					<ReviewBtn type="recommend" clickedCount={serverData.recommendCount} />
					<ReviewBtn type="like" clickedCount={serverData.likeCount} />
				</div>
			</ThemeProvider>
		</>
	);
};

export default App;

