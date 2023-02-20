import GridViewIcon from "@mui/icons-material/GridView";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import ApiIcon from "@mui/icons-material/Api";
import React from "react";

const classes = {
  icon: {
    fontSize: 30,
    color: "#3f51b5",
    py: 10
  },
};
export const services = [
  {
    id: 1,
    title: "Web Design",
    icon: <GridViewIcon sx={classes.icon} />,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
  },
  {
    id: 2,
    title: "Web Development",
    icon: <DeveloperModeIcon sx={classes.icon} />,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
  },
  {
    id: 3,
    title: "Search Engine Optimization",
    icon: <ApiIcon className={classes.icon} />,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
  },
  {
    id: 4,
    title: "Email Setup",
    icon: <DeveloperModeIcon sx={classes.icon}/>,
    content: " Set up your email @(yourdomail).com "
  }
];
