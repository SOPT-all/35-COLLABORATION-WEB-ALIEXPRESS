import { defaultBtnStyle, BtnSizeMap } from '@components/button/categoryItemBtn/CategoryItemBtnStyle';
import { ReactElement } from 'react';

interface CategoryItemBtnProps {
	btnText: string;
	onClick?: () => void;
	size: 'small' | 'medium';
	icon: ReactElement; // svg 컴포넌트, icon={<Icon />} 이런식으로 svg컴포넌트를 넘겨주기
}

const CategoryItemBtn = ({ btnText, onClick, size, icon }: CategoryItemBtnProps) => (
	<button css={[defaultBtnStyle, BtnSizeMap[size]]} onClick={onClick}>
		{icon}
		{btnText}
	</button>
);

export default CategoryItemBtn;
