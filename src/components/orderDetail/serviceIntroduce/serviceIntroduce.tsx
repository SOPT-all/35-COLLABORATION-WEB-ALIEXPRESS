import { DividerGray, IcArrowrightGray12 } from '@assets/icons';
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
	const contentData = SERVICE_INTRODUCE_MSG;
	return (
		<div css={serviceIntroduceContainer}>
			<header css={hedarTitleStyle}>
				<p>서비스 안내</p>
			</header>
			<section css={sectionContainerStyle}>
				{contentData.map((content, index) => (
					<div key={content.title}>
						<div css={contentContainerStyle}>
							{content.icon}
							<div css={contentBoxStyle}>
								<p css={contentTitleStyle}>{content.title}</p>
								<div css={contentLineStyle}>
									<p css={contentStyle}>{content.content}</p> <IcArrowrightGray12 />
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
