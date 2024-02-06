import { Typography, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { tokenomics } from "../../configs/content";
import { BaseCard } from "../../components/card";
import { TokenomicsBox } from "./styled";

const carouselBody = tokenomics.map((item, k) => {
    return (
        <BaseCard
            key={k}
            bgCol="rgba(52, 52, 52, 0.7)"
            borRad={38}
            justCont="center"
            padding=".5rem"
            title={
                <Typography
                    color={"rgba(255, 255, 255, 1)"}
                    fontFamily={"Inter"}
                    fontWeight={400}
                    fontSize={{ mobile: 8.7, tablet: 12, desktop: 20 }}
                    lineHeight={"normal"}
                    whiteSpace={{ mobile: "normal" }}
                    sx={{
                        textWrap: "pretty"
                    }}
                >
                    {item.title}
                </Typography>
            }
            avatar={item.icon}
        />
    )
})

export const Tokenomics: React.FC<{}> = () => {
    const matches = useMediaQuery('(min-width:1024px)');
    return (
        <TokenomicsBox
            margin={"var(--sectionMargin) 0"}
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
                marginBlockEnd={"2rem"}
            >
                Tokenomics
            </Typography>
            <Carousel
                autoPlay={true}
                autoFocus={true}
                infiniteLoop={true}
                interval={2000}
                emulateTouch={true}
                showIndicators={false}
                showThumbs={false}
                showArrows={false}
                showStatus={false}
                centerMode={true}
                centerSlidePercentage={matches ? 25 : 50}
            >
                {carouselBody}
            </Carousel>
        </TokenomicsBox>
    )
}