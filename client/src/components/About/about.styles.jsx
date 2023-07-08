export const itemStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
  py: 5,
  boxShadow: "0px 0px 20px 0px #C0703F",
  "&:hover": {
    boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.2)",
    transform: "scale(1.05)",
  },
  transition: "0.5s",

};

export const featureStyles = {
  sectionWrapper: {
    py: 3,
    width: "100vw",
    position: 'relative',
    display: "flex",
    overflow: "hidden",
    backgroundImage: "url('https://www.transparenttextures.com/patterns/cartographer.png')",



  },

  containerWrapper: {
    mt: 15,
    mb: 10,
    display: "flex",
    position: "relative",
    color: "#dadff7",

  },

  titleStyle: {
    fontFamily: "Wallpoet",
    my: 4,
    color: 'white',
    position: 'relative',
  },


  titleWrapper: {
    my: 3,
    color: "white",
  },

  contentWrapper: {

  },

  icon: {
    bgcolor: "black",
    color: "#C0703F",
    width: 55,
    height: 55
  }
};
