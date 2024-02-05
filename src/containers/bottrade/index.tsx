import { Box, Stack, Typography } from "@mui/material";
import mapbg from "../../assets/mapbg.svg";

export const BotTrade: React.FC<{}> = () => {
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
            <Box
                margin={"var(--sectionMargin) 0"}
                sx={{
                    background: `url(${mapbg})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: 800
                }}
            >

            </Box>
        </Box>
    )
}