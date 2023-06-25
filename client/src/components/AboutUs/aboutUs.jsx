import { Typography, Box, Container, Paper, Stack } from "@mui/material";

export default function AboutUs()
{
  return (
    <Box id='aboutUs' component='section' sx={{ position: 'relative', display: 'flex', }}>
      <Container>
        <Typography variant="h1" align="center" color='white' sx={{position: 'relative', fontFamily: 'wallpoet', mb: 20}}>
          Our Mission
        </Typography>
        
        <Stack  spacing={50} direction={{ xs: 'column', sm: 'row' }}>
          <Box sx={{ backgroundColor: 'green',height: '400px', width: '400px'}}>
            <Typography variant="h5" align="center" color='white'>
              hello world
            </Typography>
          </Box>
          <Box sx={{backgroundColor: 'green'}}>
            This is second box
          </Box>
        </Stack>

      </Container >
    </Box>
  );
}