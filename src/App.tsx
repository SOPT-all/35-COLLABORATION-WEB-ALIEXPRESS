import { Global, ThemeProvider } from '@emotion/react';

import GLOBALSTYLE from './styles/global';
import Theme from './styles/theme';

const App = () => {
	<ThemeProvider theme={Theme}>
		<Global styles={GLOBALSTYLE} />
	</ThemeProvider>;
};

export default App;
