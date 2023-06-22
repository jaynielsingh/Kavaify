export const itemStyles = {
  py: 5,
  px: 5,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "0px 0px 20px 0px rgba(0,100,0,0.2)",
  "&:hover": {
    boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.2)",
    transform: "scale(1.05)",
  },
  transition: "0.5s",


};

export const featureStyles = {

  // containerWrapper: {

  //   display: "flex",
  //   position: "center",
  // },



  titleWrapper: {
    my: 5,
    display: "center",
    color: 'white'

  },
};

// @-webkit-keyframes glow {
//   from {
//     text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
//   }
//   to {
//     text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
//   }
// }