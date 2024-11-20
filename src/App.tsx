import { Global, ThemeProvider } from '@emotion/react';
import Theme from './styles/theme';
import GLOBALSTYLE from './styles/global';
import ReviewBtn from '@components/button/recommendBtn/reviewBtn';

const App = () => {
	const serverData = {
		usefulCount: 123,
		recommendCount: 45,
		likeCount: 24,
	};

	return (
		<>
			<ThemeProvider theme={Theme}>
				<Global styles={GLOBALSTYLE} />
				<ReviewBtn type="useful" clickedCount={serverData.usefulCount} />
				<ReviewBtn type="recommend" clickedCount={serverData.recommendCount} />
				<ReviewBtn type="like" clickedCount={serverData.likeCount} />
			</ThemeProvider>
		</>
	);
};

export default App;
