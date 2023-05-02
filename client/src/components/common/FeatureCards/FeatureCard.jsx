import { Box, Container, Typography } from "@mui/material";
import { itemStyles, featureStyles } from "./featureCard.styles";
import React from "react";

const FeatureCard = ({ icon, title, content }) =>
{
  return (

    <Container sx={featureStyles.containerWrapper}>
      <Box sx={itemStyles}>
        {icon}
        <Typography variant="h6" sx={featureStyles.titleWrapper}>
          {title}
        </Typography>
        <Typography variant="h5" sx={featureStyles.contentWrapper}>
          {content}
        </Typography>
      </Box>
    </Container>

  );
};

export default FeatureCard;
