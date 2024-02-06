import { Typography } from "@mui/material";
import { BaseButton } from "../../components/button";
import { BaseCard } from "../../components/card";

export const Experience: React.FC<{}> = () => {
    return (
        <BaseCard
            mobileMargin={"calc(1.5 * var(--sectionMargin)) var(--pagePadding)"}
            miniTabletMargin={"calc(2 * var(--sectionMargin)) var(--pagePadding)"}
            laptopMargin={"calc(4 * var(--sectionMargin)) var(--pagePadding)"}
            bgImage={"linear-gradient(100.51deg, #573B1F 7.82%, #000000 111.93%)"}
            borRad={8}
            width={"auto"}
            mobileCardPadding="var(--cardPadding)"
            title={
                < Typography
                    variant="h2"
                    fontFamily={" Neue Machina"}
                    fontWeight={400}
                    fontSize={{ mobile: 18, miniTablet: 25, tablet: 35, laptop: 40, desktop: 50 }}
                    lineHeight={"normal"}
                    whiteSpace={"normal"}
                    color={"rgba(255, 255, 255, 1)"}
                    textAlign={"center"}
                    sx={{
                        textWrap: "balance"
                    }}
                >
                    Get ready to experience speed with Cheetah
                </Typography >
            }
            content={
                < Typography
                    variant="body1"
                    fontFamily={"Inter"}
                    fontWeight={700}
                    fontSize={{ mobile: 8, tablet: 12, desktop: 16 }}
                    lineHeight={"normal"}
                    whiteSpace={"normal"}
                    color={"rgba(255, 255, 255, 0.7)"}
                    textAlign={"center"}
                >
                    Join now with Cheetah to speed up your trading and start earning now.
                </Typography >
            }
            buttons={
                < BaseButton
                    variant="contained"
                    sx={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
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
                        Get Started
                    </Typography>
                </BaseButton >
            }
        />
    )
}

