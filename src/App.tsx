import { Global, ThemeProvider } from '@emotion/react';

import Route from '@route/Route';
import GLOBALSTYLE from '@styles/global';
import Theme from '@styles/theme';
import ProductRecommendComponent from '@components/orderDetail/productRecommend/productRecommend';

const App = () => (
	<ThemeProvider theme={Theme}>
		<Global styles={GLOBALSTYLE} />
		<ProductRecommendComponent />
	</ThemeProvider>
);

export default App;
