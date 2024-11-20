import { ImageContainer, PriceContainer, ProductContainer, ProductDiscountStyle, ProductInfoContainer, ProductNameStyle, ProductPriceStyle } from './ProductCardStyle';

interface ProductProps {
    image: string;
    name: string;
    price: number;
    discountRate: number;
    hasCoupon?: boolean;
}

const ProductCard = ({ image, name, price, discountRate }: ProductProps) => {
    return (
        <section css={ProductContainer}>
            <article css={ImageContainer}>
                <img src={image} alt={name} />
            </article>
            <article css={ProductInfoContainer}>
                <p css={ProductNameStyle}>{name}</p>
                <div css={PriceContainer}>
                    <p css={ProductPriceStyle}>₩{price.toLocaleString()}</p>
                    <span css={ProductDiscountStyle}>{discountRate}%</span>
                </div>
            </article>

        </section>
    );
};

export default ProductCard;