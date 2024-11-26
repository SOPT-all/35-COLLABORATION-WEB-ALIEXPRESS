import { Global, ThemeProvider } from '@emotion/react';

import Route from '@route/Route';
import GLOBALSTYLE from '@styles/global';
import Theme from '@styles/theme';
import { SideBarComponent } from '@components/orderDetail/sideBar/sideBar';

const App = () => (
	<ThemeProvider theme={Theme}>
		<Global styles={GLOBALSTYLE} />
		<SideBarComponent />
	</ThemeProvider>
);

export default App;
