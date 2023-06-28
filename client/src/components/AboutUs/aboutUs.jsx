import { Typography, Box, Container, Stack } from "@mui/material";
import AboutImage from '../../assets/images/coding-bg.jpg';

export default function AboutUs()
{
  return (
    <Box id='mission' component='section' sx={{
      pt: 5,
      py: 6,
      width: "100vw",
      position: 'relative',
      display: "flex",
      overflow: "hidden",
      backgroundImage: "url('https://www.transparenttextures.com/patterns/cartographer.png')",
    }}>
      <Container>
        <Typography variant="h1" align="center" color='white' sx={{ position: 'relative', fontFamily: 'wallpoet', my: 10 }}>
          Our Mission
        </Typography>
        <Typography data-aos="zoom-in" variant="h6" align="center" color='white' paragraph sx={{ position: 'relative', my: 10 }}>
          At our web development company, we are committed to empowering small businesses by providing comprehensive online solutions and assisting existing business owners in revamping their websites. Our mission is to bridge the gap between technology and entrepreneurship, enabling our clients to thrive in the digital landscape.
        </Typography>
        <Stack align='center' spacing={5} direction={{ xs: "column", lg: 'row' }}>
          <Box
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-delay='500'
            data-aos-easing="ease-in-sine" sx={{
              display: { xs: 12, md: 6 },
              height: '400px',
              width: '50vw',
              borderRadius: '10px',
              p: 5,
              backgroundImage: `url(${AboutImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              boxShadow: "0px 0px 20px 0px #07F8EC",
              "&:hover": {
                boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.2)",
                transform: "scale(1.05)",
              },
              transition: "0.5s",
            }}>
          </Box>
          <Box sx={{
            display: 'flex', pt: 20, pb: 25
          }}>
            <Typography
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine" variant="h5" align="center" color='white'>
              By partnering with us, small businesses can unlock their true digital potential, enhance their brand's online visibility, and stay ahead in an ever-evolving digital landscape. Together, we will navigate the complexities of the online world, transforming ideas into impactful realities and empowering businesses to flourish in the digital age.
            </Typography>
          </Box>

        </Stack>
      </Container >
    </Box>
  );
}