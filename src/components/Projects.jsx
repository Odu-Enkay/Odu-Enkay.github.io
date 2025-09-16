// src/components/Projects.jsx

import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: 'BuyBuy',
    description: 'A full-stack web application that allows users to buy, sell, and swap products. It features user authentication, product listings, favorites, seller tools, and real-time chat.',
    imageSrc: '/images/buybuy.png',
  },
  {
    title: 'Resume Matcher',
    description: 'A full-stack web application that allows job Applicants to match their resume wiyh the job description and get the similarity score. If there is need for improvement, it recoomends the',
    imageSrc: '/images/photolab.png',
  },
  {
    title: 'World Last Designs',
    description: 'A full stack single web app photo gallery, featuring topic-based photo filtering',
    imageSrc: '/images/img1.png',
  },
];

const ProjectCard = ({ project }) => (
  <motion.div whileHover={{ scale: 1.05 }}>
    <Card sx={{ background: '#0b0b0f', borderRadius: 3, boxShadow: '0 8px 30px rgba(168,85,247,0.2)', overflow: 'hidden' }}>
      <CardMedia component="img" image={project.imageSrc} alt={project.title} sx={{ height: 200, objectFit: 'cover' }} />
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#fff' }}>{project.title}</Typography>
        <Typography variant="body2" color="text.secondary">{project.description}</Typography>
      </CardContent>
    </Card>
  </motion.div>
);

const Projects = () => {
  return (
    <Box id="projects" sx={{ py: 12, px: { xs: 4, md: 8 }, backgroundColor: '#05050a' }}>
      <Typography variant="h3" align="center" sx={{ mb: 8, fontWeight: 'bold', background: 'linear-gradient(90deg,#a855f7,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Featured Projects
      </Typography>
      <Grid container spacing={6} maxWidth="1200px" mx="auto">
        {projectsData.map((project) => (
          <Grid item xs={12} md={4} key={project.title}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
