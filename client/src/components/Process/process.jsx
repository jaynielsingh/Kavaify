import { Box, Container, Typography } from '@mui/material';
import PlanningPhoto from '../../assets/images/planning-1.jpg';
import DevelopmentPhoto from '../../assets/images/coding-bg-1.jpg';
import DealPhoto from '../../assets/images/deal-bg-1.jpg';
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
          sx={{ position: 'relative', color: 'white', mt: 10, fontFamily: "Wallpoet", }}>
          How It Works
        </Typography>
        <Typography align='center' variant='h5'
          sx={{ position: 'relative', color: 'white', my: 5 }}>
          Our streamlined web development process ensures a seamless journey from the initial concept to the final website launch. Here's an overview of how our web development process works:
        </Typography>
        <Box data-aos="flip-down"
          data-aos-delay="500"
          sx={{ py: 10 }}>
          <Box sx={{
            overflow: 'hidden',
            maxWidth: '100%',
            height: '400px',
            borderRadius: '20px',
            p: 5,
            backgroundImage: `url(${PlanningPhoto})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}>
          </Box>
          <Box sx={{ px: 5, pt: 10, }}>
            <Typography variant='h5' align='center' color='white'>
              1. Planning and Requirements Gathering:
              Understand the client's goals and objectives for the website.
              Identify the target audience and their needs.
              Determine the website's key features and functionalities.
              Create a project timeline and set milestones.
            </Typography>
          </Box>
        </Box>
        <Box data-aos="flip-down"
          data-aos-delay="500"
          sx={{ py: 10 }}>
          <Box sx={{
            overflow: 'hidden',
            maxWidth: '100%',
            height: '400px',
            borderRadius: '20px',
            p: 5,
            backgroundImage: `url(${DevelopmentPhoto})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}>
          </Box>
          <Box sx={{ px: 5, pt: 10, }}>
            <Typography variant='h5' align='center' color='white'>
              2. Development and Implementation:
              Convert the approved design into a functional website using HTML, CSS, and JavaScript.
              Develop the necessary server-side functionality using programming languages like PHP, Python, or Node.js.
              Integrate databases and implement content management systems (CMS) if required.
              Optimize the website for responsiveness, performance, and search engine optimization (SEO).
              Conduct thorough testing to ensure proper functionality across different devices and browsers.
            </Typography>
          </Box>
        </Box>
        <Box data-aos="flip-down"
          data-aos-delay="500"
          sx={{ py: 10 }}>
          <Box sx={{
            overflow: 'hidden',
            maxWidth: '100%',
            height: '400px',
            borderRadius: '20px',
            p: 5,
            backgroundImage: `url(${DealPhoto})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}>
          </Box>
          <Box sx={{ px: 5, pt: 10, }}>
            <Typography variant='h5' align='center' color='white'>
              3. Deployment and Maintenance:
              Set up the website's server and hosting environment.
              Deploy the website to the client's hosting environment or a web server.
              Provide ongoing maintenance and support, including regular updates, bug fixes, and security patches.
              Monitor website performance and user feedback to make necessary improvements.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box >
  );
};

export default Process;