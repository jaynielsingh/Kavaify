import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DiscountIcon from "@mui/icons-material/Discount";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const classes = {
  icon: {
    fontSize: 35,
    color: "#07F8EC",
    py: 2,
  },
};

export const featureItems = [
  {
    id: 0,
    title: "Results-Oriented Approach:",
    content:
      " We deliver measurable results that drive business growth, ensuring a high return on investment for our clients.",
    icon: <DesignServicesIcon sx={classes.icon} />,
  },
  {
    id: 1,
    title: "All-in-One Digital Solutions",
    content:
      "Our comprehensive digital solutions encompass web design, branding, SEO, and more, providing clients with a one-stop-shop for their online success.",
    icon: <DiscountIcon sx={classes.icon} />,
  },
  {
    id: 2,
    title: "Reliability and Timely Delivery",
    content:
      'We pride ourselves on delivering projects on time and within budget, maintaining clear communication channels with clients and providing a professional and dependable service.',
    icon: <SupportAgentIcon sx={classes.icon} />,
  },
];
