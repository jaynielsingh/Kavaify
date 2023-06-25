import React from "react";

import { Container, Grid, Typography, Box } from "@mui/material/";
import { featureStyles } from "./about.styles";
import { featureItems } from "./const/featureItems";
import FeatureCard from "../common/FeatureCards/FeatureCard";


const Features = () =>
{
  return (
    <Box id="about" component="section" sx={featureStyles.sectionWrapper}>
      <Container>
        <Typography sx={featureStyles.titleStyle} variant="h1" color="white" align="center">Why Kavaify?</Typography>
        <Typography sx={{ mt: 5, position: 'relative' }} color='white' paragraph variant="h5" align="center">
          Simple Yet Professional Design
        </Typography>
        <Container sx={featureStyles.containerWrapper}>
          <Box
            sx={featureStyles.backgroundWrapper}
          />
          <Grid container spacing={5}>
            {featureItems.map((service) => (
              <Grid item xs={12} lg={4} id={service.id} key={service.id}>
                <FeatureCard
                  id={service.id}
                  icon={service.icon}
                  title={service.title}
                  content={service.content}
                />
                {/* <Box sx={itemStyles}>
                  <Avatar sizes="" sx={featureStyles.icon}>{item.icon}</Avatar>
                  <Typography variant="h6" sx={featureStyles.titleWrapper}>
                    {item.title}
                  </Typography>
                  <Typography variant="h5" color='white' sx={{fontSize: '20px'}}>
                    {item.content}
                  </Typography>
                </Box> */}
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </Box>
  );
};

export default Features;
