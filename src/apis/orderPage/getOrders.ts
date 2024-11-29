import { useQuery } from '@tanstack/react-query';

import fetchOrders from './orderQueries';

const useOrders = (productId: number) =>
	useQuery({
		queryKey: ['orders', productId],
		queryFn: () => fetchOrders(),
	});

export default useOrders;