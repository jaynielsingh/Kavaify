import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { headerStyles } from "./header.styles";
import { content } from "./const/headerItems";

const Header = () => {
  return (
    <Container id="home" sx={headerStyles.backgroundWrapper}>
      <Box textAlign="center" color="common.white" sx={headerStyles.wrapper}>
        <Typography
          justifyContent={"center"}
          variant="h2"
          component="h2"
          gutterBottom={true}
        >
          <Typography sx={headerStyles.title} variant="h2" component="span">
            {content["title"]}{" "}
          </Typography>
        </Typography>
        <Container maxWidth="sm">
          <Typography sx={{my: 8}} variant="subtitle1" color="white" paragraph={true}>
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
          <Button
            href="#contact"
            variant="outlined"
            color="secondary"
            sx={headerStyles.button}
          >
            {content["secondary-action"]}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
