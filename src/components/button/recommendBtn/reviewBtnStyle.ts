import { Theme, css } from "@emotion/react";

export const FlexStyle = (theme: Theme) => css`
display: flex;
align-items: center;
justify-content: center;
white-space: nowrap;
gap: 0.3rem;
width: 9.2rem;
height: 2.4rem;
${theme.fonts.captionMedium12};
`

export const ClickedBtnContainerStyle = (theme: Theme) => css`
display: flex;
box-sizing: border-box;
padding : 0.4rem 0.8rem;
border-radius: 0.4rem;
color: ${theme.colors.notificationPrimary};
`

export const NonClickedBtnContainerStyle = (theme: Theme) => css`
display: flex;
box-sizing: border-box;
padding : 0.4rem 0.8rem;
border-radius: 0.4rem;

`

export const BtnStyleMap = {
    true: ClickedBtnContainerStyle,
    false: NonClickedBtnContainerStyle,
}