import { Box, Grid, Typography } from "@mui/material";
import { roadmap } from "../../configs/content";
import { BaseCard } from "../../components/card";
import roadmapbg from "../../assets/roadmapbodybg.svg";
import "./style.css";

export const Roadmap: React.FC<{}> = () => {
    return (
        <Box
            margin={{
                mobile: "calc(1.5 * var(--sectionMargin)) var(--pagePadding)",
                miniTablet: "calc(2 * var(--sectionMargin)) var(--pagePadding)",
                laptop: "calc(4 * var(--sectionMargin)) var(--pagePadding)",
            }}
            sx={{
                backgroundImage: `url(${roadmapbg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
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
                Roadmap
            </Typography>
            <Grid
                container
                spacing={{ mobile: 2, desktop: 3 }}
            >
                {roadmap.map((milestone, key) => {
                    return (
                        <Grid
                            item
                            key={key}
                            mobile={12}
                            tablet={6}
                            desktop={milestone.size}
                            className="roadmap-detail"
                        >
                            <BaseCard
                                borRad={8}
                                bgCol="rgba(255, 255, 255, 0.05)"
                                mobileCardPadding={"calc(var(--cardPadding)/1.5)"}
                                bord="1.06px solid #FFFFFF0D"
                                height="100%"
                                headerFD={"column"}
                                headerAlign={"flex-start"}
                                avatar={milestone.avatar}
                                title={
                                    <Typography
                                        textTransform={"uppercase"}
                                        fontFamily={"Inter"}
                                        fontWeight={600}
                                        fontSize={{ mobile: 11, miniTablet: 18, desktop: 21 }}
                                        lineHeight={"normal"}
                                        color={"rgba(236, 241, 240, 1)"}
                                        marginBlockStart={"1rem"}
                                    >
                                        {milestone.title}
                                    </Typography>
                                }
                                content={
                                    <ul className="roadmap-pointers">
                                        {milestone.body.map((item, key) => {
                                            return (
                                                <li
                                                    key={key}
                                                    className="roadmap-pointer"
                                                >
                                                    {item}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                }
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}