import { css } from "@emotion/react";

export const ClickedBtnContainerStyle = css`
`

export const NonClickedBtnContainerStyle = css`
`

export const BtnStyleMap = {
    true: ClickedBtnContainerStyle,
    false: NonClickedBtnContainerStyle,
}