import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { headerStyles, content } from "./header.styles";

const Header = () => {
  return (
    <Container sx={headerStyles.backgroundWrapper}>
      <Box textAlign="center" color="common.white" sx={headerStyles.wrapper}>
        <Typography
          justifyContent={"center"}
          variant="h2"
          component="h2"
          gutterBottom={true}
        >
          <Typography sx={headerStyles.icon} variant="h1" component="span">
            {content['headerIcon']}
          </Typography>
          <Typography sx={headerStyles.title} variant="h2" component="span">
            {content["title"]}{" "}
          </Typography>
        </Typography>
        <Container maxWidth="sm">
          <Typography
            variant="subtitle1"
            color="white"
            paragraph={true}
          >
            {content["description"]}
          </Typography>
        </Container>
        <Box mt={3}>
          <Button
            href="#cta"
            variant="contained"
            color="secondary"
            sx={headerStyles.button}
          >
            {content["primary-action"]}
          </Button>
          <Button href="#contact" variant="outlined" color="secondary" sx={headerStyles.button}>
            {content["secondary-action"]}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
