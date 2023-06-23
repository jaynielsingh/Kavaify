import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { services } from "./const/servicesItems";
import { featureStyles } from "./services.styles";
import FeatureCard from "../common/FeatureCards/FeatureCard";

const Services = () =>
{
  return (
    <Box id="services" component="section" sx={featureStyles.sectionWrapper}>
      <Container>
        <Typography variant="h1" align="center" sx={{ fontFamily: "Wallpoet", mt: 20, mb:6, color: 'white' }}>
          What We Offer
        </Typography>
        <Typography align="center" color='white' variant="h5" paragraph sx={{
          position: 'relative',
        }} >Everything For Your Business To Succeed Online</Typography>
        <Box >
          <Container maxWidth='lg' sx={featureStyles.containerWrapper}>
            <Grid container spacing={5}>
              {services.map((service) => (
                <Grid sx={{
                  py: 6
                }} key={service.id} item xs={12} lg={4} md={6}>
                  <FeatureCard
                    id={service.id}
                    icon={service.icon}
                    title={service.title}
                    content={service.content}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};
// <>
//   <Box component="section" sx={featureStyles.sectionWrapper}>
//     <Container>
//       <Grid container spacing={3}>
//         {services.map((service) => (
//           <Grid item xs={12} md={4} sm={false} key={service.id}>
//             <Card sx={itemStyles}>
//               <CardContent>
//                 {service.icon}
//                 <Typography variant="h5" gutterBottom>
//                   {service.title}
//                 </Typography>
//                 <Typography variant="body1">
//                   {service.description}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   </Box>
// </>

export default Services;
