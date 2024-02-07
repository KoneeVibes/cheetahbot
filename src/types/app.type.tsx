import React from "react"

export type CardBaseProps = {
    title?: React.ReactNode,
    subheader?: React.ReactNode,
    avatar?: React.ReactNode,
    content?: React.ReactNode,
    buttons?: React.ReactNode,
    bgCol?: string,
    borRad: string | number
    justCont?: string,
    padding?: string,
    bord?: string
    flx?: string
    cardPadding?: any
    mobileCardPadding?: any
    height?: string
    headerFD?: any
    headerAlign?: any
    contentPadding?: string | number
    mobileMargin?: string | number,
    miniTabletMargin?: string | number,
    tabletMargin?: string | number,
    laptopMargin?: string | number,
    bgImage?: string
    width?: string
    position?: "static" | "relative" | "absolute" | "fixed" | "sticky"
    top?: string | number
    transform?: string
    hasicon?: boolean,
    mobilevalue?: number,
    tabletvalue?: number,
}