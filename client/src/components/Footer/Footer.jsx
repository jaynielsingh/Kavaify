import * as React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright()
{
  return (
    <Typography variant="body2" color="black">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Kavaify
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer()
{
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: "auto",
        bgcolor: "#50c787"
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          color: "#50c787",
        }}
      >
        <Copyright />
      </Box>
    </Box>
  );
}
