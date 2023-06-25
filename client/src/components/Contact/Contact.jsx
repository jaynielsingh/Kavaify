import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";


const Contact = () =>
{
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) =>
  {
    const { name, value } = event.target;
    setFormData((prevValue) =>
    {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  console.log(formData);

  const handleSubmit = async (event) =>
  {
    try {
      const response = await axios.post("http://localhost:3001/contact", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        // width: "100%",
        // display: "flex",
        // overflow: 'hidden',
        // alignItems: "center",
        // position: 'relative',
        // backgroundImage: `url(${ContactImage})`,
        // backgroundSize: 'cover',
        // backgroundRepeat: "no-repeat",

        // height: "100vh",
      }}
    >
      <Container>
        <Typography align="center" component="h1" variant="h1" sx={{
          mt: 20, mb: 6,
          fontFamily: "Wallpoet",
          color: "whitesmoke",
          position: 'relative'
        }}>
          Contact Us
        </Typography>
        <Typography sx={{
          position: 'relative',
          color: "whitesmoke"
        }} variant="h5" paragraph align="center">Let Us Bring Your Business Online</Typography>

        <Box
          component="form"
          onChange={handleChange}
          onSubmit={handleSubmit}
          sx={{ borderRadius: '25px', backgroundColor: "whitesmoke", color: 'black', px: 5, mt: 6, mb: 10 }}
        >
          <TextField
            required
            name="name"
            id="name"
            label="Name"
            value={formData.name}
            margin="normal"
            variant="filled"
            fullWidth
            autoComplete="name"
            sx={{ borderRadius: 2, backgroundColor: 'white', mt: 5, mb: 2 }}


          />
          <TextField
            required
            name="email"
            value={formData.email}
            id="email"
            label="Email"
            margin="normal"
            type="email"
            fullWidth
            autoComplete="email"
            variant="filled"
            sx={{ borderRadius: 2, backgroundColor: 'white', mt: 5, mb: 2 }}

          />
          <TextField
            required
            name="message"
            value={formData.message}
            id="message"
            label="Enter Your Message"
            margin="normal"
            fullWidth
            multiline
            variant="filled"
            rows={5}
            sx={{ borderRadius: 1, backgroundColor: 'white', mt: 5, mb: 2 }}

          />
          <Button
            fullWidth
            type="submit"
            variant="outlined"
            sx={{ borderRadius: '25px', mt: 5, mb: 5, p: 2,  color: "white" }}
          >
            Send Message
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
