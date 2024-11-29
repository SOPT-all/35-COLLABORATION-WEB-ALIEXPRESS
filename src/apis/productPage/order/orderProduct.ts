import instance from '@apis/instance';

const fetchOrderProduct = async (productId: number) => {
	const response = await instance.post(`/api/order`, {
		productId,
	});

	return response.data;
};

export default fetchOrderProduct;
