import { Card, styled } from "@mui/material";

export const CardBase = styled(Card)<{ hasicon: boolean, mobilevalue: number, tabletvalue: number }>(
    ({ theme, hasicon, mobilevalue, tabletvalue }) => ({
        overflow: hasicon ? "visible" : "hidden",
        width: "100%",
        boxSizing: "border-box",
        "& .MuiCardHeader-content": {
            position: hasicon && "absolute"
        },
        "& .MuiCardHeader-avatar": {
            position: hasicon && "relative",
            width: hasicon && "100%",
        },
        "& .MuiCardHeader-avatar svg": {
            position: hasicon && "absolute",
            top: hasicon && `-${mobilevalue}px`,
            right: hasicon && `-${mobilevalue}px`,
            [theme.breakpoints.up("tablet")]: {
                top: hasicon && `-${tabletvalue}px`,
                right: hasicon && `-${tabletvalue}px`
            },
            [theme.breakpoints.down("tablet")]: {
                width: !hasicon && "50%",
                height: !hasicon && "auto",
            },
        },
    })
)