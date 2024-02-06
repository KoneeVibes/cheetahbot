import { Box, Stack, Typography } from "@mui/material";
import { simplestepsI, simplestepsII } from "../../configs/content";
import { BaseCard } from "../../components/card";

export const Simplesteps: React.FC<{}> = () => {
    return (
        <Box
            margin={{
                mobile: "calc(1.5 * var(--sectionMargin)) var(--pagePadding)",
                miniTablet: "calc(2 * var(--sectionMargin)) var(--pagePadding)",
                laptop: "calc(4 * var(--sectionMargin)) var(--pagePadding)",
            }}
        >
            <Typography
                variant="h2"
                color={"rgba(255, 255, 255, 1)"}
                textAlign={"center"}
                marginLeft={"auto"}
                marginRight={"auto"}
                width={{ mobile: "80%" }}
                fontFamily={"Neue Machina"}
                fontWeight={400}
                fontSize={{ mobile: 30, miniTablet: 35, tablet: 40, laptop: 50, desktop: 60 }}
                marginBlockEnd={{ mobile: "2rem", laptop: "3rem", desktop: "4rem" }}
                whiteSpace={"normal"}
            >
                Simple steps to get started
            </Typography>
            <Stack
                direction={{ tablet: "row" }}
                gap={{ tablet: "var(--flexGap)" }}
                justifyContent={"space-between"}
            >
                <Box flex={1}>
                    {simplestepsI.map((step, key) => {
                        return (
                            <Stack
                                key={key}
                                direction={{ mobile: "row" }}
                                alignItems={"flex-start"}
                                gap={"var(--flexGap)"}
                            >
                                <Typography
                                    variant="h3"
                                    color={"rgba(255, 255, 255, 0.2)"}
                                    flex={{ laptop: "1 1 25%" }}
                                    fontFamily={"Neue Machina"}
                                    fontWeight={400}
                                    fontSize={{ mobile: 35, desktop: 50 }}
                                    lineHeight={"normal"}
                                >
                                    {step.id}
                                </Typography>
                                <BaseCard
                                    borRad={"none"}
                                    padding="0"
                                    contentPadding={"0"}
                                    flx="1 1 75%"
                                    bgCol="transparent"
                                    title={
                                        <Typography
                                            variant="subtitle1"
                                            color={"rgba(255, 255, 255, 1)"}
                                            fontFamily={"Neue Machina"}
                                            fontWeight={400}
                                            fontSize={{ mobile: 17, desktop: 25 }}
                                            lineHeight={"normal"}
                                            marginBlockEnd={"1rem"}
                                        >
                                            {step.title}
                                        </Typography>
                                    }
                                    content={
                                        <Typography
                                            variant="body1"
                                            color={"rgba(255, 255, 255, 0.8)"}
                                            fontFamily={"Inter"}
                                            fontWeight={400}
                                            fontSize={{ mobile: 13, desktop: 19 }}
                                            lineHeight={"normal"}
                                            whiteSpace={"normal"}
                                        >
                                            {step.body}
                                        </Typography>
                                    }
                                />
                            </Stack>
                        )
                    })}
                </Box>
                <Box flex={1}>
                    {simplestepsII.map((step, key) => {
                        return (
                            <Stack
                                key={key}
                                direction={{ mobile: "row" }}
                                alignItems={"flex-start"}
                                gap={"var(--flexGap)"}
                            >
                                <Typography
                                    variant="h3"
                                    color={"rgba(255, 255, 255, 0.2)"}
                                    flex={{ laptop: "1 1 25%" }}
                                    fontFamily={"Neue Machina"}
                                    fontWeight={400}
                                    fontSize={{ mobile: 35, desktop: 50 }}
                                    lineHeight={"normal"}
                                >
                                    {step.id}
                                </Typography>
                                <BaseCard
                                    borRad={"none"}
                                    padding="0"
                                    contentPadding={"0"}
                                    flx="1 1 75%"
                                    bgCol="transparent"
                                    title={
                                        <Typography
                                            variant="subtitle1"
                                            color={"rgba(255, 255, 255, 1)"}
                                            fontFamily={"Neue Machina"}
                                            fontWeight={400}
                                            fontSize={{ mobile: 17, desktop: 25 }}
                                            lineHeight={"normal"}
                                            marginBlockEnd={"1rem"}
                                        >
                                            {step.title}
                                        </Typography>
                                    }
                                    content={
                                        <Typography
                                            variant="body1"
                                            color={"rgba(255, 255, 255, 0.8)"}
                                            fontFamily={"Inter"}
                                            fontWeight={400}
                                            fontSize={{ mobile: 13, desktop: 19 }}
                                            lineHeight={"normal"}
                                            whiteSpace={"normal"}
                                        >
                                            {step.body}
                                        </Typography>
                                    }
                                />
                            </Stack>
                        )
                    })}
                </Box>
            </Stack>
        </Box>
    )
}