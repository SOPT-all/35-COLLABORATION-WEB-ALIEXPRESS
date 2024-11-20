import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import OrderPage from '@pages/OrderPage';
import ProductPage from '@pages/ProductPage';
import NotFoundPage from '@pages/NotFoundPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <ProductPage />,
	},
	{
		path: '/order',
		element: <OrderPage />,
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
]);

const Route = () => <RouterProvider router={router} />;

export default Route;
