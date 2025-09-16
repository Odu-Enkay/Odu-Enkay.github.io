import React from 'react';
import { Box, Typography, Button, Card, CardMedia } from '@mui/material';

function About() {
  return (
    <Box
      id="about"
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
          fontWeight: 700,
          background: 'linear-gradient(90deg,#a855f7,#06b6d4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        About Me
      </Typography>

      {/* Responsive flex wrapper: column on xs, row on md+ */}
      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 4, md: 6 },
          alignItems: 'center',
        }}
      >
        {/* LEFT: Image column (50% width on md+) */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-start' },
          }}
        >
          <Card
            sx={{
              width: { xs: '320px', sm: '420px', md: '100%' },
              maxWidth: 520,
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(168,85,247,0.18)',
            }}
          >
            <CardMedia
              component="img"
              image="/images/plcholder.jpg"
              alt="About image"
              sx={{
                width: '100%',
                height: { xs: 220, sm: 320, md: 420 },
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </Card>
        </Box>

        {/* RIGHT: Text column (50% width on md+) */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="body1" sx={{ mb: 2, color: '#ccc' }}>
            I'm a Software Developer, passionate about creating sleek, responsive web applications.
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, color: '#ccc' }}>
            I create clean and interactive web interfaces with modern UI techniques.
            I take ownership of my work and eager to learn, grow and build excellent products that would be loved by all!
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Button
              variant="contained"
              href="#contact"
              sx={{
                background: 'linear-gradient(90deg,#a855f7,#06b6d4)',
                boxShadow: '0 8px 20px rgba(168,85,247,0.15)',
                fontWeight: 700,
                '&:hover': { opacity: 0.95 },
              }}
            >
              Contact Me
            </Button >
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
