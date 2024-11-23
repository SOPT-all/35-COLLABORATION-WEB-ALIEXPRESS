import DeliveryStatusComponent from '@components/orderDetail/orderStatus/deliveryStauts/deliveryStatus';
import { Global, ThemeProvider } from '@emotion/react';
import Route from '@route/Route';
import GLOBALSTYLE from '@styles/global';
import Theme from '@styles/theme';

const App = () => (
	<ThemeProvider theme={Theme}>
		<Global styles={GLOBALSTYLE} />
		<DeliveryStatusComponent />
	</ThemeProvider>
);

export default App;
