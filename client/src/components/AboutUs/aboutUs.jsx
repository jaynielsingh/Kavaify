import { Typography, Box, Container, Stack } from "@mui/material";
import AboutImage from '../../assets/images/about-3.svg';

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
      <Container maxWidth={'md'}>
        <Typography variant="h1" align="center" color='white' sx={{ fontFamily: 'wallpoet', my: 10 }}>
          Our Mission
        </Typography>
        <Typography data-aos="zoom-in" variant="h6" align="center" color='white' paragraph sx={{ my: 10 }}>
          At our web development company, we are committed to empowering small businesses by providing comprehensive online solutions and assisting existing business owners in revamping their websites. Our mission is to bridge the gap between technology and entrepreneurship, enabling our clients to thrive in the digital landscape.
        </Typography>
        <Stack align='center' spacing={2} direction="column">
          <Box
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-delay='500'
            data-aos-easing="ease-in-sine" sx={{
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '700px',
              maxWidth: '100%',
              backgroundImage: `url(${AboutImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}>
          </Box>
          <Box sx={{
            display: 'flex', pt: 5, pb: 25
          }}>
            <Typography
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine" variant="h5" align="center" color='white'
              sx={{
                p: 2,

              }}>
              By partnering with us, small businesses can unlock their true digital potential, enhance their brand's online visibility, and stay ahead in an ever-evolving digital landscape. Together, we will navigate the complexities of the online world, transforming ideas into impactful realities and empowering businesses to flourish in the digital age.
            </Typography>
          </Box>

        </Stack>
      </Container >
    </Box >
  );
}