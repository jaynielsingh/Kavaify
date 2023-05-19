import HeroImage from "../../assets/images/hero-bg-4.jpg";

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
    color: "#dadff7",
    paddingBottom: "50%",

  },

  content: {
    my: 8,
    color: "#dadff7",
    pt: "70px",
  },

  button: {
    backgroundColor: "#50c878",
    padding: "5px 20px",
    margin: "10px",
    color: 'black',
    "&:hover": {
      color: "white"
    }
  }
}


