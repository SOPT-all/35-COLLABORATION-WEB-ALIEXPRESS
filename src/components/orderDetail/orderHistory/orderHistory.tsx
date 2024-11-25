import { IcArrowrightGray12, IcChatBlack24, IcArrowbottomGray12, IcCameraBlack24 } from '@assets/icons';
import productImage from '@assets/images/img_purchasedproduct_113.png';
import OutlineTextBtn from '@components/button/outlineTextBtn/OutlineTextBtn';

import {
	orderHistoryContainerStyle,
	headerContainerStyle,
	storeNameStyle,
	productContentStyle,
	buttonsStyle,
	productTitleStyle,
	productPriceStyle,
	productInfoStyle,
	productInfoContainerStyle,
	imageContentStyle,
	blueInfoContentStyle,
	iconStyle,
	productCostStyle,
	totalCostStyle,
	productFirstTotalCostStyle,
	productSecondTotalCostStyle,
	productCostKorStyle,
	totalCostEngStyle,
    totalCostEngStyle2
} from './orderHistoryStyle';

const OrderHistory = () => (
	<div css={orderHistoryContainerStyle}>
		<header css={headerContainerStyle}>
			<p>주문 내역</p>
		</header>
		<div css={storeNameStyle}>
			<p>Toocki Flagship Direct store</p>
			<IcArrowrightGray12 />
			<IcChatBlack24 />
		</div>
		<div css={productContentStyle}>
			<div css={imageContentStyle}>
				<img src={productImage} alt="상품 이미지" />
				<IcCameraBlack24 css={iconStyle} />
			</div>
			<div css={productInfoContainerStyle}>
				<div css={productInfoStyle}>
					<p css={productTitleStyle}>
						소프트 실리콘 충전기 케이블 와인더, 고속 충전 케이블 보호대 슬리브, 애플 아이폰 데이터 코드, 투명 케이스...
					</p>
					<p>Clear</p>
					<div css={productPriceStyle}>
						<p>￦1,358</p>
						<p>x1</p>
					</div>
				</div>
				<div css={blueInfoContentStyle}>
					<p>빠른 배송 · 무료 반품 · 배송 약속</p>
				</div>
			</div>
			<div css={buttonsStyle}>
				<OutlineTextBtn btnText="장바구니에 담기" size="medium" />
				<OutlineTextBtn btnText="환불/반품" size="medium" />
				<OutlineTextBtn btnText="영수증 보기" size="medium" />
			</div>
		</div>
		<div css={productCostStyle}>
			<div css={productFirstTotalCostStyle}>
				<p css={productCostKorStyle}>합계</p>
				<div css={totalCostStyle}>
					<p css={totalCostEngStyle}>￦1,358</p>
					<IcArrowbottomGray12 />
				</div>
			</div>
			<div css={productSecondTotalCostStyle}>
				<p css={productCostKorStyle}>총 금액</p>
				<p css={totalCostEngStyle2}>￦1,202</p>
			</div>
		</div>
	</div>
);

export default OrderHistory;
