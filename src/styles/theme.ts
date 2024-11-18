import { css } from "@emotion/react";

const FONT = {
    kor: {
        // Title
        titleBold20: css`
            font-weight: 700;
            font-size: 2rem;
            font-family: "Apple SD Gothic Neo", sans-serif;
            line-height: 20px;
        `,
        // Body
        bodyBold16: css`
            font-weight: 700;
            font-size: 1.6rem;
            font-family: "Apple SD Gothic Neo", sans-serif;
            line-height: 20px;
        `,
        bodyMedium16: css`
            font-weight: 500;
            font-size: 1.6rem;
            font-family: "Apple SD Gothic Neo", sans-serif;
            line-height: 20px;
        `,
        bodyBold14: css`
            font-weight: 700;
            font-size: 1.4rem;
            font-family: "Apple SD Gothic Neo", sans-serif;
            line-height: 17px;
        `,
        bodyMedium14: css`
            font-weight: 500;
            font-size: 1.4rem;
            font-family: "Apple SD Gothic Neo", sans-serif;
            line-height: 17px;
        `,
        bodyBold13: css`
            font-weight: 700;
            font-size: 1.3rem;
            font-family: "Apple SD Gothic Neo", sans-serif;
            line-height: 16px;
        `,
        bodySemibold13: css`
            font-weight: 600;
            font-size: 1.3rem;
            font-family: "Apple SD Gothic Neo", sans-serif;
            line-height: 16px;
        `,
        // Caption
        captionBold12: css`
            font-weight: 700;
            font-size: 1.2rem;
            font-family: "Apple SD Gothic Neo", sans-serif;
            line-height: 14px;
            text-transform: lowercase;
        `,
        captionSemibold12: css`
            font-weight: 600;
            font-size: 1.2rem;
            font-family: "Apple SD Gothic Neo", sans-serif;
            line-height: 14px;
            text-transform: lowercase;
        `,
        captionMedium12: css`
            font-weight: 500;
            font-size: 1.2rem;
            font-family: "Apple SD Gothic Neo", sans-serif;
            line-height: 14px;
            text-transform: lowercase;
        `,
        captionRegular12: css`
            font-weight: 400;
            font-size: 1.2rem;
            font-family: "Apple SD Gothic Neo", sans-serif;
            line-height: 14px;
            text-transform: lowercase;
        `,
        captionReviewIndent12: css`
            font-weight: 500;
            font-size: 1.2rem;
            font-family: "Apple SD Gothic Neo", sans-serif;
            line-height: 21px;
            letter-spacing: 0;
            text-transform: lowercase;
            text-indent: 80px;
        `,
        captionReview12: css`
            font-weight: 500;
            font-size: 1.2rem;
            font-family: "Apple SD Gothic Neo", sans-serif;
            line-height: 21px;
            text-transform: lowercase;
        `,
        captionBold11: css`
            font-weight: 700;
            font-size: 1.1rem;
            font-family: "Apple SD Gothic Neo", sans-serif;
            line-height: 13px;
            text-transform: lowercase;
        `,
        captionSemibold11: css`
            font-weight: 600;
            font-size: 1.1rem;
            font-family: "Apple SD Gothic Neo", sans-serif;
            line-height: 13px;
            text-transform: lowercase;
        `,
        captionMedium11: css`
            font-weight: 500;
            font-size: 1.1rem;
            font-family: "Apple SD Gothic Neo", sans-serif;
            line-height: 13px;
            text-transform: lowercase;
        `,
        captionBold10: css`
            font-weight: 700;
            font-size: 1rem;
            font-family: "Apple SD Gothic Neo", sans-serif;
            line-height: 12px;
        `,
        captionMedium10: css`
            font-weight: 500;
            font-size: 1rem;
            font-family: "Apple SD Gothic Neo", sans-serif;
            line-height: 12px;
            text-transform: lowercase;
        `,
        captionBold8: css`
            font-weight: 700;
            font-size: 0.8rem;
            font-family: "Apple SD Gothic Neo", sans-serif;
            line-height: 8px;
            text-transform: lowercase;
        `,
        captionMedium8: css`
            font-weight: 500;
            font-size: 0.8rem;
            font-family: "Apple SD Gothic Neo", sans-serif;
            line-height: 8px;
            text-transform: lowercase;
        `,
    },
};

export const Theme = {
    FONT,
};