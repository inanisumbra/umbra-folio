"use client"

import "@fontsource/source-sans-pro"

import { Global } from "@emotion/react"
import React from "react"
import { css,theme, GlobalStyles } from "twin.macro"

const baseStyles = css`
  *,
  *:before,
  *:after {
    font-family: "Source Sans Pro";
    box-sizing: border-box;
    outline: none;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button,
    &::-webkit-scrollbar {
      -webkit-appearance: none;
    }
  }
  body {
    background-color: ${theme`colors.slate[700]`}
  }
`

const GlobalStylesWrapper = () => (
  <>
    <GlobalStyles />
    <Global styles={baseStyles} />
  </>
)

export default GlobalStylesWrapper
