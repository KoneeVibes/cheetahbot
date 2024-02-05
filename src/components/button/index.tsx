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
        border: (() => {
            switch (variant) {
                case 'text':
                    return 'none';
                case 'contained':
                    return 'rgba(255, 136, 17, 1)';
                case 'outlined':
                    return '2px solid rgba(255, 136, 17, 1)';
                default:
                    return 'transparent';
            }
        })(),
        "&:hover": {
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
            border: (() => {
                switch (variant) {
                    case 'text':
                        return 'none';
                    case 'contained':
                        return 'rgba(255, 136, 17, 1)';
                    case 'outlined':
                        return '2px solid rgba(255, 136, 17, 1)';
                    default:
                        return 'transparent';
                }
            })(),
        }
    })
)