import { Global, ThemeProvider } from '@emotion/react';
import Theme from './styles/theme';
import GLOBALSTYLE from './styles/global';
import { MenuBarComponent } from '@pages/orderDetail/sideBar/menuBar/menuBar';

const App = () => {
	return (
		<>
			<ThemeProvider theme={Theme}>
				<Global styles={GLOBALSTYLE} />
				<MenuBarComponent />
			</ThemeProvider>
		</>
	);
};

export default App;
