import { ImgProfile30 } from '@assets/icons/index';
import CategoryItemBtn from '@components/button/categoryItemBtn/CategoryItemBtn';
import {
	MyLayout,
	MyContainerStyle,
	MyWrapperStyle,
	mFontStyle,
	bFontStyle,
	mFontColorStyle,
	dividerStyle,
} from '@components/header/productHeader/MyListStyle';
import { CATEGORIES_EMOJI, MY_LABELS } from '@constants/myList';

const MyList = () => (
	<div css={MyLayout}>
		<section css={MyContainerStyle}>
			<ImgProfile30 />
			<div css={MyWrapperStyle}>
				<p css={mFontStyle}>환영합니다</p>
				<p css={bFontStyle}>데2걸</p>
				<p css={[mFontStyle, mFontColorStyle]}>로그아웃</p>
			</div>
		</section>
		<div css={dividerStyle} />
		<section>
			{MY_LABELS.map((label, index) => {
				const IconComponent = CATEGORIES_EMOJI[index];
				return <CategoryItemBtn key={label} btnText={label} size="small" icon={<IconComponent />} />;
			})}
		</section>
	</div>
);

export default MyList;
