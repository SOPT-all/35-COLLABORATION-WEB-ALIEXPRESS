import Footer from '@components/footer/Footer';
import ProductHeader from '@components/header/productHeader/ProductHeader';
import { layoutContainer, productMainStyle } from 'layout/layoutStyle';
import { ReactNode } from 'react';

interface LayoutProps {
	children: ReactNode;
}

const ProductLayout = ({ children }: LayoutProps) => (
	<div css={layoutContainer}>
		<ProductHeader />
		<main css={productMainStyle}>{children}</main>
		<Footer />
	</div>
);

export default ProductLayout;
