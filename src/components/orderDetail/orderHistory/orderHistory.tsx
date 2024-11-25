import { IcArrowrightGray12, IcChatBlack24, IcArrowbottomGray12, IcCameraBlack24 } from '@assets/icons';
import productImage from '@assets/images/img_purchasedproduct_113.png';
import OutlineTextBtn from '@components/button/outlineTextBtn/OutlineTextBtn';
import ORDER_HISTORYT from '@constants/orderHisotry';
import {
	orderHistoryContainerStyle,
	headerStyle,
	storeNameContainerStyle,
	storeNameStyle,
	productContentStyle,
	productImageStyle,
	productInfoContainerStyle,
	productInfoStyle,
	productTitleStyle,
	productPriceStyle,
	blueInfoStyle,
	buttonContainerStyle,
	productCostStyle,
	costRowStyle,
	costLabelStyle,
	costValueStyle,
	costGrayLabelStyle,
	costBoldLabelStyle,
} from './orderHistoryStyle';

const OrderHistory = () => (
	<div css={orderHistoryContainerStyle}>
		<header css={headerStyle}>주문 내역</header>
		<div css={storeNameContainerStyle}>
			<p css={storeNameStyle}>Toocki Flagship Direct store</p>
			<IcArrowrightGray12 />
			<IcChatBlack24 />
		</div>
		<div css={productContentStyle}>
			<div css={productImageStyle}>
				<img src={productImage} alt="상품 이미지" />
				<IcCameraBlack24 />
			</div>
			<div css={productInfoContainerStyle}>
				<div css={productInfoStyle}>
					<p css={productTitleStyle}>{ORDER_HISTORYT.detail}</p>
					<p>Clear</p>
					<div css={productPriceStyle}>
						<p>￦1,358</p>
						<p>x{ORDER_HISTORYT.quantity}</p>
					</div>
				</div>
				<p css={blueInfoStyle}>빠른 배송 · 무료 반품 · 배송 약속</p>
			</div>
			<div css={buttonContainerStyle}>
				<OutlineTextBtn btnText="장바구니에 담기" size="medium" />
				<OutlineTextBtn btnText="환불/반품" size="medium" />
				<OutlineTextBtn btnText="영수증 보기" size="medium" />
			</div>
		</div>
		<div css={productCostStyle}>
			<div css={costRowStyle}>
				<p css={costGrayLabelStyle}>합계</p>
				<div css={costValueStyle}>
					<p>￦{ORDER_HISTORYT.price}</p>
					<IcArrowbottomGray12 />
				</div>
			</div>
			<div css={costRowStyle}>
				<p css={costLabelStyle}>총 금액</p>
				<p css={costBoldLabelStyle}>￦1,202</p>
			</div>
		</div>
	</div>
);

export default OrderHistory;
