import { styled } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../context";

export const Navbar = styled("nav")(
    ({ theme }) => {
        const { openMenu } = useContext(Context);
        return {
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
                [theme.breakpoints.down("tablet")]: {
                    display: openMenu ? "flex" : "none",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    gap: theme.spacing(10),
                    position: "fixed",
                    left: openMenu ? "0" : "-100%",
                    width: "stretch",
                    height: "stretch",
                    top: "calc(64px + var(--sectionMargin))",
                    padding: "calc(2 * var(--cardPadding))",
                    background: "#000000",
                },
            },
            "& a": {
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: 1.8,
                color: "#FFFFFF",
                textDecoration: "none",
            },
            "& .actionButton": {
                [theme.breakpoints.down("tablet")]: {
                    display: openMenu ? "inline-flex" : "none",
                    position: "fixed",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    bottom: "calc(2 * var(--cardPadding))",
                }
            },
        }
    })

