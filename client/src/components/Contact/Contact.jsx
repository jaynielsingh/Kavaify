import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ContactsIcon from "@mui/icons-material/Contacts";
import axios from "axios";
import ContactImage from "../../assets/images/hero-bg-3.jpg"


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
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: 'relative',

        backgroundImage: `url(${ContactImage})`,
        backgroundSize: 'auto',
        backgroundRepeat: "no-repeat",
        opacity: 0.9,

        // height: "100vh",
      }}
    >
      <Typography component="h1" variant="h1" sx={{ mt: 20, mb: 10, fontFamily: "Wallpoet", color: "black" }}>
        Contact Us
      </Typography>
      <ContactsIcon />

      <Box
        component="form"
        onChange={handleChange}
        onSubmit={handleSubmit}
        sx={{ color: 'black',  mt: 6, mb: 10 }}
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
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{ mt: 5, mb: 5, p: 2, backgroundColor: "black", color: "white" }}
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
