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
import { Simplesteps } from './containers/simplesteps';
import { Experience } from './containers/experience';
import { Footer } from './containers/footer';
import { useContext } from 'react';
import { Context } from './context';
import { RoadmapBg } from './assets';

function App() {
  const { openMenu } = useContext(Context)
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
          backgroundImage: openMenu ? "" : `url(${headerBg})`,
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
      <RoadmapBg
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <Simplesteps />
      <Experience />
      <Footer />
    </Container >
  );
}

export default App;
