import { DividerMedium } from '@assets/icons';
import detailIma from '@assets/images/img_detail_xl.png';
import TextBtn from '@components/button/textBtn/TextBtn';
import InfoTable from '@components/infoTable/InfoTable';
import {
	productImgLayoutStyle,
	productInfoLayoutStyle,
	titleStyle,
} from '@components/productSummary/ProductSummaryStyle';

const ProductSummay = () => (
	<article>
		<section css={productInfoLayoutStyle}>
			<DividerMedium />
			<InfoTable />
			<TextBtn btnText="더보기" color="gray" size="medium" />
		</section>
		<section css={productImgLayoutStyle}>
			<div>
				<h1 css={titleStyle}>개요</h1>
				<img src={detailIma} alt="디테일 상품 이미지" />
			</div>
			<TextBtn btnText="더보기" color="gray" size="medium" />
		</section>
	</article>
);

export default ProductSummay;
