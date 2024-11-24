import DetailStatusComponent from '@components/orderDetail/orderStatus/detailStatus/detailStatus';
import { Global, ThemeProvider } from '@emotion/react';
import Route from '@route/Route';
import GLOBALSTYLE from '@styles/global';
import Theme from '@styles/theme';

const App = () => (
	<ThemeProvider theme={Theme}>
		<Global styles={GLOBALSTYLE} />
		<DetailStatusComponent />
	</ThemeProvider>
);

export default App;
