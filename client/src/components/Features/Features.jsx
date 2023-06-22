import React from "react";

import { Container, Grid, Typography, Box, Avatar } from "@mui/material/";
import { itemStyles, featureStyles } from "./features.styles";
import { featureItems } from "./const/featureItems";


const Features = () =>
{
  return (
    <Box id="features" component="section" sx={featureStyles.sectionWrapper}>
      <Container>
        <Typography sx={featureStyles.titleStyle} variant="h1" align="center">Why Kavaify?</Typography>
        <Typography sx={{fontSize: '30px', mt: 5, position: 'relative'}}color='white' paragraph variant="h5" align="center">
          Simple Yet Professional Design
        </Typography>
        <Container sx={featureStyles.containerWrapper}>
          <Box
            sx={featureStyles.backgroundWrapper}
          />
          <Grid container spacing={5}>
            {featureItems.map((item) => (
              <Grid item xs={12} lg={4} id={item.id} key={item.id}>
                <Box sx={itemStyles}>
                  <Avatar sizes="" sx={featureStyles.icon}>{item.icon}</Avatar>
                  <Typography variant="h6" sx={featureStyles.titleWrapper}>
                    {item.title}
                  </Typography>
                  <Typography variant="h5" sx={featureStyles.contentWrapper}>
                    {item.content}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </Box>
  );
};

export default Features;
