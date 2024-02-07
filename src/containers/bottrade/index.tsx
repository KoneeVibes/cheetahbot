import { Box, Stack, Typography } from "@mui/material";
import mapbg from "../../assets/mapbg.svg";
import { BaseCard } from "../../components/card";
import { trade } from "../../configs/content";
import { Tradebot } from "../../assets";

export const BotTrade: React.FC<{}> = () => {
    const setTransform = (key: number) => {
        switch (key) {
            case 0:
                return "rotate(10deg)"
            case 1:
                return "rotate(-10deg) scale(0.8)"
            case 2:
                return "rotate(-10deg)"
            default:
                break;
        }
    }
    return (
        <Box>
            <Stack
                width={{ mobile: "70%" }}
                marginLeft={"auto"}
                marginRight={"auto"}
            >
                <Typography
                    variant="h2"
                    textAlign={"center"}
                    color={"rgba(255, 136, 17, 1)"}
                    fontFamily={"Inter"}
                    fontWeight={500}
                    fontSize={{ mobile: 21, desktop: 21 }}
                    lineHeight={"normal"}
                    textTransform={"uppercase"}
                >
                    Send and receive
                </Typography>
                <Typography
                    variant="body1"
                    textAlign={"center"}
                    color={"rgba(255, 255, 255, 1)"}
                    fontFamily={"Neue Machina"}
                    fontWeight={300}
                    fontSize={{ mobile: 20, miniTablet: 32, laptop: 40, desktop: 50 }}
                    lineHeight={"normal"}
                    whiteSpace={"normal"}
                    sx={{
                        textWrap: "pretty"
                    }}
                >
                    Easily trade with our bot
                </Typography>
            </Stack>
            <Stack
                className=""
                direction={{ tablet: "row" }}
                gap={{ mobile: "var(--flexGap)", tablet: "0" }}
                justifyContent={"center"}
                sx={{
                    background: `url(${mapbg})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: 800
                }}
            >
                {trade.map((item, key) => {
                    return (
                        <BaseCard
                            key={key}
                            borRad={8}
                            hasicon={true}
                            mobilevalue={70}
                            bord="1.31px solid rgba(255, 255, 255, 0.32)"
                            bgCol="transparent"
                            height="fit-content"
                            mobileCardPadding={"var(--cardPadding)"}
                            position={"relative"}
                            top={(key === 1) ? "400px" : "100px"}
                            transform={setTransform(key)}
                            mobileMargin={"var(--sectionMargin) var(--pagePadding)"}
                            tabletMargin={(key !== 1) ? "var(--sectionMargin) var(--pagePadding)" : "0"}
                            width="stretch"
                            avatar={<Tradebot />}
                            title={
                                <Typography
                                    variant="h3"
                                    fontFamily={"Neue Machina"}
                                    fontWeight={400}
                                    fontSize={{ mobile: 8, miniTablet: 14, tablet: 18, laptop: 23, desktop: 26 }}
                                    lineHeight={"normal"}
                                    sx={{
                                        backgroundImage: "linear-gradient(270deg, #B72346 0%, #C5882D 90.3%);",
                                        backgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        color: "transparent",
                                    }}
                                >
                                    {item.fee}
                                </Typography>
                            }
                            subheader={
                                <Typography
                                    variant="subtitle1"
                                    fontFamily={"Inter"}
                                    fontWeight={800}
                                    fontSize={{ mobile: 5, miniTablet: 8, tablet: 12, laptop: 14, desktop: 16 }}
                                    lineHeight={"normal"}
                                    color={"rgba(255, 255, 255, 0.8)"}
                                >
                                    {item.id}
                                </Typography>
                            }
                            content={
                                <Typography
                                    variant="body1"
                                    fontFamily={"Inter"}
                                    fontWeight={800}
                                    fontSize={{ mobile: 7, miniTablet: 12, tablet: 18, laptop: 20, desktop: 23 }}
                                    lineHeight={"normal"}
                                    color={"rgba(255, 255, 255, 1)"}
                                    whiteSpace={"normal"}
                                >
                                    {item.status}
                                </Typography>
                            }
                        />
                    )
                })}
            </Stack>
        </Box>
    )
}