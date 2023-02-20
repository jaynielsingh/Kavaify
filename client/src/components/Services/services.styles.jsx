export const itemStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
  py: 5,
  "&:hover": {
    py: 5,
    boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.2)",
    transform: "scale(1.05)",
  },
  transition: "0.3s",
};

export const featureStyles = {
  sectionWrapper: {
    py: 30,
    width: "100%",
    display: "flex",
    overflow: "hidden",
    bgColor: "secondary.light",
  },

  containerWrapper: {
    mt: 15,
    mb: 30,
    display: "flex",
    position: "relative",
  },

  backgroundWrapper: {
    pointerEvents: "none",
    position: "absolute",
    top: -70,
  },

  titleWrapper: {
    my: 5,
  },
};
