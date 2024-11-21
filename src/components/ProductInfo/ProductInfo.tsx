import { IcInfoGray14, IcWarningBrandYellow16 } from '@assets/icons';
import productBlack from '@assets/images/img_adapter_black.png';
import productBlue from '@assets/images/img_adapter_blue.png';
import productBlack2 from '@assets/images/img_adapter_cable_black.png';
import productWhite2 from '@assets/images/img_adapter_cable_white.png';
import productPink from '@assets/images/img_adapter_pink.png';
import productPurple from '@assets/images/img_adapter_purple.png';
import productWhite from '@assets/images/img_adapter_white.png';
import bannerRewordImg from '@assets/images/img_banner_reward.png';
import productSubImg1 from '@assets/images/img_product_sub1.png';
import productSubImg2 from '@assets/images/img_product_sub2.png';
import productSubImg3 from '@assets/images/img_product_sub3.png';
import productSubImg4 from '@assets/images/img_product_sub4.png';
import productSubImg5 from '@assets/images/img_product_sub5.png';
import productSubImg6 from '@assets/images/img_product_sub6.png';
import {
	productInfoContainerStyle,
	proudctImgLayoutStyle,
	detailImgBoxStyle,
	productImgStyle,
	productDetailLayoutStyle,
	productDetaiWrapperStyle,
	priceBoxStyle,
	priceDescriptionStyle,
	productNameStyle,
	mediumDividerStyle,
	optionStyle,
	extraInfoStyle,
	optionImgStyle,
	warnLayoutStyle,
	warnTitleStyle,
	warnDescriptionStyle,
	priceDiscountStyle,
	priceOriginalStyle,
	discountPercentStyle,
	endSaleTiemStyle,
	reviewBoxStyle,
} from '@components/ProductInfo/ProductInfoStyle';
import ProductInfoType from 'types/ProductInfoType';

const productSubImages = [
	productSubImg1,
	productSubImg2,
	productSubImg3,
	productSubImg4,
	productSubImg5,
	productSubImg6,
];

const productOptionImages = [
	productBlack,
	productBlack,
	productBlack,
	productWhite,
	productWhite,
	productPink,
	productBlue,
	productPurple,
	productBlack2,
	productWhite2,
];

interface ProductInfoProps extends ProductInfoType {}

const ProductInfo = ({
	productId,
	productImg,
	detail,
	categoryName,
	priceOriginal,
	percent,
	priceDiscount,
	isCoupon,
	reviewCount,
	rating,
}: ProductInfoProps) => (
	<>
		<article css={productInfoContainerStyle}>
			<section css={proudctImgLayoutStyle}>
				<div css={detailImgBoxStyle}>
					{productSubImages.map((imgSrc) => (
						<img key={imgSrc} src={imgSrc} alt="상품 상세 이미지" />
					))}
				</div>
				<img css={productImgStyle} src={productSubImg1} alt="상품 대표 이미지" />
			</section>
			<section css={productDetailLayoutStyle}>
				<img src={bannerRewordImg} alt="상품 리워드 배너" />
				<div css={productDetaiWrapperStyle}>
					<div>
						<div css={priceBoxStyle}>
							<div css={priceDiscountStyle}>₩7.52</div>
							<div css={priceOriginalStyle}>₩43.20</div>
							<div css={discountPercentStyle}>82% 할인</div>
							<div css={endSaleTiemStyle}>할인 종료시간: 12월 8일 16:59</div>
						</div>
						<div css={priceDescriptionStyle}>VAT가 포함된 가격 | 1% 추가 할인</div>
					</div>
					<div css={productNameStyle}>
						Toocki GaN USB C 충전기, 맥쿡 아이폰 15, 14, 13, 12 프로 맥스, 삼성, 샤오미 포코용, 멀티 컬러, 고속 충전,
						67W
					</div>
				</div>
				<div css={reviewBoxStyle}>5,000+개 판매</div>
				<div css={mediumDividerStyle} />
				<div css={optionStyle}>색상: 검정</div>
				<section css={optionImgStyle}>
					{productOptionImages.map((imgSrc, index) => (
						<img key={`${imgSrc + index}`} src={imgSrc} alt="상품 옵션" />
					))}
				</section>
				<div css={mediumDividerStyle} />
				<div css={extraInfoStyle}>
					<p>가격 정보 더보기</p>
					<IcInfoGray14 />
				</div>
			</section>
		</article>
		<section css={warnLayoutStyle}>
			<h1 css={warnTitleStyle}>경고 / 면책 조항</h1>
			<div css={warnDescriptionStyle}>
				<IcWarningBrandYellow16 />
				충전 및 보관 시 잠재적인 화재 위험을 유의하시고, 반드시 사용 설명서를 엄격히 준수해 주세요.
			</div>
		</section>
	</>
);

export default ProductInfo;
