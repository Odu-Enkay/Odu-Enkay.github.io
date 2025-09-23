import React from 'react';
import { Box, Typography, Avatar, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#05050a',
        pt: 8,
        position: 'relative',
        px: 2,
      }}
    >
      {/* Intro Text */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ width: '100%', textAlign: 'center' }}
      >
        <Typography variant="h5" sx={{ color: '#aaa', mb: 2 }}>
          Hello! I'm Nkiruka Odu
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: '#ccc',
            mb: 2,
            textAlign: 'center',
            mx: 'auto',
            fontSize: { xs: '1rem', md: '1.25rem' },
          }}
        >
          A Software Developer
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            mb: 4,
            background: 'linear-gradient(90deg,#a855f7,#06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Turning ideas into reality...
        </Typography>
      </motion.div>

      {/* Avatar */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Avatar
          src="images/nk.jpeg"
          sx={{
            width: 160,
            height: 160,
            border: '4px solid #a855f7',
            boxShadow: '0 0 30px rgba(168,85,247,0.3)',
            mb: 3,
          }}
        />
      </motion.div>

      {/* Buttons */}
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
        <Button
          variant="contained"
          href="/resume.pdf"
          download
          sx={{
            background: 'linear-gradient(90deg,#a855f7,#06b6d4)',
            color: '#fff',
            fontWeight: 'bold',
            px: 4,
            py: 1.5,
            '&:hover': { opacity: 0.9, transform: 'scale(1.05)' },
            transition: 'all 0.2s ease-in-out',
          }}
        >
          Download Resume
        </Button>
        <Button
          variant="outlined"
          component="a"
          href="https://www.linkedin.com/in/nkiruka-odu-b4878b248/"
          target="_blank"
          sx={{
            border: '2px solid #06b6d4',
            color: '#06b6d4',
            fontWeight: 'bold',
            px: 4,
            py: 1.5,
            '&:hover': {
              background: 'linear-gradient(90deg,#a855f7,#06b6d4)',
              color: '#fff',
              border: '2px solid transparent',
              transform: 'scale(1.05)',
            },
            transition: 'all 0.2s ease-in-out',
          }}
        >
          Let's Connect
        </Button>
      </Stack>
    </Box>
  );
};

export default Hero;
