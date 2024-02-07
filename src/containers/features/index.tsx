import { Box, Stack, Typography } from "@mui/material";
import { features } from "../../configs/content";
import { BaseCard } from "../../components/card";
import featuresBg from "../../assets/featuresBg.svg";

export const Features: React.FC<{}> = () => {
    return (
        <Box
            component={"div"}
            id="features"
            margin={{
                mobile: "calc(1.5 * var(--sectionMargin)) var(--pagePadding)",
                miniTablet: "calc(2 * var(--sectionMargin)) var(--pagePadding)",
                laptop: "calc(4 * var(--sectionMargin)) var(--pagePadding)",
            }}
            sx={{
                backgroundImage: `url(${featuresBg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                "& .MuiCardHeader-avatar svg":{
                    width: "49px !important",
                    height: "49px !important",
                }
            }}
        >
            <Typography
                variant="h2"
                color={"rgba(255, 255, 255, 1)"}
                textAlign={"center"}
                marginLeft={"auto"}
                marginRight={"auto"}
                width={{ mobile: "70%" }}
                fontFamily={"Neue Machina"}
                fontWeight={400}
                fontSize={{ mobile: 30, miniTablet: 35, tablet: 40, laptop: 50, desktop: 60 }}
                marginBlockEnd={{ mobile: "2rem", laptop: "3rem", desktop: "4rem" }}
            >
                Features
            </Typography>
            <Stack
                direction={{ laptop: "row" }}
                gap={{ mobile: "var(--flexGap)", desktop: "calc(2 * var(--flexGap))" }}
                flexWrap={"wrap"}
            >
                {features.map((feature, k) => {
                    return (
                        <BaseCard
                            key={k}
                            borRad={8}
                            hasicon={true}
                            flx="1 1 45%"
                            mobilevalue={50}
                            tabletvalue={100}
                            bord={"2px solid rgba(255, 255, 255, 0.12)"}
                            bgCol="transparent"
                            cardPadding={"calc(2 * var(--cardPadding))"}
                            mobileCardPadding={"calc(var(--cardPadding)/1.5)"}
                            avatar={feature.icon}
                            title={
                                <Typography
                                    variant="h3"
                                    fontFamily={"Inter"}
                                    fontWeight={700}
                                    fontSize={{ mobile: 20, miniTablet: 25, tablet: 30, laptop: 40 }}
                                    lineHeight={"normal"}
                                    whiteSpace={"normal"}
                                    sx={{
                                        backgroundImage: "linear-gradient(270deg, #FF8811 0%, #705612 90.3%)",
                                        backgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        color: "transparent",
                                    }}
                                >
                                    {feature.title}
                                </Typography>
                            }
                            content={
                                <Typography
                                    variant="body1"
                                    fontFamily={"Inter"}
                                    fontWeight={400}
                                    fontSize={{ mobile: 12, tablet: 18, laptop: 24 }}
                                    lineHeight={"normal"}
                                    whiteSpace={"normal"}
                                    color={"#FFFFFF"}
                                >
                                    {feature.body}
                                </Typography>
                            }
                        />
                    )
                })}
            </Stack>
        </Box>
    )
}