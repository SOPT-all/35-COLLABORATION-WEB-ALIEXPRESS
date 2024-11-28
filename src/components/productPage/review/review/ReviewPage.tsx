import { DividerMedium } from '@assets/icons/index';
import TextBtn from '@components/button/textBtn/TextBtn';
import FilterBtn from '@components/productPage/review/review/FilterBtn';
import OriginalTextBtn from '@components/productPage/review/review/OriginalTextBtn';
import { reviewContainer, flexStyle, commonBtnStyle } from '@components/productPage/review/review/ReviewPageStyle';
import Tab from '@components/productPage/review/review/Tab';
import { reviewNum } from '@constants/userReview';
import { useState } from 'react';

const ReviewPage = () => {
	const [isOriginal, setIsOriginal] = useState(false);

	const handleShowOriginalText = () => {
		setIsOriginal((prev) => !prev);
	};
	return (
		<div css={reviewContainer}>
			<div css={flexStyle}>
				<FilterBtn />
				<OriginalTextBtn onClick={handleShowOriginalText} />
			</div>
			<Tab
				total={reviewNum.total}
				positive={reviewNum.positive}
				negative={reviewNum.negative}
				isOriginal={isOriginal}
			/>
			<div css={commonBtnStyle}>
				<TextBtn btnText="더보기" color="gray" size="medium" />
			</div>
			<DividerMedium />
		</div>
	);
};

export default ReviewPage;
