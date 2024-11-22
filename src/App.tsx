import ReviewBtn from '@components/button/recommendBtn/reviewBtn';
import { Global, ThemeProvider } from '@emotion/react';

import GLOBALSTYLE from './styles/global';
import Theme from './styles/theme';

function App() {
	return (
		<ThemeProvider theme={Theme}>
			<Global styles={GLOBALSTYLE} />
			<ReviewBtn type="recommend" clickedCount={15} />
		</ThemeProvider>
	);
}

export default App;
