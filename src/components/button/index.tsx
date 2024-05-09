import { Button, styled } from "@mui/material";

export const BaseButton = styled(Button)(
    ({ theme, variant }) => ({
        fontFamily: "Inter",
        borderRadius: 58.8,
        padding: "1rem 2rem",
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
                    return '1px solid #454545';
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
                        return '1px solid #454545';
                    case 'contained':
                        return 'rgba(255, 136, 17, 1)';
                    case 'outlined':
                        return '2px solid rgba(255, 136, 17, 1)';
                    default:
                        return 'transparent';
                }
            })(),
        },
        [theme.breakpoints.up("tablet")]: {
            padding: "1rem 4rem",
        }
    })
)