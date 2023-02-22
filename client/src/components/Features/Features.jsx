import React from "react";

import { Container, Grid, Typography, Box, Avatar } from "@mui/material/";
import { itemStyles, featureStyles } from "./features.styles";
import { featureItems } from "./const/featureItems";


const Features = () => {
  return (
    <Box component="section" sx={featureStyles.sectionWrapper}>
      <Container sx={featureStyles.containerWrapper}>
        <Box
          component="img"
          src="https://mui.com/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={featureStyles.backgroundWrapper}
        />
        <Grid container spacing={5}>
          {featureItems.map((item) => (
            <Grid item xs={12} md={4} id={item.id} key={item.id}>
              <Box sx={itemStyles}>
                <Avatar sizes="" sx={{bgcolor: "black", color: "#ff3366", width: 55, height: 55}}>{item.icon}</Avatar>
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
    </Box>
  );
};

export default Features;
