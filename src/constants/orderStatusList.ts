const ORDER_STATUS = {
	PAYMENT_COMPLETED: {
		name: '결제 완료',
		steps: [
			{
				message: '결제가 완료되었습니다.',
				month: 8,
				day: 21,
				time: '03:37',
			},
		],
	},
	INTERNATIONAL_SHIPPING: {
		name: '국제 운송',
		steps: [
			{
				message: '출발 배송업체에서 상품 수령 완료',
				month: 8,
				day: 22,
				time: '10:04',
			},
			{
				message: '출발 국가/지역 물류센터에서 출발',
				month: 8,
				day: 22,
				time: '10:08',
			},
			{
				message: '출발 국가의 공항 도착',
				month: 8,
				day: 23,
				time: '10:38',
			},
			{
				message: '1차 통관 시작',
				month: 8,
				day: 23,
				time: '14:43',
			},
			{
				message: '1차 통관 완료',
				month: 8,
				day: 23,
				time: '15:08',
			},
			{
				message: '출발 국가/지역에서 출발',
				month: 8,
				day: 23,
				time: '21:00',
			},
		],
	},
	DOMESTIC_ARRIVAL: {
		name: '국내 입고',
		steps: [
			{
				message: '목적지 공항 도착',
				month: 8,
				day: 24,
				time: '12:00',
			},
			{
				message: '세관에서 출발',
				month: 8,
				day: 27,
				time: '13:19',
			},
			{
				message: '통관 완료',
				month: 8,
				day: 27,
				time: '13:19',
			},
			{
				message: '세관 도착',
				month: 8,
				day: 27,
				time: '13:19',
			},
			{
				message: '2차 통관 시작',
				month: 8,
				day: 27,
				time: '13:19',
			},
			{
				message: '현지 배송회사 전달 완료',
				month: 8,
				day: 27,
				time: '13:21',
			},
		],
	},
	DOMESTIC_DELIVERY: {
		name: '국내 배송',
		steps: [
			{
				message: '목적지 국가/지역 물류센터 출발',
				month: 8,
				day: 27,
				time: '16:54',
			},
			{
				message: '목적지 국가/지역 물류센터 도착',
				month: 8,
				day: 28,
				time: '02:20',
			},
			{
				message: '배송 준비 중',
				month: 8,
				day: 28,
				time: '10:21',
			},
		],
	},
	DELIVERY_COMPLETED: {
		name: '배송 완료',
		steps: [
			{
				message: '배송이 완료되었습니다.',
				month: 8,
				day: 28,
				time: '10:29',
			},
		],
	},
} as const;

const LAST_STATUS = {
	name: '배송 완료',
	steps: {
		message: '배송이 완료되었습니다.',
		month: 8,
		day: 28,
		time: '10:29',
	},
} as const;

export { ORDER_STATUS, LAST_STATUS };
