import instance from '@apis/instance';

interface OrderResponse {
	productId: number;
	productImage: string;
	detail: string;
	price: number;
	quantity: number;
}

interface OrderHistoryResponse {
	success: boolean;
	data: OrderResponse;
	error: string | null;
}

const fetchOrders = async (): Promise<OrderHistoryResponse> => {
	const response = await instance.get<OrderHistoryResponse>(`/api/orders`);
	return response.data;
};

export default fetchOrders;
