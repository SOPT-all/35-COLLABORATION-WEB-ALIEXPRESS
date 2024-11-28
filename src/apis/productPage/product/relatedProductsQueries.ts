import { useQuery } from '@tanstack/react-query';
import fetchRelatedProducts from './getRelatedProducts';

const useRelatedProducts = (productId: number) => {
	return useQuery({
		queryKey: ['relatedProducts', productId],
		queryFn: () => fetchRelatedProducts(productId),
		initialData: [],
	});
};

export default useRelatedProducts;
