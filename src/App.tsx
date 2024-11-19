import { Global, ThemeProvider } from '@emotion/react';
import Theme from './styles/theme';
import GLOBALSTYLE from './styles/global';

const App = () => {
	return (
		<>
			<ThemeProvider theme={Theme}>
				<Global styles={GLOBALSTYLE} />
			</ThemeProvider>
		</>
	);
};

export default App;
