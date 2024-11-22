import { ImgProfile30, ImgVector7192 } from '@assets/icons/index';
import CategoryItemBtn from '@components/button/categoryItemBtn/CategoryItemBtn';
import {
	MyLayoutStyle,
	MyContainerStyle,
	MyWrapperStyle,
	infoStyle,
	mFontStyle,
	bFontStyle,
	mFontColorStyle,
	dividerStyle,
} from '@components/header/productHeader/MyListStyle';
import { MY_CATEGORIES } from '@constants/myList';

const MyList = () => (
	<div css={MyLayoutStyle}>
		<ImgVector7192 />
		<div css={MyContainerStyle}>
			<section css={MyWrapperStyle}>
				<ImgProfile30 />
				<div css={infoStyle}>
					<p css={mFontStyle}>환영합니다</p>
					<p css={bFontStyle}>데2걸</p>
					<p css={[mFontStyle, mFontColorStyle]}>로그아웃</p>
				</div>
			</section>
			<div css={dividerStyle} />
			<section>
				{MY_CATEGORIES.map(({ icon: IconComponent, label }) => (
					<CategoryItemBtn key={label} btnText={label} size="small" icon={<IconComponent />} />
				))}
			</section>
		</div>
	</div>
);

export default MyList;
