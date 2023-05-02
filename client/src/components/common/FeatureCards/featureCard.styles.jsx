export const itemStyles = {
  py: 5,
  px: 5,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "&:hover": {
    boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.2)",
    transform: "scale(1.05)",
  },
  transition: "0.3s",


};

export const featureStyles = {
  sectionWrapper: {
    width: "100%",
    display: "flex",
    overflow: "hidden",
    bgcolor: "secondary.light",
  },

  containerWrapper: {

    display: "flex",
    position: "center",
  },

  backgroundWrapper: {
    pointerEvents: "none",
    position: "absolute",
    top: -70,
  },

  titleWrapper: {
    my: 5,
    display: "center",
  },
};
