import instance from '@apis/instance';

interface OrderResponse {
	productId: number;
	productImage: string;
	detail: string;
	price: number;
	quantity: number;
}

interface RelatedOrderResponse {
	success: boolean;
	data: OrderResponse[];
	error: string | null;
}

const fetchRelatedOrders = async (): Promise<OrderResponse[]> => {
	const response = await instance.get<RelatedOrderResponse>(`/api/orders`);
	return response.data.data;
};

export default fetchRelatedOrders;
