import { IcArrowrightGray12 } from '@assets/icons';

import FreeTag from './FreeTag';
import { couponBtnStyle, imageContainer, imageStyle, priceContainer, productContainer, productDiscountStyle, productInfoContainer, productInfoWrapper, productNameStyle, productPriceStyle, productWonStyle, productWrapper, tagContainer } from './ProductCardStyle';
import StarBtn from '@components/button/starBtn/StarBtn';

interface ProductProps {
    image: string;
    name: string;
    price: number;
    discountRate: number;
    hasCoupon?: boolean;
    rating: number;
    reviewCount: number;
}

const ProductCard = ({ image, name, price, discountRate, hasCoupon = false, rating, reviewCount }: ProductProps) => (
        <article css={productContainer}>
            <div css={productWrapper}>
                <div css={imageContainer}>
                    <img css={imageStyle} src={image} alt={name} />
                </div>
                <div css={productInfoContainer}>
                    <div css={productInfoWrapper}>
                        <p css={productNameStyle}>{name}</p>
                        <StarBtn rating={rating} reviewCount={reviewCount} isRatingVisible={false} />
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
            </div>
        </article>
);

export default ProductCard;