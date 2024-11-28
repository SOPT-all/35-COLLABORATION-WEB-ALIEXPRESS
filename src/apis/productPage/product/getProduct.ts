import instance from '@apis/instance';
import ProductInfoType from 'types/ProductInfoType';

interface ProductResponse {
	success: boolean;
	data: ProductInfoType;
	error: string | null;
}

const fetchProduct = async (productId: number): Promise<ProductResponse> => {
	const response = await instance.get<ProductResponse>(`/api/products/${productId}`);
	return response.data;
};

export default fetchProduct;
