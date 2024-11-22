import { IcArrowrightGray12 } from '@assets/icons';

import FreeTag from './FreeTag';
import { couponBtnStyle, imageContainer, imageStyle, priceContainer, productContainer, productDiscountStyle, productInfoContainer, productInfoWrapper, productNameStyle, productPriceStyle, productWonStyle, tagContainer } from './ProductCardStyle';

interface ProductProps {
    image: string;
    name: string;
    price: number;
    discountRate: number;
    hasCoupon?: boolean;
}

const ProductCard = ({ image, name, price, discountRate, hasCoupon }: ProductProps) => (
        <article css={productContainer}>
            <div css={imageContainer}>
                <img css={imageStyle} src={image} alt={name} />
            </div>
            <div css={productInfoContainer}>
                <div css={productInfoWrapper}>
                    <p css={productNameStyle}>{name}</p>
                    <div css={priceContainer}>
                        <span css={productWonStyle}>₩</span>
                        <span css={productPriceStyle}>{price.toLocaleString()}</span>
                        <span css={productDiscountStyle}>{discountRate}%</span>
                    </div>
                </div>               
                <ul css={tagContainer}>
                    <li><FreeTag text='무료 배송' color='red'/></li>
                    <li><FreeTag text='무료 반품' color='gray'/></li>
                </ul>
            </div>
            {hasCoupon && <button css={couponBtnStyle}>쿠폰 받기<IcArrowrightGray12/></button>}

        </article>
);

export default ProductCard;