/* eslint-disable jsx-a11y/alt-text */
import { frameImg } from '@assets/images/frame';
import { cardLayout, cardWrapper, fontStyle } from '@components/productPage/review/reviewTop/RatingCountCardStyle';
import RenderStars from '@components/productPage/review/reviewTop/RenderStar';

const RatingCountCard = () => (
	<div css={[cardLayout]}>
		<div css={cardWrapper}>
			<RenderStars rating={5} />
			<img src={frameImg[0]} />
			<p css={fontStyle}>454</p>
		</div>
		<div css={cardWrapper}>
			<RenderStars rating={4} />
			<img src={frameImg[1]} />
			<p css={fontStyle}>22</p>
		</div>
		<div css={cardWrapper}>
			<RenderStars rating={3} />
			<img src={frameImg[2]} />
			<p css={fontStyle}>11</p>
		</div>
		<div css={cardWrapper}>
			<RenderStars rating={2} />
			<img src={frameImg[3]} />
			<p css={fontStyle}>2</p>
		</div>
		<div css={cardWrapper}>
			<RenderStars rating={1} />
			<img src={frameImg[4]} />
			<p css={fontStyle}>8</p>
		</div>
	</div>
);
export default RatingCountCard;
