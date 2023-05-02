import { Grid, Container, Typography, createTheme } from "@mui/material";
import React from "react";
import GroupIcon from "@mui/icons-material/Group";
import AboutImage from "../../assets/images/about2.jpg";
import { keyframes } from '@emotion/react';

const About = () => {
  const theme = createTheme();
  const classes = {
    container: {
      backgroundColor: "#f8f8f8",
      padding: theme.spacing(8, 0),
    },
    title: {
      fontWeight: "bold",
      marginBottom: theme.spacing(2),
      textAlign: "center",
    },
    subtitle: {
      fontWeight: "bold",
      marginBottom: theme.spacing(2),
      color: theme.palette.primary.main,
    },
    iconContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "80px",
      width: "80px",
      borderRadius: "50%",
      backgroundColor: theme.palette.primary.main,
      marginBottom: theme.spacing(4),
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
      animation: `$iconAnim 1s infinite alternate`,
    },
    icon: {
      fontSize: "36px",
      color: "#fff",
    },
    textContainer: {
      textAlign: "center",
    },
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h3" component="h2" className={classes.title}>
        Who We Are
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <div className={classes.iconContainer}>
            <GroupIcon className={classes.icon} />
          </div>
          <Typography variant="h5" component="h3" className={classes.subtitle}>
            A Collaborative Team
          </Typography>
          <Typography variant="body1" className={classes.textContainer}>
            We are a team of web designers, developers, and marketers who work
            closely together to create beautiful and functional websites that
            help businesses succeed.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.iconContainer}>
            <GroupIcon className={classes.icon} />
          </div>
          <Typography variant="h5" component="h3" className={classes.subtitle}>
            Innovative Thinkers
          </Typography>
          <Typography variant="body1" className={classes.textContainer}>
            We are always looking for new and innovative ways to solve problems
            and improve the user experience for our clients' websites.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.iconContainer}>
            <GroupIcon className={classes.icon} />
          </div>
          <Typography variant="h5" component="h3" className={classes.subtitle}>
            Results-Driven
          </Typography>
          <Typography variant="body1" className={classes.textContainer}>
            Our ultimate goal is to deliver results that help our clients grow
            their businesses online. We are dedicated to achieving measurable
            success for every project we work on.
          </Typography>
        </Grid>
      </Grid>
    </Container>

    // <Grid container component="main" sx={{ height: '100vh' }}>
    //     <Grid
    //       item
    //       xs={12}
    //       sx={{
    //         backgroundImage: `url(${AboutImage})`,
    //         backgroundRepeat: 'no-repeat',
    //         backgroundSize: 'cover',
    //         backgroundPosition: 'center',
    //       }}
    //     />

    //   </Grid>
  );
};

export default About;
