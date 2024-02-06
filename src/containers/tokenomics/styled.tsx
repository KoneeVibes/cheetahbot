import { Box, styled } from "@mui/material";

export const TokenomicsBox = styled(Box)(
    ({ theme }) => ({
        "& .carousel .slider-wrapper.axis-horizontal .slider": {
            gap: "var(--flexGap)",
        },
        "& .MuiCardHeader-avatar": {
            flex: "1 1 30%",
        },
        "& .MuiCardHeader-content": {
            flex: "1 1 70%",
        },
        "& svg": {
            width: "100%",
        }
    })
)