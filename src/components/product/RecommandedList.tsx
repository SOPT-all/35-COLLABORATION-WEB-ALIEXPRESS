import { IcArrowrightGray12 } from '@assets/icons';
import { RecommandedListContainer, TitleLayout } from '@components/product/RecommandedListStyle';

const RecommandedList = () => (
	<article css={RecommandedListContainer}>
		<title css={TitleLayout}>
			상점 내 추천 상품
			<IcArrowrightGray12 />
		</title>
	</article>
);

export default RecommandedList;
