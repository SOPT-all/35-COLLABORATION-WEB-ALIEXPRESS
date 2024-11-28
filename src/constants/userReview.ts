import reviewImage from '@assets/images/img_review_4.png';

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

export const data = {
	goodReviews: [
		{
			reviewId: 1,
			username: '알리알리',
			rating: 4,
			isMonth: true,
			contentKorean:
				'아 이거 참 좋다 C8타입 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다',
			contentOriginal: 'Ah, this is so good',
			reviewImage,
			usefulCount: 123,
			recommendCount: 45,
			likeCount: 24,
		},
		{
			reviewId: 2,
			username: '훌라훌라',
			rating: 5,
			isMonth: false,
			contentKorean:
				'아 이거 참 좋다 C8타입 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다',
			contentOriginal: 'Ah, this is so good',
			reviewImage,
			usefulCount: 123,
			recommendCount: 45,
			likeCount: 24,
		},
		{
			reviewId: 3,
			username: '알리알리',
			rating: 4,
			isMonth: true,
			contentKorean:
				'아 이거 참 좋다 C8타입 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다',
			contentOriginal: 'Ah, this is so good',
			reviewImage,
			usefulCount: 123,
			recommendCount: 45,
			likeCount: 24,
		},
		{
			reviewId: 4,
			username: '훌라훌라',
			rating: 5,
			isMonth: true,
			contentKorean:
				'아 이거 참 좋다 C8타입 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다 아 이거 참 좋다',
			contentOriginal: 'Ah, this is so good',
			reviewImage,
			usefulCount: 123,
			recommendCount: 45,
			likeCount: 24,
		},
	],
	badReviews: [
		{
			reviewId: 5,
			username: '망망!',
			rating: 2,
			isMonth: true,
			contentKorean: '무슨 애기 옷이 왔어요',
			contentOriginal: "Oops, I've never bought baby clothes",
			reviewImage,
			usefulCount: 123,
			recommendCount: 45,
			likeCount: 24,
		},
		{
			reviewId: 6,
			username: '알리알리',
			rating: 1,
			isMonth: true,
			contentKorean: '사진이랑 다름',
			contentOriginal: 'What the?',
			reviewImage,
			usefulCount: 123,
			recommendCount: 45,
			likeCount: 24,
		},
		{
			reviewId: 7,
			username: '망망!',
			rating: 2,
			isMonth: true,
			contentKorean:
				'무슨 애기 옷이 왔어요 무슨 애기 옷이 왔어요 무슨 애기 옷이 왔어요 무슨 애기 옷이 왔어요 무슨 애기 옷이 왔어요 무슨 애기 옷이 왔어요 무슨 애기 옷이 왔어요 무슨 애기 옷이 왔어요',
			contentOriginal: "Oops, I've never bought baby clothes",
			reviewImage,
			usefulCount: 123,
			recommendCount: 45,
			likeCount: 24,
		},
		{
			reviewId: 8,
			username: '알리알리',
			rating: 1,
			isMonth: false,
			contentKorean: '사진이랑 다름',
			contentOriginal: 'What the?',
			reviewImage,
			usefulCount: 123,
			recommendCount: 45,
			likeCount: 24,
		},
	],
};

export const reviewNum = {
	total: 350,
	positive: 330,
	negative: 20,
};
