import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: 'BuyBuy',
    description:
      'A full-stack web application that allows users to buy, sell, and swap products. It features user authentication, product listings, favorites, seller tools, and real-time chat.',
    imageSrc: '/images/buybuy.png',
    projectLink: '#',
  },
  {
    title: 'Resume Matcher',
    description:
      'A full-stack web application that allows job applicants to match their resume with the job description and get the similarity score. It also recommends improvements.',
    imageSrc: '/images/photolab.png',
    projectLink: '#',
  },
  {
    title: 'Photolab',
    description:
      'A full-stack single-page web app photo gallery, featuring topic-based photo filtering.',
    imageSrc: '/images/photolab.png',
    projectLink: '#',
  },
];

const ProjectCard = ({ project }) => (
  <motion.div whileHover={{ scale: 1.03 }} style={{ height: '100%' }}>
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: '#0b0b0f',
        borderRadius: 3,
        boxShadow: '0 8px 30px rgba(168,85,247,0.2)',
        overflow: 'hidden',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        '&:hover': {
          boxShadow: '0 12px 40px rgba(168,85,247,0.4)',
          transform: 'translateY(-6px)',
        },
      }}
    >
      {/* Image at top */}
      <CardMedia
        component="img"
        image={project.imageSrc}
        alt={project.title}
        sx={{ height: 180, objectFit: 'cover' }}
      />
      {/* Content grows to fill space */}
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 'bold', mb: 1, color: '#fff', textAlign: 'center' }}
        >
          {project.title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#ccc', mb: 2, textAlign: 'center' }}>
          {project.description}
        </Typography>
        {/* Button pinned at bottom */}
        <Box sx={{ mt: 'auto', textAlign: 'center' }}>
          <Button
            variant="contained"
            href={project.projectLink}
            target="_blank"
            sx={{
              background: 'linear-gradient(90deg,#a855f7,#06b6d4)',
              color: '#fff',
              fontWeight: 'bold',
              '&:hover': {
                background: 'linear-gradient(90deg,#06b6d4,#a855f7)',
              },
            }}
          >
            View Project
          </Button>
        </Box>
      </CardContent>
    </Card>
  </motion.div>
);

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        py: 12,
        px: { xs: 4, md: 8 },
        backgroundColor: '#05050a',
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
        Featured Projects
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gap: 4,
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gridAutoRows: '1fr', 
          maxWidth: 1200,
          mx: 'auto',
        }}
      >
        {projectsData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
