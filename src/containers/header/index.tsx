import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { BaseButton } from "../../components/button";
import { clientsI, clientsII } from "../../configs/content";
import { ButtonStack, LogoStack } from "./styled";

export const Header: React.FC<{}> = () => {
    const whitepaper = 'https://cheetah-bots-whitepaper.gitbook.io/cheetah-bots/';
    const botUrl = '#';
    return (
        <Stack
            margin={{
                mobile: "calc(1.5 * var(--sectionMargin)) var(--pagePadding)",
                miniTablet: "calc(2 * var(--sectionMargin)) var(--pagePadding)",
                laptop: "calc(4 * var(--sectionMargin)) var(--pagePadding)",
            }}
        >
            <Box
                width={{ desktop: "75%" }}
            >
                <Typography
                    variant="h1"
                    whiteSpace={"normal"}
                    color={"rgba(255, 255, 255, 1)"}
                    fontFamily={"Neue Machina"}
                    fontWeight={300}
                    fontSize={{ mobile: 28, miniTablet: 32, tablet: 42, laptop: 60, desktop: 65 }}
                    lineHeight={"normal"}
                    sx={{
                        textWrap: "balance",
                    }}
                >
                    $CHEETAHBOT - Multi-chain Trading with Ease!
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
                    Welcome to Cheetahbot! The fastest and safest automated multi-chain trading bot in the market today! <br /><br />
                    Experience lightning trading speed with our trading bots and grow your portfolio on multiple chains effortlessly with multiple bots in our system.
                </Typography>
            </Box>
            <ButtonStack>
                <BaseButton
                    variant="contained"
                    onClick={() => window.open(botUrl, '_blank')}
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
                    onClick={() => window.open(whitepaper, '_blank')}
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
                        Whitepaper Document
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