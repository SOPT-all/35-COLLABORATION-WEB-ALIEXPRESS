import { ImgGraph } from '@assets/icons/index';
import Level from '@components/productPage/review/reviewTop/Level';
import {
	cardLayout,
	cardWrapper,
	titleStyle,
	cardBox,
	svgStyle,
} from '@components/productPage/review/reviewTop/RatingServiceCardStyle';

const RatingServiceCard = () => (
	<div css={cardLayout}>
		<div css={cardWrapper}>
			<p css={titleStyle}>성능</p>
			<div css={cardBox}>
				<ImgGraph css={svgStyle({ width: 19 })} />
				<Level />
			</div>
		</div>

		<div css={cardWrapper}>
			<p css={titleStyle}>안전성</p>
			<div css={cardBox}>
				<ImgGraph css={svgStyle({ width: 21.2 })} />
				<Level />
			</div>
		</div>
		<div css={cardWrapper}>
			<p css={titleStyle}>A/S 서비스</p>
			<div css={cardBox}>
				<ImgGraph css={svgStyle({ width: 26.8 })} />
				<Level />
			</div>
		</div>
	</div>
);

export default RatingServiceCard;
