import detailImg from '@assets/images/img_detail_xl.png';
import TextBtn from '@components/button/textBtn/TextBtn';
import InfoTable from '@components/infoTable/InfoTable';
import {
	agencyServiceInfoLayoutStyle,
	productImgLayoutStyle,
	productInfoLayoutStyle,
	purchaseInquiryLayoutStyle,
	titleStyle,
	textStyle,
	textBoxStyle,
} from '@components/productSummary/ProductSummaryStyle';
import { IcAskBlack20, IcHandshakeGray20 } from '@assets/icons';

const ProductSummay = () => (
	<article>
		<section css={productInfoLayoutStyle}>
			<InfoTable />
			<TextBtn btnText="더보기" color="gray" size="medium" />
		</section>
		<section css={productImgLayoutStyle}>
			<div>
				<h1 css={titleStyle}>개요</h1>
				<img src={detailImg} alt="디테일 상품 이미지" />
			</div>
			<TextBtn btnText="더보기" color="gray" size="medium" />
		</section>
		<section css={purchaseInquiryLayoutStyle}>
			<h1 css={titleStyle}>구매 문의 (2)</h1>
			<div css={textBoxStyle}>
				<p css={textStyle}>
					<IcAskBlack20 />
					제품의 총 전력이 67W인지 궁금합니다.
				</p>
				<p css={textStyle}>
					<IcAskBlack20 />
					해당 제품은 발열이 어느 정도 발생하나요? 또 휴대성이 편리한지 알고 싶어여.
				</p>
			</div>
		</section>
		<section css={agencyServiceInfoLayoutStyle}>
			<h1 css={titleStyle}>구매대행 서비스 안내</h1>
			<p css={textStyle}>
				<IcHandshakeGray20 />
				해당 제품은 구매대행을 통하여 유통되는 제품입니다. 「전기용품 및 생활용품 안전관리법」에 따라 안전관리대상
				제품으로 분류됩니다.
			</p>
		</section>
	</article>
);

export default ProductSummay;
