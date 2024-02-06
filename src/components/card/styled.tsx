import { Card, styled } from "@mui/material";

export const CardBase = styled(Card)(
    ({ theme }) => ({
        overflow: "hidden",
        width: "100%",
        boxSizing: "border-box",
        "& .MuiCardHeader-content": {
            width: "100%",
        },
        [theme.breakpoints.down("tablet")]: {
            "& .MuiCardHeader-avatar svg": {
                width: "50%",
                height: "auto"
            }
        }
    })
)