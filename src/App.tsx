import { PurchaseInfoComponent } from '@components/orderDetail/orderInfo/purchaseInfo/purchaseInfo';
import { Global, ThemeProvider } from '@emotion/react';
import Route from '@route/Route';
import GLOBALSTYLE from '@styles/global';
import Theme from '@styles/theme';

const App = () => (
	<ThemeProvider theme={Theme}>
		<Global styles={GLOBALSTYLE} />
		<PurchaseInfoComponent />
	</ThemeProvider>
);

export default App;
