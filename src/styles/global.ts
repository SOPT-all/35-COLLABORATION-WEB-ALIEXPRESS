import { css } from "@emotion/react";
import RESET from './reset';

const GLOBALSTYLE = css`
    ${RESET}

    /* Apple SD Gothic Neo */
    @font-face {
        font-weight: 700;
        font-family: "Apple SD Gothic Neo";
        font-style: normal;
        letter-spacing: 0;
        src: url("/src/assets/fonts/AppleSDGothicNeo-Bold.ttf") format("truetype");
    }

    @font-face {
        font-weight: 600;
        font-family: "Apple SD Gothic Neo";
        font-style: normal;
        letter-spacing: 0;
        src: url("/src/assets/fonts/AppleSDGothicNeo-SemiBold.ttf") format("truetype");
    }

    @font-face {
        font-weight: 500;
        font-family: "Apple SD Gothic Neo";
        font-style: normal;
        letter-spacing: 0;
        src: url("/src/assets/fonts/AppleSDGothicNeo-Medium.ttf") format("truetype");
    }

    @font-face {
        font-weight: 400;
        font-family: "Apple SD Gothic Neo";
        font-style: normal;
        letter-spacing: 0;
        src: url("/src/assets/fonts/AppleSDGothicNeo-Regular.ttf") format("truetype");
    }

    /* TT Norms Pro */
    @font-face {
        font-weight: 700;
        font-family: "TT Norms Pro";
        font-style: normal;
        letter-spacing: 0;
        src: url("/src/assets/fonts/TT Norms Pro Bold.otf") format("opentype");
    }
        
    @font-face {
        font-weight: 500;
        font-family: "TT Norms Pro";
        font-style: normal;
        letter-spacing: 0;
        src: url("/src/assets/fonts/TT Norms Pro Medium.otf") format("opentype");
    }

    @font-face {
        font-weight: 400;
        font-family: "TT Norms Pro";
        font-style: normal;
        letter-spacing: 0;
        src: url("/src/assets/fonts/TT Norms Pro Regular.otf") format("opentype");
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html,
    body {
        width: 100%;

        font-size: 62.5%;
        scroll-behavior: smooth;
    }
`;

export default GLOBALSTYLE;