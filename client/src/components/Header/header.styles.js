import HeroImage from "../../assets/images/hero-bg.jpg";

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
    color: "white",
    paddingBottom: "50%",
  },

  button: {
    padding: "5px 20px",
    margin: "10px",
  },
};

