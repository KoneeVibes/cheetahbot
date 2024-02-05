import React from 'react';
import './App.css';
import { Container } from '@mui/material';
import { Nav } from './containers/navigation';

function App() {
  return (
    <Container
      maxWidth={false}
      sx={{
        padding: "0 !important",
        overflow: "hidden",
      }}
    >
      <Nav />
    </Container>
  );
}

export default App;
