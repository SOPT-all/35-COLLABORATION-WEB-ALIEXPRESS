import ProductCard from './ProductCard';
import { productListContainer, relatedProductsContainer, relatedProductsHeaderStyle, relatedProductsStyle } from './ProductCardListStyle';

interface Product {
    image: string;
    name: string;
    price: number;
    discountRate: number;
    hasCoupon?: boolean;
}

interface ProductCardListProps {
    products: Product[];
}

const ProductCardList = ({ products }: ProductCardListProps ) => {
    return (
        <main css={relatedProductsContainer}>
            <section css={relatedProductsHeaderStyle}>
                <p css={relatedProductsStyle}>연관 상품</p>
            </section>
            <section css={productListContainer}>
                {products.map((product) => (
                    <ProductCard
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        discountRate={product.discountRate}
                        hasCoupon={product.hasCoupon}
                    />
                ))}
            </section>
        </main>
    );
};

export default ProductCardList;