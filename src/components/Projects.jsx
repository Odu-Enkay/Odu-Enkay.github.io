
import React from "react";
import { Card, CardContent, CardActions, Button, Box,  Typography, Grid, CardMedia} from '@mui/material';
import{ Code, Work, PhotoLibrary} from "@mui/icons-material";

const projects = [
  {
    title: "BuyBuy ecommerce webApp",
    description: 'A full-stack web application that allows users to buy, sell, and swap products. It features user authentication, product listings, favorites, seller tools, and real-time chat. Tech Stack: Rails API, PostgreSQL, React, Material UI, CSS, Actioncable',
    icon: <Work sx={{ fontSize: 28, color: "white" }} />,
    link: 'https://github.com/manavpanchotiya/BuyBuy'
  },

  { title: "Resume Matcher webApp",
    description: 'A full-stack web application that allows job Applicants to match their resume wiyh the job description and get the similarity score. If there is need for improvement, it recoomends the keywords to add to the resume',
    icon: <Code sx={{ fontSize: 28, color: "white" }} />,
    link: 'https://github.com/Odu-Enkay/resume_match'
  },

  { title: "Photolap webApp",
    description: 'A A full stack single web app photo gallery, featuring topic-based photo filtering Tech Stack: React js, node js, PostgreSQL',
    icon:  <PhotoLibrary sx={{ fontSize: 28, color: "white" }} />,
    link: 'https://github.com/Odu-Enkay/photolabs-starter'
  },
]

const Projects = () => {
  
  return (
    <section
      id="projects"
      style={{
        minHeight: "100px",
        padding: "20px 10px",
        backgroundColor: "#FCF8F7",
      }}
    >
      <Box 
      sx={{
        display:"flex",
        justifyContent:"center",
        /* backgroundImage:"url(/images/bg.png)",
         backgroundSize:'cover',
        backgroundPosition: 'center', */
        px:2,
        py:1,
        borderRadius:"8px",
      }}
      >
      
      {/* Section Title */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#000", mb: 5 }}
      >
        
        My Projects
      </Typography> </Box>

    <div style={{ 
      display: 'flex',
      justifyContent: 'center',
      }}>

        {/* render the projects in grids */}
  
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 345,
                height: "100%",
                borderRadius:"16px",
                boxShadow:3,
                display: "flex",
                textAlign:"center",
                flexDirection: "column",
                paddingTop:2,
              }}
            >

               {/* Gradient Rounded Icon */}
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                  background: "linear-gradient(90deg, #FF9800, #ff6a00)",
                  color: "white",
                }}
              >
                {project.icon}
              </Box>


             {/*  <CardMedia
                component="img"
                height="180"
                image={project.image}
                alt={project.title}
              /> */}

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: "-webkit-box",
                    WebkitLineClamp: 4, 
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions 
              sx={{
                justifyContent: "center",
              }}>
                <Button size="small" href={project.link}>
                  View Project
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
     </section>
  );
};

export default Projects;