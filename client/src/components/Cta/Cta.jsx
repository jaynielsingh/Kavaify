import {
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

const Cta = () => {
  return (
    <div>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1624811072711-3e3481f355fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3041&q=80)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              mb: "100px",
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h3" align="center" gutterBottom sx={{ mb: 8 }}>
              Why Kavaify?
            </Typography>
            <Card>
              <CardContent sx={{ my: 8 }}>
                <Typography variant="h5" align="center" paragraph>
                  Here at Kavaify, our goal is to keep web development as simple
                  as possible for our customers. Most people aren't tech savvy,
                  so when you use all these technological terms, they tend to
                  get overwhelmed. While keeping everything simple, if you are
                  interested, we can explain the steps along the way so you can
                  have a better understanding of the process.
                </Typography>
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                  <Button color="secondary" href="#contact" variant="contained">
                    Contact Us
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cta;
