import productSubImg1 from '@assets/images/img_product_sub1.png';
import productSubImg2 from '@assets/images/img_product_sub2.png';
import productSubImg3 from '@assets/images/img_product_sub3.png';
import productSubImg4 from '@assets/images/img_product_sub4.png';
import productSubImg5 from '@assets/images/img_product_sub5.png';
import {
	productInfoContainerStyle,
	proudctImgLayoutStyle,
	detailImgBoxStyle,
} from '@components/ProductInfo/ProductInfoStyle';

const productSubImages = [productSubImg1, productSubImg2, productSubImg3, productSubImg4, productSubImg5];

const ProductInfo = () => (
	<article css={productInfoContainerStyle}>
		<section css={proudctImgLayoutStyle}>
			<div css={detailImgBoxStyle}>
				{productSubImages.map((imgSrc) => (
					<img key={imgSrc} src={imgSrc} alt="product sub img" />
				))}
			</div>
			<img src="" alt="" />
		</section>
	</article>
);

export default ProductInfo;
