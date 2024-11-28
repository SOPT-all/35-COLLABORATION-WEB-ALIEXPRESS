import { Global, ThemeProvider } from '@emotion/react';

import Route from '@route/Route';
import GLOBALSTYLE from '@styles/global';
import Theme from '@styles/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => (
	<QueryClientProvider client={queryClient}>
		<ThemeProvider theme={Theme}>
			<Global styles={GLOBALSTYLE} />
			<Route />
		</ThemeProvider>
	</QueryClientProvider>
);

export default App;
