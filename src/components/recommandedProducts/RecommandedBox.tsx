import RecommanedBtn from '@components/button/recommendBtn/RecommanedBtn';
import ContactBtn from '@components/button/contactBtn/ContactBtn';
import {
	contentLayout,
	flexBoxStyle,
	lineStyle,
	recommandedBoxContainer,
	subTextBoxStyle,
	subTextStyle,
	titleTextStyle,
} from '@components/recommandedProducts/RecommandedBoxStyle';

const RecommandedBox = () => (
	<section css={recommandedBoxContainer}>
		<div css={contentLayout}>
			<div css={flexBoxStyle}>
				<RecommanedBtn /> <p css={titleTextStyle}>Toocki Flagship Direct Store</p>
			</div>
			<div css={subTextBoxStyle}>
				<p css={subTextStyle}>98.3%가 긍정적 평가</p>
				<div css={lineStyle} />
				<p css={subTextStyle}>100,000+ 개 판매 완료</p>
			</div>
		</div>
		<ContactBtn />
	</section>
);

export default RecommandedBox;
