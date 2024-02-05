import { Box, Stack, Typography } from "@mui/material"
import { BaseButton } from "../../components/button"
import { BitTorrent, Bnbchain, ChainLink, Eth, Polygon, Solana, Synthetix, Vechain } from "../../assets"

export const Header: React.FC<{}> = () => {
    return (
        <Stack
            margin={{
                mobile: "calc(1.5 * var(--sectionMargin)) var(--pagePadding)",
                miniTablet: "calc(2 * var(--sectionMargin)) var(--pagePadding)",
                laptop: "calc(4 * var(--sectionMargin)) var(--pagePadding)",
            }}
        >
            <Box
                width={{ desktop: "70%" }}
            >
                <Typography
                    variant="h1"
                    whiteSpace={"normal"}
                    color={"rgba(255, 255, 255, 1)"}
                    fontFamily={"Neue Machina"}
                    fontWeight={300}
                    fontSize={{ mobile: 32, miniTablet: 42, tablet: 60, laptop: 65, desktop: 75.6 }}
                    lineHeight={"normal"}
                    sx={{
                        textWrap: "balance",
                    }}
                >
                    Fastest & Secure Trading Bot
                </Typography>
                <Typography
                    variant="body1"
                    whiteSpace={"normal"}
                    color={"rgba(255, 255, 255, 0.7)"}
                    marginBlock={"1rem"}
                    fontFamily={"Inter"}
                    fontWeight={400}
                    fontSize={{ mobile: 12, desktop: 21 }}
                    lineHeight={"normal"}
                    sx={{
                        textWrap: "pretty",
                    }}
                >
                    Welcome to Cheetahbot.tech The fastest, safest and most profitable Automated multi chain Trading bot.<br /><br />
                    EXPERIENCE the world of lightening speed with our sniper trading bot, grow your crypto currency portfolio on multiple chain and unlock limitless possibilities in your crypto currency profit trading.
                </Typography>
            </Box>
            <Stack
                direction={{ tablet: "row" }}
                gap={"calc(var(--flexGap)/1.5)"}
                padding={"var(--cardPadding) 0"}
            >
                <BaseButton
                    variant="contained"
                >
                    <Typography
                        variant="button"
                        color={"rgba(255, 255, 255, 1)"}
                    >
                        Get started
                    </Typography>
                </BaseButton>
                <BaseButton
                    variant="outlined"
                >
                    <Typography
                        variant="button"
                        color={"rgba(255, 255, 255, 1)"}
                    >
                        Dowload whitepaper
                    </Typography>
                </BaseButton>
            </Stack>
            <Stack
                direction={"row"}
            >
                <Eth />
                <Solana />
                <Polygon />
                <Vechain />
                <Bnbchain />
                <ChainLink />
                <Synthetix />
                <BitTorrent />
            </Stack>
        </Stack>
    )
}