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
        padding: "var(--cardPadding) 0",
        overflow: "hidden",
        [theme.breakpoints.up("tablet")]: {
            flexDirection: "row"
        },
        [theme.breakpoints.between(327, "desktop")]: {
            width: "fit-content",
        }
    })
)