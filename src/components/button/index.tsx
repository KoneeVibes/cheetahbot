import { Button, styled } from "@mui/material";

export const BaseButton = styled(Button)(
    ({ theme, variant }) => ({
        fontFamily: "Inter",
        borderRadius: 58.8,
        background: (() => {
            switch (variant) {
                case 'text':
                    return 'transparent';
                case 'contained':
                    return 'rgba(255, 136, 17, 1)';
                case 'outlined':
                    return 'transparent';
                default:
                    return 'transparent';
            }
        })(),
    })
)