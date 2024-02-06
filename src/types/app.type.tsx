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
}