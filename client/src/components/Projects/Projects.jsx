import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { images } from "./const/projectsItems";
import { ImageBackdrop, ImageIconButton } from "./projects.styles";

export default function Projects()
{
  return (
    <Container id='portfolio' component="section" sx={{ mt: "100px", mb: 4 }}>
      <Typography variant="h2" marked="center" align="center" sx={{fontFamily: "Wallpoet"}} component="h2">
        Recent Projects
      </Typography>
      <Box sx={{ mt: "100px", mb: "200px", display: "flex", flexWrap: "wrap" }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            sx={{
              width: image.width,
            }}
            href={image.link}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: "cover",
                backgroundPosition: "center 40%",
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "common.white",
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
