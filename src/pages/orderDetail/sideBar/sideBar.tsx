import { MenuBarComponent } from './menuBar/menuBar';
import { QrCodeComponent } from './qrCode/qrCode';
import { sideBarComponentStyle, pathInfoStyle } from './sideBarStyle';

const pathRoutes = ['주문', '주문상세'];

const PathInfoComponent = () => {
	return (
		<>
			{pathRoutes.map((item, index) => (
				<span key={index}>
					<span>&nbsp;&gt;</span> <span className={index === pathRoutes.length - 1 ? 'last-item' : ''}>{item}</span>
				</span>
			))}
		</>
	);
};

export const SideBarComponent = () => {
	return (
		<div css={sideBarComponentStyle}>
			<div css={pathInfoStyle}>
				<span>홈</span>
				<PathInfoComponent />
			</div>
			<MenuBarComponent />
			<QrCodeComponent />
		</div>
	);
};
