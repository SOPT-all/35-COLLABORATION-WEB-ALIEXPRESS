import { IcMessageBlack241 } from '@assets/icons';
import { InquiryBtnContainer, textStyle } from '@components/button/inquiryBtn/InquiryBtnStyle';

const InquiryBtn = () => (
	<div css={InquiryBtnContainer}>
		<IcMessageBlack241 />
		<div css={textStyle}>문의하기</div>
	</div>
);

export default InquiryBtn;
