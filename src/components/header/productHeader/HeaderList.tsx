import { IcHamburgermenuBlack16, ImgVector7192 } from '@assets/icons/index';
import CategoryItemBtn from '@components/button/categoryItemBtn/CategoryItemBtn';
import { CATEGORIES_EMOJI, CATEGORY_LABELS } from '@constants/headerList';
import { Theme, css } from '@emotion/react';

export const ListLayoutStyle = css`
	position: absolute;
	top: 4.9rem;
	left: 13.45rem;
	display: flex;
	flex-direction: column;
	gap: 0;
	align-items: center;
	justify-content: center;
`;

export const ListContainerStyle = (theme: Theme) => css`
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
	padding: 0 0.1rem 0.6rem 0.6rem;

	background-color: ${theme.colors.white};
	border-radius: 9px;
`;

export const ScrollStyle = (theme: Theme) => css`
	height: 38.4rem;
	overflow: hidden scroll;

	/* 스크롤바 스타일링 */
	&::-webkit-scrollbar {
		width: 0.4rem;
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${theme.colors.gray4};
		border-radius: 999px;
	}
`;

export const ListTitleStyle = (theme: Theme) => css`
	display: flex;
	${theme.fonts.kor.bodyBold13}
	gap: 0.6rem;
	padding: 1.2rem 9.425rem 1.2rem 0.575rem;

	white-space: nowrap;
`;
const CategoryList: React.FC = () => (
	<div css={ListLayoutStyle}>
		<ImgVector7192 />
		<div css={ListContainerStyle}>
			<div css={ListTitleStyle}>
				<IcHamburgermenuBlack16 />
				<p>모든 카테고리</p>
			</div>
			<div css={ScrollStyle}>
				{CATEGORY_LABELS.map((label, index) => {
					const IconComponent = CATEGORIES_EMOJI[index];
					return <CategoryItemBtn key={label} btnText={label} size="medium" icon={<IconComponent />} />;
				})}
			</div>
		</div>
	</div>
);

export default CategoryList;
