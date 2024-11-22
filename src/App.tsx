import { Global, ThemeProvider } from '@emotion/react';
import Theme from './styles/theme';
import GLOBALSTYLE from './styles/global';
import { QrCodeComponent } from '@pages/orderDetail/sideBar/qrCode/qrCode';

const App = () => {
	return (
		<>
			<ThemeProvider theme={Theme}>
				<Global styles={GLOBALSTYLE} />
				<QrCodeComponent />
			</ThemeProvider>
		</>
	);
};

export default App;
