import { Card, styled } from "@mui/material";

export const CardBase = styled(Card)(
    ({ theme }) => ({
        overflow: "hidden",
        width: "100%",
        boxSizing: "border-box",
        "& .MuiCardHeader-content": {
            width: "100%",
        },
    })
)