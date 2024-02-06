import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Logo } from "../../assets";
import { Footerbox } from "./styled";
import { navLinks, smIcons } from "../../configs/content";

export const Footer: React.FC<{}> = () => {
    return (
        <Footerbox>
            <Box
                overflow={"hidden"}
            >
                <Logo />
            </Box>
            <Box>
                <Stack
                    direction={{ tablet: "row" }}
                    gap={"var(--flexGap)"}
                    justifyContent={"space-between"}
                    alignItems={{ tablet: "flex-end" }}
                    padding={"var(--cardPadding) 0"}
                >
                    <Stack
                        direction={"row"}
                        gap={"var(--flexGap)"}
                    >
                        {navLinks.map((link, k) => {
                            return (
                                <Typography
                                    key={k}
                                    variant="subtitle1"
                                    fontFamily={"Neue Machina"}
                                    fontWeight={400}
                                    fontSize={{ mobile: 10, tablet: 15, desktop: 20 }}
                                    lineHeight={"normal"}
                                    color={"rgba(255, 255, 255, 1)"}
                                >
                                    {link.name}
                                </Typography>
                            )
                        })}
                        <Typography
                            variant="subtitle1"
                            fontFamily={"Neue Machina"}
                            fontWeight={400}
                            fontSize={{ mobile: 10, tablet: 15, desktop: 20 }}
                            lineHeight={"normal"}
                            color={"rgba(255, 255, 255, 1)"}
                        >
                            Roadmap
                        </Typography>
                    </Stack>
                    <Stack
                        gap={"calc(var(--flexGap)/1.5)"}
                    >
                        <Box>
                            <Typography
                                variant="subtitle1"
                                fontFamily={"Neue Machina"}
                                fontWeight={800}
                                fontSize={{ mobile: 10, tablet: 15, desktop: 20 }}
                                lineHeight={"normal"}
                                color={"rgba(255, 255, 255, 1)"}
                                marginBlockEnd={"1rem"}
                            >
                                Contact Us
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                fontFamily={"Inter"}
                                fontWeight={400}
                                fontSize={{ mobile: 9, tablet: 15, desktop: 18 }}
                                lineHeight={"normal"}
                                color={"rgba(255, 255, 255, 1)"}
                            >
                                cheetahbots.tech@gmail.com
                            </Typography>
                        </Box>
                        <Stack
                            direction={"row"}
                            gap={"1rem"}
                        >
                            {smIcons.map((icon, key) => {
                                return (
                                    <React.Fragment key={key}>
                                        {icon}
                                    </React.Fragment>
                                )
                            })}
                        </Stack>
                    </Stack>
                </Stack>
                <hr />
                <Typography
                    variant="subtitle1"
                    fontFamily={"Neue Machina"}
                    fontWeight={400}
                    fontSize={{ mobile: 8, tablet: 12, desktop: 16 }}
                    lineHeight={"normal"}
                    color={"rgba(255, 255, 255, 1)"}
                >
                    © 2023 Cheetah  •  All Rights Reserved
                </Typography>
            </Box>
        </Footerbox>
    )
}