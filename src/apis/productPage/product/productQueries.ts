import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import fetchRelatedProducts from './getProduct';

interface ApiError {
	message: string;
}

const useRelatedProducts = (productId: number) => {
	return useQuery({
		queryKey: ['relatedProducts', productId],
		queryFn: () => fetchRelatedProducts(productId),
		initialData: [],
	});
};

export default useRelatedProducts;
