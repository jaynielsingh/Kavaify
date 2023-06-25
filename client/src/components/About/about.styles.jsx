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
    width: "100%",
    display: "flex",
    overflow: "hidden",
    // backgroundColor: '#116175',
    // backgroundColor: "#0D495D",
    backgroundImage: "url('https://www.transparenttextures.com/patterns/ag-square.png')",



  },

  containerWrapper: {
    mt: 15,
    mb: 30,
    display: "flex",
    position: "relative",
    color: "#dadff7",

  },

  titleStyle: {
    fontFamily: "Wallpoet",
    mt: 20,
    color: 'white',
    position: 'relative',
  },


  titleWrapper: {
    my: 5,
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
