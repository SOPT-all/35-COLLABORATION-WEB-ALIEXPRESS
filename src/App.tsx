import { SideBarComponent } from '@components/orderDetail/sideBar/sideBar';
import { Global, ThemeProvider } from '@emotion/react';

import GLOBALSTYLE from './styles/global';
import Theme from './styles/theme';

const App = () => (
	<ThemeProvider theme={Theme}>
		<Global styles={GLOBALSTYLE} />
		<SideBarComponent />
	</ThemeProvider>
);

export default App;
