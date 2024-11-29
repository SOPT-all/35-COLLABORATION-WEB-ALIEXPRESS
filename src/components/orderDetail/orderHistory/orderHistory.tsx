import useOrders from '@apis/orderPage/orderQueries';
import { IcArrowrightGray12, IcChatBlack24, IcArrowbottomGray12, IcCameraBlack24 } from '@assets/icons';
import OutlineTextBtn from '@components/button/outlineTextBtn/OutlineTextBtn';
import MESSAGE from '@constants/errorMessages';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

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

const OrderHistory = () => {
	const { data, error } = useOrders();
	const navigate = useNavigate();

	if (error) {
		const axiosError = error as AxiosError<{ error: { message: string } }>;
		const errorMessage = axiosError.response?.data?.error?.message || MESSAGE.UNKNOWN_ERROR;
		console.log(errorMessage);
	}

	const handleProductTitleClick = () => {
		navigate('/');
	};

	const priceSum = (data?.data?.price ?? 0) * (data?.data?.quantity ?? 0);

	return (
		<div css={orderHistoryContainerStyle}>
			<header css={headerStyle}>주문 내역</header>
			<div css={storeNameContainerStyle}>
				<p css={storeNameStyle}>Toocki Flagship Direct store</p>
				<IcArrowrightGray12 />
				<IcChatBlack24 />
			</div>
			<div css={productContentStyle}>
				<div css={productImageStyle}>
					<img src={data?.data.productImage} alt="상품 이미지" />
					<IcCameraBlack24 />
				</div>
				<div css={productInfoContainerStyle}>
					<div css={productInfoStyle}>
						<p css={productTitleStyle} onClick={handleProductTitleClick}>
							{data?.data.detail}
						</p>
						<p>Clear</p>
						<div css={productPriceStyle}>
							<p>￦{data?.data.price.toLocaleString()}</p>
							<p>x{data?.data.quantity}</p>
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
						<p>￦{priceSum.toLocaleString()}</p>
						<IcArrowbottomGray12 />
					</div>
				</div>
				<div css={costRowStyle}>
					<p css={costLabelStyle}>총 금액</p>
					<p css={costBoldLabelStyle}>￦230,202</p>
				</div>
			</div>
		</div>
	);
};

export default OrderHistory;
