import { Card, styled } from "@mui/material";

type CardBaseProps = {
    hasicon: boolean,
    cardavatarposition?: {
        mobile?: { top?: number, right?: number },
        tablet?: { top?: number, right?: number },
        laptop?: { top?: number, right?: number },
    }
}

export const CardBase = styled(Card)<CardBaseProps>(
    ({ theme, hasicon, cardavatarposition }) => ({
        overflow: hasicon ? "visible" : "hidden",
        width: "100%",
        boxSizing: "border-box",
        "& .MuiCardHeader-root": {
            position: hasicon && "relative",
        },
        "& .MuiCardHeader-content": {
            position: hasicon && "absolute",
            left: hasicon && 0,
            paddingLeft: 16,
            paddingRight: 16,
        },
        "& .MuiCardHeader-avatar": {
            position: hasicon && "relative",
            width: hasicon && "100%",
        },
        "& .MuiCardHeader-avatar svg": {
            position: hasicon && "absolute",
            top: hasicon && `-${cardavatarposition?.mobile?.top}px`,
            right: hasicon && `-${cardavatarposition?.mobile?.right}px`,
            [theme.breakpoints.up("tablet")]: {
                top: hasicon && `-${cardavatarposition?.tablet?.top}px`,
                right: hasicon && `-${cardavatarposition?.tablet?.right}px`
            },
            [theme.breakpoints.up("laptop")]: {
                top: hasicon && `-${cardavatarposition?.laptop?.top}px`,
                right: hasicon && `-${cardavatarposition?.laptop?.right}px`
            },
            [theme.breakpoints.down("tablet")]: {
                width: !hasicon && "50%",
                height: !hasicon && "auto",
            },
        },
    })
)