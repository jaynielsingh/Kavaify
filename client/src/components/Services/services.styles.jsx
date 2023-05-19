export const itemStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
  "&:hover": {
    py: 5,
    boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.2)",
    transform: "scale(1.05)",
  },
  transition: "0.3s",
};

export const featureStyles = {
  // sectionWrapper: {
  //   py: 6,
  //   width: "100%",
  //   display: "flex",
  //   overflow: "hidden",

  //   // backgroundImage: 'url("https://www.transparenttextures.com/patterns/60-lines.png")',


  // },
  sectionWrapper: {
    width: "100%",
    display: "flex",
    overflow: "hidden",
    backgroundColor: 'black',
    // backgroundColor: "#0D495D",
    // backgroundImage: "url('https://www.transparenttextures.com/patterns/connected.png')",

 


  },
  containerWrapper: {
    mt: 15,
    mb: 30,
    display: "flex",
    position: "relative",
    color: 'white'
  },


  titleWrapper: {
    my: 5,
    color: '#50c787',
  },
};
