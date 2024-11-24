import { IcDetailedstatusDotDefault, IcDetailedstatusDotVarient } from '@assets/icons';
import { ORDER_STATUS } from '@constants/orderStatusList';

import {
	dateStringStyle,
	stepMessageStringStyle,
	headerStringStyle,
	deliveryStatusContainserStyle,
	statusNameStringStyle,
	firstStringStyle,
	frameTitleStyle,
	titleDateStringStyle,
	deliveryStatusCardStyle,
	frameDetailStyle,
	frameDetailContentStyle,
	frameContentStyle,
} from './detailStatusStyle';

const DetailStatusComponent = () => {
	const statuses = Object.values(ORDER_STATUS);
	return (
		<div css={deliveryStatusContainserStyle}>
			<header css={headerStringStyle}>
				<p>상세 현황</p>
			</header>
			<div css={deliveryStatusCardStyle}>
				{statuses.map((status, index) => (
					<div css={frameContentStyle}>
						<div css={frameTitleStyle}>
							<p css={titleDateStringStyle}>
								{`${status.steps[status.steps.length - 1].month}월 ${status.steps[status.steps.length - 1].day}일`}
								<br />
								{status.steps[status.steps.length - 1].time}
							</p>
							{index === 0 ? <IcDetailedstatusDotVarient /> : <IcDetailedstatusDotDefault />}
							<p css={[statusNameStringStyle, index === 0 && firstStringStyle]}>{status.name}</p>
						</div>
						<ul css={frameDetailStyle}>
							{status.steps.map((step) => (
								<li css={frameDetailContentStyle}>
									<p css={stepMessageStringStyle}>{step.message}</p>
									<p css={dateStringStyle}>{`${step.month}월 ${step.day}일 ${step.time}`}</p>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
};

export default DetailStatusComponent;
