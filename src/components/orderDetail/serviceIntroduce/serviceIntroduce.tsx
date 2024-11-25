import { IcBoxBlack24, IcReturnBlack24, IcHandshakeBlack24, DividerGray, IcArrowrightGray12 } from '@assets/icons';
import SERVICE_INTRODUCE_MSG from '@constants/serviceIntroduceMsg';

import {
	serviceIntroduceContainer,
	hedarTitleStyle,
	contentTitleStyle,
	contentStyle,
	sectionContainerStyle,
	contentContainerStyle,
	contentBoxStyle,
	contentLineStyle,
	diverStyle,
} from './serviceIntroduceStyle';

const ServiceIntroduce = () => {
	const contentData = [
		{ icon: <IcBoxBlack24 />, message: SERVICE_INTRODUCE_MSG[0] },
		{ icon: <IcReturnBlack24 />, message: SERVICE_INTRODUCE_MSG[1] },
		{ icon: <IcHandshakeBlack24 />, message: SERVICE_INTRODUCE_MSG[2] },
	];

	return (
		<div css={serviceIntroduceContainer}>
			<header css={hedarTitleStyle}>
				<p>서비스 안내</p>
			</header>
			<section css={sectionContainerStyle}>
				{contentData.map((content, index) => (
					<div key={content.message.title}>
						<div css={contentContainerStyle}>
							{content.icon}
							<div css={contentBoxStyle}>
								<p css={contentTitleStyle}>{content.message.title}</p>
								<div css={contentLineStyle}>
									<p css={contentStyle}>{content.message.content}</p> <IcArrowrightGray12 />
								</div>
							</div>
						</div>
						{index < contentData.length - 1 && <DividerGray css={diverStyle} />}
					</div>
				))}
			</section>
		</div>
	);
};

export default ServiceIntroduce;
