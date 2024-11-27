import { useState } from 'react';
import { menuComponentStyle, menuTitleStyle, inviteStyle, selectedMenuItemStyle } from './menuBarStyle';
import { DividerSmall } from '@assets/icons';
import MENU_ITEMS from '@components/constants/menuItems';

export const MenuBarComponent = () => {
	const [currentPage, setCurrentPage] = useState('주문 & 배송');

	return (
		<div css={menuComponentStyle}>
			<h2 css={menuTitleStyle}>계정</h2>
			<ul>
				{MENU_ITEMS.map((item) => {
					if (item === '친구 초대') {
						return (
							<nav key={item}>
								<DividerSmall />
								<li
									key={item}
									css={[inviteStyle, item === currentPage && selectedMenuItemStyle]}
									onClick={() => setCurrentPage(item)}>
									{item}
								</li>
								<DividerSmall />
							</nav>
						);
					}
					return (
						<li
							key={item}
							css={[inviteStyle, item === currentPage && selectedMenuItemStyle]}
							onClick={() => setCurrentPage(item)}>
							{item}
						</li>
					);
				})}
			</ul>
		</div>
	);
};
