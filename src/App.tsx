import { Global, ThemeProvider } from '@emotion/react';
import Route from '@route/Route';
import GLOBALSTYLE from '@styles/global';
import Theme from '@styles/theme';
import OrderHistory from '@components/orderDetail/orderHistory/orderHistory';

const App = () => (
	<ThemeProvider theme={Theme}>
		<Global styles={GLOBALSTYLE} />
		<OrderHistory />
	</ThemeProvider>
);

export default App;
