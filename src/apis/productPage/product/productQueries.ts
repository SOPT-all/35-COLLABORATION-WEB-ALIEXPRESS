import fetchProduct from '@apis/productPage/product/getProduct';
import dummyProductResponse from '@constants/dummyProductResponse';
import { useQuery } from '@tanstack/react-query';

const useProductDetail = (productId: number) =>
	useQuery({
		queryKey: ['product', productId],
		queryFn: () => fetchProduct(productId),
		initialData: dummyProductResponse, // 더미데이터를 initialData로 설정해 서버 요청 실패시에도 해당 데이터로 유지하도록 설정
	});

export default useProductDetail;
