import HeroImage from "../../assets/images/hero-bg-3.jpg";

export const headerStyles = {
  wrapper: {
    paddingTop: "350px",
    paddingBottom: "200px",
  },

  backgroundWrapper: {

    minWidth: "100vw",
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${HeroImage})`,

  },

  title: {
    fontFamily: 'Monoton',
    fontSize: "120px",
    color: "black",
    paddingBottom: "50%",
  },

  button: {
    backgroundColor: "#FCB287",
    padding: "5px 20px",
    margin: "10px",
    color: 'black',
    "&:hover": {
      color: "white"
    }
  }
}


