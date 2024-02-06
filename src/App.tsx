import React from 'react';
import './App.css';
import { Box, Container, Typography } from '@mui/material';
import { Nav } from './containers/navigation';
import { Header } from './containers/header';
import headerBg from "../src/assets/headerBg.svg";
import { BotTrade } from './containers/bottrade';
import { Tokenomics } from './containers/tokenomics';
import { Features } from './containers/features';
import { BaseButton } from './components/button';
import { Roadmap } from './containers/roadmap.tsx';
import { RoadMapBg } from './assets';

function App() {
  return (
    <Container
      maxWidth={false}
      sx={{
        padding: "0 !important",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${headerBg})`,
          backgroundSize: "cover",
        }}
      >
        <div style={{ height: "1px" }} />
        <Nav />
        <Header />
      </Box>
      <BotTrade />
      <Tokenomics />
      <Features />
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
        margin={{
          mobile: "calc(1.5 * var(--sectionMargin)) var(--pagePadding)",
          miniTablet: "calc(2 * var(--sectionMargin)) var(--pagePadding)",
          laptop: "calc(4 * var(--sectionMargin)) var(--pagePadding)",
        }}
        overflow={"hidden"}
      >
        <BaseButton
          variant='contained'
        >
          <Typography
            variant='button'
            textTransform={"capitalize"}
            fontFamily={"Inter"}
            fontWeight={500}
            fontSize={{ mobile: 19 }}
            lineHeight={"normal"}
          >
            Get Started
          </Typography>
        </BaseButton>
      </Box>
      <Roadmap />
      <Box>
        <RoadMapBg width={"100%"} />
      </Box>
    </Container >
  );
}

export default App;
