import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../../context";

export const Hamburger = styled(Box)(
    ({ theme }) => {
        const { openMenu } = useContext(Context);
        return {
            border: "none",
            background: "transparent",
            "& span": {
                display: "block",
                width: "25px",
                height: "3px",
                margin: "5px auto",
                transition: "all 0.3s ease -in -out",
                background: "rgba(255, 255, 255, 0.5)"
            },
            "& span:nth-of-type(2)": {
                opacity: openMenu ? 0 : 1,
            },
            "& span:nth-of-type(1)": {
                transform: openMenu ? "translateY(8px) rotate(45deg)" : "unset",
            },
            "& span:nth-of-type(3)": {
                transform: openMenu ? "translateY(-8px) rotate(-45deg)" : "unset",
            },
            [theme.breakpoints.down(165)]: {
                position: "absolute",
                left: "50%",
                transform: "translate(-50%, -50%)",
                top: "calc(1.5 * var(--cardPadding))"
            },
            [theme.breakpoints.up("desktop")]: {
                display: "none"
            }
        }
    }
)