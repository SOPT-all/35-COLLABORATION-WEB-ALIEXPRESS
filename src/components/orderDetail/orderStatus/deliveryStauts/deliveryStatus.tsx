import {
	CardDelieverStatus1,
	CardDelieverStatus2,
	CardDelieverStatus3,
	CardDelieverStatus4,
	CardDelieverStatus5,
	CardDelieverStatus6,
	CardDelieverFinalStatus1,
	CardDelieverFinalStatus2,
	CardDelieverFinalStatus3,
	CardDelieverFinalStatus4,
	CardDelieverFinalStatus5,
	CardDelieverFinalStatus6,
	IcArrowrightGray24,
} from '@assets/icons';
import { LAST_STATUS } from '@constants/orderStatusList';

import {
	headerStringStyle,
	textStringStyle,
	deliveryStatusContainserStyle,
	contentContainerStyle,
	textStatusContainerStyle,
	iconContainerStyle,
	eachIconContainerStyle,
	iconBoxStyle,
	currentSpanStyle,
	dateStatusContainerStyle,
	arrowContainerStyle
} from './deliveryStatusStyle';

type StatusName = '결제 완료' | '상품 준비' | '국제 운송' | '국내 입고' | '국내 배송' | '배송 완료';

const getIconComponent = (status: StatusName, currentStatus: StatusName) => {
	const isFinal = status === currentStatus;

	const iconMap = {
		'결제 완료': isFinal ? <CardDelieverFinalStatus1 /> : <CardDelieverStatus1 />,
		'상품 준비': isFinal ? <CardDelieverFinalStatus2 /> : <CardDelieverStatus2 />,
		'국제 운송': isFinal ? <CardDelieverFinalStatus3 /> : <CardDelieverStatus3 />,
		'국내 입고': isFinal ? <CardDelieverFinalStatus4 /> : <CardDelieverStatus4 />,
		'국내 배송': isFinal ? <CardDelieverFinalStatus5 /> : <CardDelieverStatus5 />,
		'배송 완료': isFinal ? <CardDelieverFinalStatus6 /> : <CardDelieverStatus6 />,
	};

	return iconMap[status] || null;
};

const statusList: StatusName[] = ['결제 완료', '상품 준비', '국제 운송', '국내 입고', '국내 배송', '배송 완료'];

const DeliveryStatusComponent = () => {
	const currentStatus = LAST_STATUS.name;
	const isCurrentStatus = (status: StatusName) => currentStatus === status;

	return (
		<div css={deliveryStatusContainserStyle}>
			<header css={headerStringStyle}>
				<p>배송 현황</p>
			</header>
			<div css={contentContainerStyle}>
				<div css={textStatusContainerStyle}>
					<div css={dateStatusContainerStyle}>
						<p>
							{LAST_STATUS.steps.month}월 {LAST_STATUS.steps.day}일 {LAST_STATUS.steps.time}
						</p>
					</div>
					<div>
						<p css={textStringStyle}>{LAST_STATUS.steps.message}</p>
					</div>
				</div>
				<div css={iconContainerStyle}>
					<div css={eachIconContainerStyle}>
						{statusList.map((status, index) => (
							<>
								<div css={[iconBoxStyle, isCurrentStatus(status) && currentSpanStyle]} key={status}>
									{getIconComponent(status, currentStatus)}
									<span>{status}</span>
								</div>
								{index !== 2 && index < statusList.length - 1 && (
									<div css={arrowContainerStyle}>
										<IcArrowrightGray24 />
									</div>
								)}
							</>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeliveryStatusComponent;
