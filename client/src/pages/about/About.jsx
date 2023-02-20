import { Card, Grid } from "@mui/material";
import React from "react";
import NavBar from "../../components/Navbar/Navbar";

const About = () => {
  return (
    <>
      <NavBar />
      <Grid container>
        <Grid item xs={12} md={4} sm={6}>
          <Card>

          </Card>
        </Grid>
      </Grid> 
    </>
  );
};

export default About;
