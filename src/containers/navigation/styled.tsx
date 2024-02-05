import { styled } from "@mui/material";

export const Navbar = styled("nav")(
    ({ theme }) => ({
        display: "flex",
        gap: "var(--flexGap)",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "var(--sectionMargin) var(--pagePadding) 0",
        padding: ".5rem 1rem",
        border: "0.5px solid rgba(255, 255, 255, 0.5)",
        borderRadius: 74.8,
        backgroundColor: "rgba(26, 26, 26, 0.6)",
        "& ul": {
            display: "flex",
            gap: "var(--flexGap)",
            alignItems: "center",
            justifyContent: "space-between",
            paddingInlineStart: 0,
            width: "30%",
        },
        "& a": {
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: 1.8,
            color: "#FFFFFF",
            textDecoration: "none",
        },
    })
)
