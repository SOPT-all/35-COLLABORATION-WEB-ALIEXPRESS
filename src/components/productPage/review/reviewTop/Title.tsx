import { IcHelpGray20 } from '@assets/icons/index';
import {
	relativeStyle,
	titleContainer,
	fontKoStyle,
	fontEnStyle,
	toolStyle,
} from '@components/productPage/review/reviewTop/TitleStyle';
import { useState } from 'react';

const Title = () => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => setIsHovered(true);
	const handleMouseLeave = () => setIsHovered(false);
	const TOOL_MSG = '별점 4개 이상은 긍정 리뷰, 별점 3개 이하는 비판 리뷰로 분류했습니다.';

	return (
		<div css={[titleContainer, relativeStyle]}>
			<p css={fontKoStyle}>리뷰</p>
			<p css={fontEnStyle}>(497)</p>
			<IcHelpGray20 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
			{isHovered && <div css={toolStyle}>{TOOL_MSG}</div>}
		</div>
	);
};

export default Title;
