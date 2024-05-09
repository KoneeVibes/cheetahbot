import { Stack, styled } from "@mui/material";

export const LogoStack = styled(Stack)(
    ({ theme }) => ({
        padding: "calc(var(--cardPadding)/1.5) 0",
        width: "75%",
        "svg": {
            height: "auto",
        }
    })
);

export const ButtonStack = styled(Stack)(
    ({ theme }) => ({
        gap: "calc(var(--flexGap)/1.5)",
        padding: "calc(1.5 * var(--cardPadding)) 0 var(--cardPadding)",
        overflow: "hidden",
        [theme.breakpoints.up("tablet")]: {
            flexDirection: "row"
        },
        [theme.breakpoints.down("miniTablet")]: {
            padding: "var(--cardPadding) 0",
        },
        [theme.breakpoints.between(327, "desktop")]: {
            width: "fit-content",
        }
    })
)