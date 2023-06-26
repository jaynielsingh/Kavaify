import { Box, Container, Divider, Typography } from '@mui/material';
import React from 'react';

const Process = () =>
{
  return (

    <Box sx={{
      py: 6,
      width: "100%",
      position: 'relative',
      display: "flex",
      overflow: "hidden",
      backgroundImage: "url('https://www.transparenttextures.com/patterns/cartographer.png')",
    }}>
      <Container maxWidth='md'>
        <Typography align='center' variant='h1'
          sx={{ position: 'relative', color: 'white', mt: 20, fontFamily: "Wallpoet", }}>
          How It Works
        </Typography>
        <Typography align='center' variant='h5'
          sx={{ position: 'relative', color: 'white', mt: 10 }}>
          Our streamlined web development process ensures a seamless journey from the initial concept to the final website launch. Here's an overview of how our web development process works:
        </Typography>
        <Box>
          hello 
        </Box>
      </Container>
      
    </Box >
  );
};

export default Process;