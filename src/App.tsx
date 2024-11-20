import { Global, ThemeProvider } from '@emotion/react';
import Theme from './styles/theme';
import GLOBALSTYLE from './styles/global';
import ReviewBtn from '@components/button/recommendBtn/reviewBtn';
import { css } from "@emotion/react";

const buttonContainerStyle = css`
  display: flex;
  flex-wrap: wrap; /* 버튼들이 줄 바꿈되게 설정 */
  gap: 16px; /* 버튼 간의 간격 설정 */
  justify-content: center; /* 버튼들을 가운데 정렬 */
  margin-top : 10px;
`;

const App = () => {
	const serverData = {
		usefulCount: 12,
		recommendCount: 45,
		likeCount: 24,
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
