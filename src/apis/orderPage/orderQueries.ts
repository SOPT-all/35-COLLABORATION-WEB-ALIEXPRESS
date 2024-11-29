import { useQuery } from '@tanstack/react-query';

import fetchOrders from './getOrders';

const useOrders = () =>
	useQuery({
		queryKey: ['orders'],
		queryFn: () => fetchOrders(),
	});

export default useOrders;
