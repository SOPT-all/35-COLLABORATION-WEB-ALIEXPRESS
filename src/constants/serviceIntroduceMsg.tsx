import { IcBoxBlack24, IcReturnBlack24, IcHandshakeBlack24 } from '@assets/icons';

const SERVICE_INTRODUCE_MSG = [
	{
		icon: <IcBoxBlack24 />,
		title: '배송 안내 - 해외 배송 상품 구매시',
		content:
			'배송 지연 시 ₩1,300 쿠폰 지급 · 운송 중 분실된 상품 환불 처리 · 손상된 상품 환불 처리 ·  30일 이내 미배송 시 환불',
	},
	{
		icon: <IcReturnBlack24 />,
		title: '무료 반품',
		content:
			"상품에 만족하지 않으신다면 상세페이지에 '무료 반품' 태그가 있는 상품에 경우 주문 접수 후 90일 내 반품이 가능합니다. 각 주문 건에 대한 첫 반품은 무료로 이용하실 수 있...",
	},
	{
		icon: <IcHandshakeBlack24 />,
		title: '구매자 보호',
		content: "‘구매자 보호'에 따라 고객님의 모든 상품 주문 과정이 보호됩니다.",
	},
] as const;

export default SERVICE_INTRODUCE_MSG;
