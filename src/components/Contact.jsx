import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Box, TextField, Button, Typography, Paper, Stack, IconButton } from '@mui/material';
import { LinkedIn, Twitter, GitHub, Email, LocationOn } from '@mui/icons-material';

const Contact = () => {
  const form = useRef();

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        alert('Your message has been sent!');
      },
      () => {
        alert('Something went wrong, please try again.');
      }
    );
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 12,
        px: { xs: 4, md: 8 },
        backgroundColor: '#05050a',
        color: '#fff',
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{
          mb: 8,
          fontWeight: 'bold',
          background: 'linear-gradient(90deg,#a855f7,#06b6d4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Get In Touch
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 6,
          maxWidth: 1200,
          mx: 'auto',
        }}
      >
        {/* Contact Info Left */}
        <Stack spacing={4} flex={1}>
          {/* Email */}
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              background: '#0b0b0f',
              borderRadius: 3,
              boxShadow: '0 4px 20px rgba(168,85,247,0.2)',
            }}
          >
            <Email sx={{ color: '#a855f7' }} />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
                Email
              </Typography>
              <Typography sx={{ color: '#ccc' }}>
                <a href="mailto:odunkiruka@gmail.com" style={{ color: '#ccc', textDecoration: 'underline' }}>
                  odunkiruka@gmail.com
                </a>
              </Typography>
            </Box>
          </Paper>

          {/* Location */}
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              background: '#0b0b0f',
              borderRadius: 3,
              boxShadow: '0 4px 20px rgba(168,85,247,0.2)',
            }}
          >
            <LocationOn sx={{ color: '#06b6d4' }} />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
                Location
              </Typography>
              <Typography sx={{ color: '#ccc' }}>Calgary AB, Canada</Typography>
            </Box>
          </Paper>

          {/* Socials */}
          <Paper
            sx={{
              p: 3,
              background: '#0b0b0f',
              borderRadius: 3,
              boxShadow: '0 4px 20px rgba(168,85,247,0.2)',
            }}
          >
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold', color: '#fff' }}>
              Connect with me
            </Typography>
            <Stack direction="row" spacing={2}>
              <IconButton color="primary" component="a" href="https://www.linkedin.com/in/nkiruka-odu-b4878b248/" target="_blank">
                <LinkedIn sx={{ color: '#0ea5e9' }} />
              </IconButton>
              <IconButton color="primary" component="a" href="https://twitter.com" target="_blank">
                <Twitter sx={{ color: '#1da1f2' }} />
              </IconButton>
              <IconButton color="primary" component="a" href="https://github.com/Odu-Enkay" target="_blank">
                <GitHub sx={{ color: '#fff' }} />
              </IconButton>
              <IconButton color="primary" component="a" href="mailto:odunkiruka@gmail.com">
                <Email sx={{ color: '#a855f7' }} />
              </IconButton>
            </Stack>
          </Paper>
        </Stack>

        {/* Contact Form Right */}
        <Box flex={1}>
          <Paper
            sx={{
              p: 4,
              borderRadius: 3,
              background: '#0b0b0f',
              boxShadow: '0 8px 30px rgba(168,85,247,0.2)',
            }}
          >
            <form ref={form} onSubmit={sendEmail}>
              <Stack spacing={2}>
                <TextField
                  label="Your Name"
                  name="name"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{
                    input: { color: '#fff' },
                    label: { color: '#ccc' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#555' },
                      '&:hover fieldset': { borderColor: '#a855f7' },
                      '&.Mui-focused fieldset': { borderColor: '#06b6d4' },
                    },
                  }}
                />
                <TextField
                  label="Your Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{
                    input: { color: '#fff' },
                    label: { color: '#ccc' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#555' },
                      '&:hover fieldset': { borderColor: '#a855f7' },
                      '&.Mui-focused fieldset': { borderColor: '#06b6d4' },
                    },
                  }}
                />
                <TextField
                  label="Message Title"
                  name="title"
                  fullWidth
                  required
                  sx={{
                    input: { color: '#fff' },
                    label: { color: '#ccc' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#555' },
                      '&:hover fieldset': { borderColor: '#a855f7' },
                      '&.Mui-focused fieldset': { borderColor: '#06b6d4' },
                    },
                  }}
                />
                <TextField
                  label="Your Message"
                  name="message"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                  required
                  sx={{
    '& .MuiInputBase-input': { color: '#fff' }, 
    '& .MuiInputBase-inputMultiline': { color: '#fff' },
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: '#555' },
      '&:hover fieldset': { borderColor: '#a855f7' },
      '&.Mui-focused fieldset': { borderColor: '#06b6d4' },
    },
    '& label': { color: '#ccc' },
  }}
/>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    background: 'linear-gradient(90deg,#a855f7,#06b6d4)',
                    fontWeight: 'bold',
                    '&:hover': { opacity: 0.9 },
                  }}
                >
                  Send Message
                </Button>
              </Stack>
            </form>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
