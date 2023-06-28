import * as React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import BottomWaveDivider from "../common/bottomDivider/bottomDivider";

function Copyright()
{
  return (
    <Typography variant="body2" color="white">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Kavaify
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer()
{
  return (
    <Box
      component="footer"
      sx={{
        display: 'relative',
        py: 2,
        px: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          position: 'relative',
          zIndex: 1
        }}
      >
        <Copyright />
      <BottomWaveDivider />
      </Box>
    </Box>
  );
}
