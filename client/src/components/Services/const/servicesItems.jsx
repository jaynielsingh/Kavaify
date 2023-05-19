import GridViewIcon from "@mui/icons-material/GridView";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import HandymanIcon from "@mui/icons-material/Handyman";
import EmailIcon from "@mui/icons-material/Email";
import StorageIcon from "@mui/icons-material/Storage";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import React from "react";

const classes = {
  icon: {
    fontSize: 30,
    color: "#FCB287",
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
    title: "Maintenances",
    icon: <HandymanIcon sx={classes.icon} />,
    content: "Website maintenance to ensure your site is working and to ensure there is no downtime.",
  },
  {
    id: 3,
    title: "Domain & Email Setup",
    icon: <EmailIcon sx={classes.icon} />,
    content:
      "Email address to give your business a more look professional. {name@yourcompany.com}",
  },
  {
    id: 4,
    title: "Logo Design",
    icon: <SupportAgentIcon sx={classes.icon} />,
    content:
      "Create an amazing logo for your business and really make you stand out from the crowd.",
  },
  {
    id: 5,
    title: "Hosting",
    icon: <StorageIcon sx={classes.icon} />,
    content:
      "Take care of complicated hosting process, while you stay focused on your business.",
  },
];
