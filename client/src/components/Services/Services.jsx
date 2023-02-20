import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import React from "react";
import { services } from "./const/servicesItems";
import { featureStyles, itemStyles } from "./services.styles";
import FeatureCard from "../common/FeatureCards/FeatureCard";

const Services = () => {
  return (
    <>
      <Container maxWidth="lg" sx={featureStyles.sectionWrapper}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            {services.map((service) => (
              <FeatureCard
                key={service.id}
                id={service.id}
                icon={service.icon}
                title={service.title}
                content={service.content}

              />
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
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
  );
};

export default Services;
