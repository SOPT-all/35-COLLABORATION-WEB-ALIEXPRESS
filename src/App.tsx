import OrderBox from '@components/orderBox/OrderBox';
import { Global, ThemeProvider } from '@emotion/react';

import GLOBALSTYLE from './styles/global';
import Theme from './styles/theme';

const App = () => (
	<ThemeProvider theme={Theme}>
		<Global styles={GLOBALSTYLE} />
		<OrderBox />
	</ThemeProvider>
);

export default App;
