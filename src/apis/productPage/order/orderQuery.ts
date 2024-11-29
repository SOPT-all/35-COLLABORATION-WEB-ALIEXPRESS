import fetchOrderProduct from '@apis/productPage/order/orderProduct';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useOrderProduct = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: (productId: number) => fetchOrderProduct(productId),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['order'] }),
	});

	return { mutate: mutation.mutate };
};

export default useOrderProduct;
