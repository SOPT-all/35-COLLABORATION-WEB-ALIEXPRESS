import ProductCard from './ProductCard';
import { productListContainer, relatedProductsContainer, relatedProductsHeaderStyle, relatedProductsStyle } from './ProductCardListStyle';

interface Product {
    image: string;
    name: string;
    price: number;
    discountRate: number;
    hasCoupon?: boolean;
    rating: number;
    reviewCount: number;
}

interface ProductCardListProps {
    products: Product[];
}

const ProductCardList = ({ products }: ProductCardListProps ) => {
    return (
        <section css={relatedProductsContainer}>
            <div css={relatedProductsHeaderStyle}>
                <p css={relatedProductsStyle}>연관 상품</p>
            </div>
            <article css={productListContainer}>
                {products.map((product) => (
                    <ProductCard
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        discountRate={product.discountRate}
                        hasCoupon={product.hasCoupon}
                        rating={3.5}
                        reviewCount={123}
                    />
                ))}
            </article>
        </section>
    );
};

export default ProductCardList;