import instance from '@apis/instance';
import { AxiosError } from 'axios';

export interface Review {
	reviewId: number;
	username: string;
	rating: number;
	isMonth: boolean;
	contentKorean: string;
	contentOriginal: string;
	reviewImage: string;
	usefulCount: number;
	recommendCount: number;
	likeCount: number;
}

export interface GetReviewResponse {
	success: boolean;
	data: {
		goodReviews: Review[];
		badReviews: Review[];
	};
	error: null | string;
}

export const getReview = async (productId: number): Promise<GetReviewResponse> => {
	try {
		const response = await instance.get<GetReviewResponse>(`/products/${productId}/reviews`); // instance 사용
		return response.data;
	} catch (error) {
		if (error instanceof AxiosError) {
			throw error.response?.data || new Error('An error occurred');
		}
		throw error;
	}
};
