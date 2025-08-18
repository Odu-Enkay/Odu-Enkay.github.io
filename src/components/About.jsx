import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";

const About = () => {
  return (
    <section id="about" style={{ minHeight: "100px", paddingTop: "60px" }}>
      <Box 
      sx={{
        display:"flex",
        justifyContent:"center",
        backgroundImage:"url(/images/bg.png)",
         backgroundSize:'cover',
        backgroundPosition: 'center',
        px:2,
        py:1,
        borderRadius:"8px",
      }}
      >
      <Typography 
        variant="h4" 
        align="center" 
        gutterBottom 
        sx={{ fontWeight: "bold", color: "#FF9800" }}
      >
        About Me
      </Typography>
       </Box>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Card
            sx={{
              
              boxShadow: "0px 6px 20px rgba(0,0,0,0.1)",
              backgroundColor: "#FCF8F7", // wrapper bg
              padding: 2,
            }}
          >
            <CardContent>
              <Typography variant="body1" align="center" sx={{ color: "#333", lineHeight: 1.8 }}>
                I am a motivated <strong> full-stack developer</strong> with strong skills in 
                <strong> JavaScript, Node.js, Express, React, Advanced CSS, Bootstrap, Material UI, Ruby on Rails,  and PostgreSQL</strong>.  
                I enjoy building web applications that solve real-world problems, and I bring
                valuable experience from customer-focused roles that sharpened my 
                <strong> communication</strong> and <strong>teamwork</strong> skills.  
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </section>
  );
};

export default About;
