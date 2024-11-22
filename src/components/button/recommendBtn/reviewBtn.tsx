import {
	IcGoodGray16,
	IcHandshakeGray16,
	IcCometGray16,
	IcGoodBlue16,
	IcHandshakeBlue16,
	IcCometBlue16,
} from '@assets/icons';
import { useState } from 'react';

import { flexStyle, btnStyleMap, countStyle } from './reviewBtnStyle';

interface ReviewBtnProps {
	type: 'useful' | 'recommend' | 'like';
	clickedCount: number;
}

function ReviewBtn({ type, clickedCount }: ReviewBtnProps) {
	const [isClicked, setIsClicked] = useState(false);
	const [count, setCount] = useState(clickedCount);
	const handleClick = (): void => {
		setCount(isClicked ? count - 1 : count + 1); // 클릭시 이미 클릭된 버튼이면 -1, 클릭이 안 됐던 버튼은 +1
		setIsClicked(!isClicked); // 버튼 클릭 상태 바꾸기
	};
	const formatCount = (value: number) => (value > 999 ? '999+' : value);
	const buttonType = {
		useful: {
			icon: isClicked ? <IcGoodBlue16 /> : <IcGoodGray16 />,
			btnText: '유용해요',
		},
		recommend: {
			icon: isClicked ? <IcCometBlue16 /> : <IcCometGray16 />,
			btnText: '추천해요',
		},
		like: {
			icon: isClicked ? <IcHandshakeBlue16 /> : <IcHandshakeGray16 />,
			btnText: '공감해요',
		},
	};
	const { icon, btnText } = buttonType[type];

	return (
		<button css={btnStyleMap[isClicked ? 'true' : 'false']} onClick={handleClick}>
			<div css={flexStyle}>
				{icon}
				<div>{btnText}</div>
				<div css={countStyle}>({formatCount(count)})</div>
			</div>
		</button>
	);
}

export default ReviewBtn;
