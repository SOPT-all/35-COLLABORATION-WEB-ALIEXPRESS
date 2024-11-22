import {
	IcNoteBlack12,
	IcCouponBlack12,
	IcFvrBlack12,
	IcPaymentBlack12,
	IcMessageBlack12,
	IcCoinBlack12,
} from '@assets/icons/index';

export const MY_CATEGORIES = Object.freeze([
	{
		icon: IcNoteBlack12,
		label: '주문 & 배송',
	},
	{
		icon: IcCouponBlack12,
		label: '내 쿠폰',
	},
	{
		icon: IcFvrBlack12,
		label: '위시리스트',
	},
	{
		icon: IcPaymentBlack12,
		label: '결제',
	},
	{
		icon: IcMessageBlack12,
		label: '문의 내역 (31)',
	},
	{
		icon: IcCoinBlack12,
		label: '내 코인',
	},
] as const);
