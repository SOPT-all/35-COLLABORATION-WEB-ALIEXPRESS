import { useQuery } from '@tanstack/react-query';

import { getReview, GetReviewResponse } from './getReview';

const useReviewQueries = ({ productId }: { productId: number }) => {
	const QUERY_KEY = {
		PRODUCT_REVIEW: 'review',
	};

	const { data, isError } = useQuery<GetReviewResponse>({
		queryKey: [QUERY_KEY.PRODUCT_REVIEW, productId],
		queryFn: () => getReview(productId),
	});

	return { data, isError };
};

export default useReviewQueries;
