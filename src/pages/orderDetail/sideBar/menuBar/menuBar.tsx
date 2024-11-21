import React from 'react';
import { menuComponentStyle, menuTitleStyle, inviteStyle, menuItemStyle } from './menuBar';
import { DividerSmall } from '@assets/icons';

export const MenuBarComponent = () => {
	const menuItems = [
		'개요',
		'주문&배송',
		'지불',
		'환불 & 반품',
		'설정',
		'배송지 주소',
		'문의 내역',
		'친구 초대',
		'고객센터',
		'보고서 관리',
		'피드백',
		'제안서 목록',
		'드롭쉬핑 센터',
		'페널티 정보',
	];

	return (
		<div css={menuComponentStyle}>
			<h2 css={menuTitleStyle}>계정</h2>
			<ul>
				{menuItems.map((item) => {
					if (item === '친구 초대') {
						return (
							<div>
								<DividerSmall />
								<li key={item} css={inviteStyle}>
									{item}
								</li>
								<DividerSmall />
							</div>
						);
					}
					return (
						<li key={item} css={menuItemStyle}>
							{item}
						</li>
					);
				})}
			</ul>
		</div>
	);
};
