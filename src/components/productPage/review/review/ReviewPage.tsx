import { DividerMedium } from '@assets/icons/index';
import TextBtn from '@components/button/textBtn/TextBtn';
import FilterBtn from '@components/productPage/review/review/FilterBtn';
import Tab from '@components/productPage/review/review/Tab';
import TranslationBtn from '@components/productPage/review/review/TranslationBtn';
import { reviewContainer, flexStyle, commonBtnStyle } from '@components/productPage/review/review/ReviewPageStyle';
import { reviewNum } from '@constants/userReview';

const ReviewPage = () => (
	<div css={reviewContainer}>
		<div css={flexStyle}>
			<FilterBtn />
			<TranslationBtn />
		</div>
		<Tab total={reviewNum.total} positive={reviewNum.positive} negative={reviewNum.negative} />
		<div css={commonBtnStyle}>
			<TextBtn btnText="더보기" color="gray" size="medium" />
		</div>
		<DividerMedium />
	</div>
);

export default ReviewPage;
