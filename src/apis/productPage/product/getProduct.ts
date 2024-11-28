import instance from '@apis/instance';
interface ProductInfoType {
	productId: number;
	productImage: string;
	detail: string;
	priceOriginal: number;
	priceDiscount: number;
	percent: number;
	isCoupon: boolean;
	categoryName: string;
	reviewCount: number;
	rating: number;
}

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
