import GridViewIcon from "@mui/icons-material/GridView";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import HandymanIcon from "@mui/icons-material/Handyman";
import EmailIcon from "@mui/icons-material/Email";
import StorageIcon from '@mui/icons-material/Storage';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import React from "react";

const classes = {
  icon: {
    fontSize: 30,
    color: "#ff3366",
    py: 5,
  },
};
export const services = [
  {
    id: 0,
    title: "Responsive Design",
    icon: <GridViewIcon sx={classes.icon} />,
    content:
      " Your website will have a responsive design, which will look great on mobile or desktop.",
  },
  {
    id: 1,
    title: "Web Development",
    icon: <DeveloperModeIcon sx={classes.icon} />,
    content:
      "Turn your simple website into an web application with contact forms, admin login page and much more. ",
  },
  {
    id: 2,
    title: "Website Maintenances",
    icon: <HandymanIcon sx={classes.icon} />,
    content:
      "Your website will be up to date as code tend to go out of date.",
  },
  {
    id: 3,
    title: "Domain & Email Setup",
    icon: <EmailIcon sx={classes.icon} />,
    content:
      "Your very own email address to give your business a more look professional. {name@yourcompany.com}",
  },
  {
    id: 4,
    title: "Customer Support",
    icon: <SupportAgentIcon sx={classes.icon} />,
    content:
    "We offer excellent customer support to help when needed."
  },
  {
    id: 5,
    title: "Website Hosting",
    icon: <StorageIcon sx={classes.icon}/>,
    content:
    "We will take care of complicated hosting process, while you stay focus business."
  }
];
