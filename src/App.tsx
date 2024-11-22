import { Global, ThemeProvider } from '@emotion/react';
import Theme from './styles/theme';
import GLOBALSTYLE from './styles/global';
import { SideBarComponent } from '@pages/orderDetail/sideBar/sideBar';

const App = () => {
	return (
		<>
			<ThemeProvider theme={Theme}>
				<Global styles={GLOBALSTYLE} />
				<SideBarComponent />
			</ThemeProvider>
		</>
	);
};

export default App;
