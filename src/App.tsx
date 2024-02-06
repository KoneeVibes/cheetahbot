import React from 'react';
import './App.css';
import { Box, Container } from '@mui/material';
import { Nav } from './containers/navigation';
import { Header } from './containers/header';
import headerBg from "../src/assets/headerBg.svg";
import { BotTrade } from './containers/bottrade';
import { Tokenomics } from './containers/tokenomics';
import { Features } from './containers/features';
import { BaseButton } from './components/button';

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
      <BaseButton>
        
      </BaseButton>
    </Container >
  );
}

export default App;
