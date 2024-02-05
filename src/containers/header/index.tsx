import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { BaseButton } from "../../components/button";
import { clientsI, clientsII } from "../../configs/content";
import { ButtonStack, LogoStack } from "./styled";

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
            <ButtonStack>
                <BaseButton
                    variant="contained"
                >
                    <Typography
                        variant="button"
                        color={"rgba(255, 255, 255, 1)"}
                        textTransform={"capitalize"}
                        fontFamily={"Inter"}
                        fontWeight={500}
                        fontSize={{ mobile: 19 }}
                        lineHeight={"normal"}
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
                        textTransform={"capitalize"}
                        fontFamily={"Inter"}
                        fontWeight={500}
                        fontSize={{ mobile: 19 }}
                        lineHeight={"normal"}
                    >
                        Dowload whitepaper
                    </Typography>
                </BaseButton>
            </ButtonStack>
            <LogoStack>
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    gap={"calc(var(--flexGap)/1.5)"}
                >
                    {clientsI.map((client, k) => {
                        return (
                            <React.Fragment key={k}>
                                {client}
                            </React.Fragment>
                        )
                    })}
                </Stack>
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    gap={"calc(var(--flexGap)/1.5)"}
                >
                    {clientsII.map((client, k) => {
                        return (
                            <React.Fragment key={k}>
                                {client}
                            </React.Fragment>
                        )
                    })}
                </Stack>
            </LogoStack>
        </Stack>
    )
}