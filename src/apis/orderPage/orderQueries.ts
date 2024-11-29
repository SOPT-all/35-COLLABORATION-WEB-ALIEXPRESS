import instance from '@apis/instance';
import { AxiosError } from 'axios';

interface OrderResponse {
	productId: number;
	productImage: string;
	detail: string;
	price: number;
	quantity: number;
}

interface OrderHistoryResponse {
	success: boolean;
	data: OrderResponse[];
	error: string | null;
}

const fetchOrders = async (): Promise<OrderResponse[]> => {
	try {
		const response = await instance.get<OrderHistoryResponse>(`/api/orders`);
		return response.data.data;
	} catch (error) {
		if (error instanceof AxiosError) {
			throw error.response?.data || new Error('An error occurred');
		}
		throw error;
	}
};

export default fetchOrders;
