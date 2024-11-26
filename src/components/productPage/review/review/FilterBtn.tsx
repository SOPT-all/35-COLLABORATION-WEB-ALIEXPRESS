import { IcArrowbottomGray12 } from '@assets/icons/index';
import {
	fontStyle,
	FilterBtnContainer,
	dropDownLayoutStyle,
	listStyle,
} from '@components/productPage/review/review/FilterBtnStyle';
import { useState } from 'react';

const FilterBtn = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div css={fontStyle}>
			<div css={FilterBtnContainer} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
				<p>최근 작성된 리뷰</p>
				<IcArrowbottomGray12 />
			</div>

			{isHovered && (
				<div css={dropDownLayoutStyle}>
					<p css={listStyle}>최근 작성된 리뷰</p>
					<p css={listStyle}>추천 리뷰</p>
					<p css={listStyle}>재구매 리뷰</p>
				</div>
			)}
		</div>
	);
};

export default FilterBtn;
