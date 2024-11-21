import { IcArrowrightGray12 } from '@assets/icons';

import FreeTag from './FreeTag';
import { couponBtnStyle, imageContainer, imageStyle, priceContainer, productContainer, productDiscountStyle, productInfoContainer, productInfoWrapper, productNameStyle, productPriceStyle, productWonStyle, productWrapper, tagContainer } from './ProductCardStyle';

interface ProductProps {
    image: string;
    name: string;
    price: number;
    discountRate: number;
    hasCoupon?: boolean;
}

const ProductCard = ({ image, name, price, discountRate, hasCoupon }: ProductProps) => (
        <section css={productContainer}>
            <article css={productWrapper}>
                <article css={imageContainer}>
                    <img css={imageStyle} src={image} alt={name} />
                </article>
                <article css={productInfoContainer}>
                    <article css={productInfoWrapper}>
                        <p css={productNameStyle}>{name}</p>
                        <div css={priceContainer}>
                            <p css={productWonStyle}>₩</p>
                            <p css={productPriceStyle}>{price.toLocaleString()}</p>
                            <span css={productDiscountStyle}>{discountRate}%</span>
                        </div>
                    </article>               
                    <article css={tagContainer}>
                        <FreeTag text='무료 배송' color='red'/>
                        <FreeTag text='무료 반품' color='gray'/>
                    </article>
                </article>
                {hasCoupon && <button css={couponBtnStyle}>쿠폰 받기<IcArrowrightGray12/></button>}
            </article>
        </section>
);

export default ProductCard;