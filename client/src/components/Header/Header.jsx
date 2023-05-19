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
          <Typography sx={headerStyles.content} variant="h6" color="black" paragraph={true}>
            {content["description"]}
          </Typography>
        </Container>
        <Box mt={3}>
          <Button
            href="#features"
            variant="contained"
            sx={headerStyles.button}
          >
            {content["primary-action"]}
          </Button>
          <Button
            href="#contact"
            variant="contained"
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
