import { styled } from "@mui/material";

export const Footerbox = styled("footer")(
    ({ theme }) => ({
        marginTop: "calc(5 * var(--sectionMargin))",
        padding: "calc(3 * var(--cardPadding)) var(--pagePadding)",
        borderTop: "2px solid rgba(255, 136, 17, 1)",
    })
)