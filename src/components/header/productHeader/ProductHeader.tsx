import {
	ImgLogotypeL,
	IcHamburgermenuWhite14,
	IcSearchWhite24,
	IcImagesearchBlack24,
	IcQrcodeWhite24,
	ImgFlagKorL,
	IcArrowbottomSWhite12,
	IcUserWhite24,
	IcCartWhite24,
} from '@assets/icons/index';
import Category from '@components/header/productHeader/Category';
import MyList from '@components/header/productHeader/MyList';
import { useState } from 'react';

import {
	relativeStyle,
	headerStyle,
	logoDescStyle,
	fontEnStyle,
	fontKoStyle,
	hambergerStyle,
	inputStyle,
	IconContainer,
	searchStyle,
	appLogLayout,
	textContainer,
	fontEnAppStyle,
	flagLayout,
	flagContainer,
	fontKRWStyle,
	arrowStyle,
	fontMStyle,
	fontBStyle,
	cartLayout,
	numBackStyle,
} from './ProductHeaderStyle';

const ProductHeader = () => {
	const [activePopup, setActivePopup] = useState<'burger' | 'info' | null>(null);

	const togglePopup = (popup: 'burger' | 'info') => {
		setActivePopup(activePopup === popup ? null : popup);
	};
	return (
		<header css={[relativeStyle, headerStyle]}>
			{/* 로고섹션 */}
			<div role="banner">
				<ImgLogotypeL />
				<div css={logoDescStyle}>
					<p css={fontEnStyle}>Alibaba Group</p>
					<p css={fontKoStyle}>해외 직구 플랫폼</p>
				</div>
			</div>

			{/* 햄버거 메뉴 */}
			<nav aria-label="Primary Navigation" css={hambergerStyle}>
				<IcHamburgermenuWhite14 onClick={() => togglePopup('burger')} />
			</nav>

			{/* 카테고리 팝업 */}
			{activePopup === 'burger' && <Category />}

			{/* 검색섹션 */}
			<div role="search" css={relativeStyle}>
				<input type="text" css={inputStyle} placeholder="충전기" />
				<div css={IconContainer}>
					<IcImagesearchBlack24 />
					<IcSearchWhite24 css={searchStyle} />
				</div>
			</div>

			{/* 유틸리티 섹션 */}
			{/* 앱 다운로드 */}
			<section css={appLogLayout} aria-labelledby="app-download">
				<IcQrcodeWhite24 />
				<div css={textContainer}>
					<p css={fontEnAppStyle}>AliExpress</p>
					<p css={fontMStyle}>앱 다운로드</p>
				</div>
			</section>

			{/* 국가 및 통화 */}
			<section css={flagLayout} aria-labelledby="language-currency">
				<ImgFlagKorL />
				<div css={flagContainer}>
					<div css={textContainer}>
						<p css={fontEnAppStyle}>KO/</p>
						<p css={fontKRWStyle}>KRW</p>
					</div>
					<IcArrowbottomSWhite12 css={arrowStyle} />
				</div>
			</section>

			{/* 사용자 계정 */}
			<section css={appLogLayout} aria-labelledby="user-account" onClick={() => togglePopup('info')}>
				<IcUserWhite24 />
				<div css={flagContainer}>
					<div css={textContainer}>
						<p css={fontMStyle}>환영합니다!/</p>
						<p css={fontBStyle}>로그인/회원가입</p>
					</div>
					<IcArrowbottomSWhite12 css={arrowStyle} />
				</div>
			</section>

			{/* 카테고리 팝업 */}
			{activePopup === 'info' && <MyList />}

			{/* 장바구니 */}
			<section css={cartLayout} aria-labelledby="cart">
				<IcCartWhite24 />
				<div css={textContainer}>
					<p css={[fontKRWStyle, numBackStyle]}>0</p>
					<p css={fontMStyle}>장바구니</p>
				</div>
			</section>
		</header>
	);
};

export default ProductHeader;
