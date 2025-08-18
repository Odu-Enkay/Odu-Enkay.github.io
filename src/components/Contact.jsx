import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Stack,
  IconButton,
} from "@mui/material";
import { LinkedIn, Twitter, GitHub, Email } from "@mui/icons-material";

export default function Contact() {
  const form = useRef();

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log("Message sent successfully!", result.text);
        alert("Your message has been sent!");
      },
      (error) => {
        console.log("Failed to send message:", error.text);
        alert("Something went wrong, please try again.");
      }
    );
  };

  return (
    <Box
      id="contact"
      sx={{
        minHeight: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        p: 4,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          maxWidth: 800,
          width: "100%",
          p: 4,
          borderRadius: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", mb: 2 }}>
          Contact Me
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          I’d love to hear from you! Fill out the form below or reach me via my
          socials.
        </Typography>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail}>
          <Stack spacing={2}>
            <TextField
              label="Your Name"
              name="user_name"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Your Email"
              name="user_email"
              type="email"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Your Message"
              name="message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              required
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ 
                 backgroundImage:"url(/images/bg.png)",
         backgroundSize:'cover',
        backgroundPosition: 'center',
         
                "&:hover": { backgroundColor: "#115293" } }}
            >
              Send Message
            </Button>
          </Stack>
        </form>

        {/* Social Media Links */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mt: 4 }}
        >
          <IconButton
            color="primary"
            component="a"
            href="https://www.linkedin.com/in/nkiruka-odu-b4878b248/"
            target="_blank"
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            color="primary"
            component="a"
            href="https://twitter.com"
            target="_blank"
          >
            <Twitter />
          </IconButton>
          <IconButton
            color="primary"
            component="a"
            href="https://github.com/Odu-Enkay"
            target="_blank"
          >
            <GitHub />
          </IconButton>
          <IconButton
            color="primary"
            component="a"
            href="mailto:odunkiruka@gmail.com"
          >
            <Email />
          </IconButton>
        </Stack>
      </Paper>
    </Box>
  );
}
