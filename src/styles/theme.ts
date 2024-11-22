import { css } from '@emotion/react';

const theme = {
	colors: {
		// Solid Colors
		black: '#000000',
		white: '#FFFFFF',
		black30: 'rgba(0, 0, 0, 0.3)',
		black60: 'rgba(0, 0, 0, 0.6)',

		successPrimary: '#009966',
		successSecondary: '#D7E8BF',
		successBg: '#EAEFA6',

		notificationPrimary: '#3170EE',
		notificationSecondary: '#CDDCFB',
		notificationBg: '#ECF1FE',

		warningPrimary: '#FF5500',
		warningSecondary: '#FADEC9',
		warningBg: '#FFF2EB',

		reviewStar: '#FFC816',

		gray1: '#FAFAFA',
		gray2: '#F5F5F5',
		gray3: '#EBEBEB',
		gray4: '#CCCCCC',
		gray5: '#AFB2B4',
		gray6: '#7C7C7F',
		gray7: '#757575',
		gray8: '#353639',
		gray9: '#222222',
		gray10: '#191919',

		brandPrimary: '#FD384F',
		brandDisable: '#FFB5BB',
		brandBg: '#FEE7E7',

		function1: '#E67D39',
		function2: '#FAD4C0',
		function3: '#FFF2EB',

		magenta: '#FF0054',
		red: '#D3021C',
		orange: '#ED5628',
		blue: '#4A8AB7',

		// Gradient Colors
		gradientOrange: 'linear-gradient(90deg, #EE6930 0%, #EC4726 100%)',
	},

	fonts: {
		kor: {
			// Title
			titleBold20: css`
				font-weight: 700;
				font-size: 2rem;
				font-family: 'Apple SD Gothic Neo', sans-serif;
				line-height: 20px;
			`,
			// Body
			bodyBold16: css`
				font-weight: 700;
				font-size: 1.6rem;
				font-family: 'Apple SD Gothic Neo', sans-serif;
				line-height: 20px;
			`,
			bodyMedium16: css`
				font-weight: 500;
				font-size: 1.6rem;
				font-family: 'Apple SD Gothic Neo', sans-serif;
				line-height: 20px;
			`,
			bodyBold14: css`
				font-weight: 700;
				font-size: 1.4rem;
				font-family: 'Apple SD Gothic Neo', sans-serif;
				line-height: 17px;
			`,
			bodyMedium14: css`
				font-weight: 500;
				font-size: 1.4rem;
				font-family: 'Apple SD Gothic Neo', sans-serif;
				line-height: 17px;
			`,
			bodyBold13: css`
				font-weight: 700;
				font-size: 1.3rem;
				font-family: 'Apple SD Gothic Neo', sans-serif;
				line-height: 16px;
			`,
			bodySemibold13: css`
				font-weight: 600;
				font-size: 1.3rem;
				font-family: 'Apple SD Gothic Neo', sans-serif;
				line-height: 16px;
			`,
			// Caption
			captionBold12: css`
				font-weight: 700;
				font-size: 1.2rem;
				font-family: 'Apple SD Gothic Neo', sans-serif;
				line-height: 14px;
				text-transform: lowercase;
			`,
			captionSemibold12: css`
				font-weight: 600;
				font-size: 1.2rem;
				font-family: 'Apple SD Gothic Neo', sans-serif;
				line-height: 14px;
				text-transform: lowercase;
			`,
			captionMedium12: css`
				font-weight: 500;
				font-size: 1.2rem;
				font-family: 'Apple SD Gothic Neo', sans-serif;
				line-height: 14px;
				text-transform: lowercase;
			`,
			captionRegular12: css`
				font-weight: 400;
				font-size: 1.2rem;
				font-family: 'Apple SD Gothic Neo', sans-serif;
				line-height: 14px;
				text-transform: lowercase;
			`,
			captionReviewIndent12: css`
				font-weight: 500;
				font-size: 1.2rem;
				font-family: 'Apple SD Gothic Neo', sans-serif;
				line-height: 21px;
				letter-spacing: 0;
				text-transform: lowercase;
				text-indent: 80px;
			`,
			captionReview12: css`
				font-weight: 500;
				font-size: 1.2rem;
				font-family: 'Apple SD Gothic Neo', sans-serif;
				line-height: 21px;
				text-transform: lowercase;
			`,
			captionBold11: css`
				font-weight: 700;
				font-size: 1.1rem;
				font-family: 'Apple SD Gothic Neo', sans-serif;
				line-height: 13px;
				text-transform: lowercase;
			`,
			captionSemibold11: css`
				font-weight: 600;
				font-size: 1.1rem;
				font-family: 'Apple SD Gothic Neo', sans-serif;
				line-height: 13px;
				text-transform: lowercase;
			`,
			captionMedium11: css`
				font-weight: 500;
				font-size: 1.1rem;
				font-family: 'Apple SD Gothic Neo', sans-serif;
				line-height: 13px;
				text-transform: lowercase;
			`,
			captionBold10: css`
				font-weight: 700;
				font-size: 1rem;
				font-family: 'Apple SD Gothic Neo', sans-serif;
				line-height: 12px;
			`,
			captionMedium10: css`
				font-weight: 500;
				font-size: 1rem;
				font-family: 'Apple SD Gothic Neo', sans-serif;
				line-height: 12px;
				text-transform: lowercase;
			`,
			captionBold8: css`
				font-weight: 700;
				font-size: 0.8rem;
				font-family: 'Apple SD Gothic Neo', sans-serif;
				line-height: 8px;
				text-transform: lowercase;
			`,
			captionMedium8: css`
				font-weight: 500;
				font-size: 0.8rem;
				font-family: 'Apple SD Gothic Neo', sans-serif;
				line-height: 8px;
				text-transform: lowercase;
			`,
		},
		eng: {
			// Head
			headBold48: css`
				font-weight: 700;
				font-size: 4.8rem;
				font-family: 'TT Norms Pro', sans-serif;
				line-height: 52px;
			`,
			headBold32: css`
				font-weight: 700;
				font-size: 3.2rem;
				font-family: 'TT Norms Pro', sans-serif;
				line-height: 52px;
			`,
			// Title
			titleBold24: css`
				font-weight: 700;
				font-size: 2.4rem;
				font-family: 'TT Norms Pro', sans-serif;
				line-height: 30px;
			`,
			titleBold20: css`
				font-weight: 700;
				font-size: 2rem;
				font-family: 'TT Norms Pro', sans-serif;
				line-height: 30px;
			`,
			titleBold18: css`
				font-weight: 700;
				font-size: 1.8rem;
				font-family: 'TT Norms Pro', sans-serif;
				line-height: 22px;
			`,
			titleBold16: css`
				font-weight: 700;
				font-size: 1.6rem;
				font-family: 'TT Norms Pro', sans-serif;
				line-height: 20px;
			`,
			// Body
			bodyBold16: css`
				font-weight: 700;
				font-size: 1.6rem;
				font-family: 'TT Norms Pro', sans-serif;
				line-height: 20px;
			`,
			bodyBold13: css`
				font-weight: 700;
				font-size: 1.3rem;
				font-family: 'TT Norms Pro', sans-serif;
				line-height: 16px;
			`,
			bodyMedium13: css`
				font-weight: 500;
				font-size: 1.3rem;
				font-family: 'TT Norms Pro', sans-serif;
				line-height: 16px;
			`,
			// Caption
			captionBold12: css`
				font-weight: 700;
				font-size: 1.2rem;
				font-family: 'TT Norms Pro', sans-serif;
				line-height: 16px;
			`,
			captionMedium12: css`
				font-weight: 500;
				font-size: 1.2rem;
				font-family: 'TT Norms Pro', sans-serif;
				line-height: 16px;
			`,
			captionRegular12: css`
				font-weight: 400;
				font-size: 1.2rem;
				font-family: 'TT Norms Pro', sans-serif;
				line-height: 16px;
			`,
			captionBold11: css`
				font-weight: 700;
				font-size: 1.1rem;
				font-family: 'TT Norms Pro', sans-serif;
				line-height: 13px;
			`,
			captionMedium11: css`
				font-weight: 500;
				font-size: 1.1rem;
				font-family: 'TT Norms Pro', sans-serif;
				line-height: 13px;
			`,
			captionBold10: css`
				font-weight: 700;
				font-size: 1rem;
				font-family: 'TT Norms Pro', sans-serif;
				line-height: 12px;
			`,
			captionMedium10: css`
				font-weight: 500;
				font-size: 1rem;
				font-family: 'TT Norms Pro', sans-serif;
				line-height: 12px;
			`,
			captionBold9: css`
				font-weight: 700;
				font-size: 0.9rem;
				font-family: 'TT Norms Pro', sans-serif;
				line-height: 9px;
			`,
			captionBold8: css`
				font-weight: 700;
				font-size: 0.8rem;
				font-family: 'TT Norms Pro', sans-serif;
				line-height: 8px;
			`,
		},
	},
};

export default theme;
