interface ProductInfoType {
	productId: number;
	productImg: string;
	detail: string;
	priceOriginal: number;
	percent: number;
	priceDiscount: number;
	isCoupon: boolean;
	categoryName: string;
	reviewCount: number;
	rating: number;
}

export default ProductInfoType;
