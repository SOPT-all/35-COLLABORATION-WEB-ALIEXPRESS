import Footer from '@components/footer/Footer';
import OrderHeader from '@components/header/orderHeader/OrderHeader';
import { ReactNode } from 'react';

import { orderLayoutContainerStyle, orderLayoutStyle } from './orderLayoutStyle';

interface LayoutProps {
	children: ReactNode;
}

const OrderLayout = ({ children }: LayoutProps) => (
	<div css={orderLayoutContainerStyle}>
		<OrderHeader />
		<main css={orderLayoutStyle}>{children}</main>
		<Footer />
	</div>
);

export default OrderLayout;
