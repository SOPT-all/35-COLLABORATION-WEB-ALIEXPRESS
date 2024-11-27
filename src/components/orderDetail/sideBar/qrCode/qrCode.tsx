import qrCodeImg from '@assets/images/img_appapproachqr.png';
import { qrCodeComponentStyle, qrTitleStyle, qrCodeTextStyle, qrContentStyle, qrImageStyle } from './qrCodeStyle';

export const QrCodeComponent = () => {
	return (
		<div css={qrCodeComponentStyle}>
			<div css={qrCodeTextStyle}>
				<span css={qrTitleStyle}>AliExpress 모바일 앱</span>
				<span css={qrContentStyle}>언제 어디서든 검색해보세요!</span>
				<img src={qrCodeImg} alt="qr코드 이미지" css={qrImageStyle} />
				<span css={qrContentStyle}>스캔 또는 다운로드 클릭</span>
			</div>
		</div>
	);
};
