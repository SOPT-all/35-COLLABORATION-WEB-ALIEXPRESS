import instance from '@apis/instance';

interface ProductResponse {
	productId: number;
	productImage: string;
	detail: string;
	priceOriginal: number;
	percent: number;
	priceDiscount: number;
	isCoupon: boolean;
	categoryName: string;
	reviewCount: number;
	rating: number;
}

interface RelatedProductsResponse {
	success: boolean;
	data: {
		products: ProductResponse[];
	};
	error: string | null;
}

const fetchRelatedProducts = async (productId: number): Promise<ProductResponse[]> => {
	const response = await instance.get<RelatedProductsResponse>(`/api/products/${productId}/related`);
	return response.data.data.products;
};

export default fetchRelatedProducts;