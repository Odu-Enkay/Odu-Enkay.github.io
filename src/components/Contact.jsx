// src/components/Contact.jsx

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Box, TextField, Button, Typography, Paper, Stack, IconButton, Grid } from '@mui/material';
import { LinkedIn, Twitter, GitHub, Email } from '@mui/icons-material';

const Contact = () => {
  const form = useRef();

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log('Message sent successfully!', result.text);
        alert('Your message has been sent!');
      },
      (error) => {
        console.log('Failed to send message:', error.text);
        alert('Something went wrong, please try again.');
      }
    );
  };

  return (
    <Box id="contact" sx={{ py: 12, px: { xs: 4, md: 8 }, backgroundColor: '#05050a', color: '#fff' }}>
      <Typography variant="h3" align="center" sx={{ mb: 8, fontWeight: 'bold', background: 'linear-gradient(90deg,#a855f7,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Get In Touch
      </Typography>
      <Grid container spacing={6} maxWidth="1200px" mx="auto">
        {/* Contact Info */}
        <Grid item xs={12} md={5}>
          <Stack spacing={4}>
            <Paper sx={{ p: 3, background: '#0b0b0f', borderRadius: 3, boxShadow: '0 4px 20px rgba(168,85,247,0.2)' }}>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold', color: '#fff' }}>Email</Typography>
              <Typography color="text.secondary">youremail@gmail.com</Typography>
            </Paper>
            <Paper sx={{ p: 3, background: '#0b0b0f', borderRadius: 3, boxShadow: '0 4px 20px rgba(168,85,247,0.2)' }}>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold', color: '#fff' }}>Location</Typography>
              <Typography color="text.secondary">Your City, Country</Typography>
            </Paper>
            <Paper sx={{ p: 3, background: '#0b0b0f', borderRadius: 3, boxShadow: '0 4px 20px rgba(168,85,247,0.2)' }}>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold', color: '#fff' }}>Connect with me</Typography>
              <Stack direction="row" spacing={2}>
                <IconButton color="primary" component="a" href="https://www.linkedin.com/in/nkiruka-odu-b4878b248/" target="_blank">
                  <LinkedIn />
                </IconButton>
                <IconButton color="primary" component="a" href="https://twitter.com" target="_blank">
                  <Twitter />
                </IconButton>
                <IconButton color="primary" component="a" href="https://github.com/Odu-Enkay" target="_blank">
                  <GitHub />
                </IconButton>
                <IconButton color="primary" component="a" href="mailto:odunkiruka@gmail.com">
                  <Email />
                </IconButton>
              </Stack>
            </Paper>
          </Stack>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 4, borderRadius: 3, background: '#0b0b0f', boxShadow: '0 8px 30px rgba(168,85,247,0.2)' }}>
            <form ref={form} onSubmit={sendEmail}>
              <Stack spacing={2}>
                <TextField label="Your Name" name="name" variant="outlined" fullWidth required sx={{ input: { color: '#fff' }, label: { color: '#ccc' } }} />
                <TextField label="Your Email" name="email" type="email" variant="outlined" fullWidth required sx={{ input: { color: '#fff' }, label: { color: '#ccc' } }} />
                <TextField label="Message Title" name="title" fullWidth required sx={{ input: { color: '#fff' }, label: { color: '#ccc' } }} />
                <TextField label="Your Message" name="message" multiline rows={4} variant="outlined" fullWidth required sx={{ input: { color: '#fff' }, label: { color: '#ccc' } }} />
                <Button type="submit" variant="contained" size="large" sx={{ background: 'linear-gradient(90deg,#a855f7,#06b6d4)', fontWeight: 'bold', '&:hover': { opacity: 0.9 } }}>
                  Send Message
                </Button>
              </Stack>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;