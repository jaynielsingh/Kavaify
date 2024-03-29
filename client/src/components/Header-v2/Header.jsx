/* eslint-disable no-lone-blocks */
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import BackgroundImage from "../../assets/images/main-bg-4.jpg";
import HeroImage from '../../assets/images/hero-1.svg'





const Header = () =>
{

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',


        background: 'linear-gradient(0.25turn, #ee7752,  #23a6d5)',
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          // mixBlendMode: 'multiply', // Adjust blend mode for desired effect
        }}
      ></Box>
      {/* <WaveDivider /> */}
      <Container maxWidth='lg' >
        <Stack align="center" spacing={6} direction={{ sm: 'column', lg: 'row' }}>
          <Box>
            <Box
              data-aos='fade-zoom-in'
              data-aos-easing="ease-in-back"
              data-aos-delay="1500">
              <Typography
                sx={{ pt: 30, fontFamily: 'Monoton', fontSize: '60px' }} variant='h1' component='h1' align='center' color='white' gutterBottom>
                Kava<span style={{ color: '#07F8EC' }}>ify</span>
              </Typography>
            </Box>
            <Box data-aos="zoom-in"
              data-aos-delay="500"

              data-aos-easing="ease-in-sine"
              sx={{
                my: 2,
                padding: 5,
                borderRadius: '50px',
              }
              }>
              <Box data-aos='fade-zoom-in'
                data-aos-easing="ease-in-back"
                data-aos-delay="1800">
                <Typography fontWeight='regular' variant='h5' component='h2' align='center' color='white'>
                  Web Development At Its <span style={{ color: '#07F8EC' }}>Finest</span>
                </Typography>
              </Box>
              <Typography sx={{ pt: '50px' }} variant='h5' fontSize={25} component='h2' align='center' color='white' paragraph>
                Design | Develop | Dominate
                {/* "Elevate, Innovate, Dominate: Small Business Edition" */}
                {/* Where Creativity Meets Functionality: Web Design at Its <span style={{position: 'inherit'}}> Finest</span> */}
              </Typography>
              <Container maxWidth='xs'>

                <Button href='#mission' data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="800"
                  data-aos-offset="0" variant='outlined' sx={{ m: 3, color: "#07F8EC", backgroundColor: 'black' }}>Learn More</Button>
                <Button href='#contact'
                  sx={{ m: 3, backgroundColor: "#07F8EC", color: 'black' }}
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="900"
                  data-aos-offset="0" variant='contained'>Contact Us</Button>
              </Container>
            </Box>
          </Box>
          <Box sx={{ position: 'relative', width: '100%' }}>
            <Box
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-delay='500'
              data-aos-easing="ease-in-sine" sx={{
                pt: 10,
                height: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '700px',
                maxWidth: '100%',
                backgroundImage: `url(${HeroImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}>
            </Box>
          </Box>
        </Stack>


      </Container>
    </Box>
  );
};
// <Container sx={{
//   background: "linear-gradient(to left, #43C197, #3B9F8A, #337C7C, #2C5A6F, #243761, #1C1554, #432371)",
//   backgroundSize: '200% 200%',
//   minWidth: "100vw",
//   height: '100vh',
//   animation: 'gradientBackground 15s ease infinite',
//   '@keyframes gradientBackground': {
//     '0%': {
//       backgroundPosition: '0% 50%',
//     },
//     '50%': {
//       backgroundPosition: '100% 50%',
//     },
//     '100%': {
//       backgroundPosition: '0% 50%',
//     },
//   },
// }}>
//   <Box sx={{
//     position: 'absolute',
//     py: '25%',
//     display: 'flex',
//     background: `url("../../assets/images/hero-bg-2.jpg")`,
//     width: '100%',
//     height: '100%',
//     backgroundSize: 'cover',
//     opacity: 0.5,
//   }}>
//     <Grid container>
//       <Grid item flex={1} >
//         <Container maxWidth="sm">
//           <Box sx={{
//             padding: 4,
//             boxShadow: "0px 0px 20px 0px rgba(444,555,0.2)",
//           }
//           }>
//             <Typography variant='h2' component='h1' align='center' color='white' gutterBottom>
//               Kavaify
//             </Typography>
//             <Typography variant='h5' fontSize={28} component='h2' align='center' color='white' paragraph>
//               Where Creativity Meets Functionality: Web Design at Its Finest
//             </Typography>
//           </Box>
//         </Container>
//       </Grid>
//       <Divider sx={{ px: 6 }} orientation='vertical' flexItem></Divider>
//     </Grid>
//   </Box>
// </Container >


export default Header;

// import React from 'react';
// import { Box } from '@material-ui/core';

// const App = () => {
//   return (
  // #7BC393, #69C09F, #56BDAB, #44BAB6, #31B7C2, #432371
//     <Box
//       sx={{
//         width: '100vw',
//         height: '100vh',
//         background: `linear-gradient(to right, #ff9966, #ff5e62)`,
//         animation: 'gradientAnimation 5s infinite',
//         '@keyframes gradientAnimation': {
//           '0%': {
//             backgroundPosition: '0% 50%',
//           },
//           '50%': {
//             backgroundPosition: '100% 50%',
//           },
//           '100%': {
//             backgroundPosition: '0% 50%',
//           },
//         },
//       }}
//     >
//       {/* Your app content here */}
//     </Box>
//   );
// };

// export default App;
