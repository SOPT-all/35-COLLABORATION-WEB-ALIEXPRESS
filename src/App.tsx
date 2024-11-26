import { Global, ThemeProvider } from '@emotion/react';
import Route from '@route/Route';
import GLOBALSTYLE from '@styles/global';
import Theme from '@styles/theme';
import { OrderInfoComponent } from '@components/orderDetail/orderInfo/orderInfo';

const App = () => (
	<ThemeProvider theme={Theme}>
		<Global styles={GLOBALSTYLE} />
		<OrderInfoComponent />
	</ThemeProvider>
);

export default App;
