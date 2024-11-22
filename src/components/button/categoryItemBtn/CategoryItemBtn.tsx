import { ReactElement } from 'react';

import { defaultBtnStyle, btnSizeMap } from './CategoryItemBtnStyle';

interface CategoryItemBtnProps {
	btnText: string;
	onClick?: () => void;
	size: 'small' | 'medium';
	icon: ReactElement<React.SVGProps<SVGSVGElement>>;
}

const CategoryItemBtn = ({ btnText, onClick, size, icon }: CategoryItemBtnProps) => (
	<button type="button" css={[defaultBtnStyle, btnSizeMap[size]]} onClick={onClick}>
		{icon}
		{btnText}
	</button>
);

export default CategoryItemBtn;
