import { css } from '@emotion/react';
import { ReactNode } from 'react';

const layoutContainer = css`
	width: 136.5rem;
	margin: 0 auto;
	padding: 0 4.6rem;
`;

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => <div css={layoutContainer}>{children}</div>;

export default Layout;
