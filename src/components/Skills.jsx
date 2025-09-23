import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

const skillCategories = {
  Frontend: [
    "JavaScript",
    "React.js",
    "Blazor",
    "HTML5",
    "CSS",
    "Material UI",
    "jQuery",
    "Bootstrap",
    "UI/UX Design",
  ],
  Backend: [
    "Node.js",
    "Express",
    "Ruby on Rails",
    "C#",
    ".NET Core API",
    "PostgreSQL",
    "SQL Server",
  ],
  Others: ["Git", "GitHub", "AWS", "Azure", "Bash ", "Machine Learning"],
};

export default function Skills() {
  return (
    <Box
      id="skills"
      sx={{
        py: 12,
        px: { xs: 4, md: 8 },
        backgroundColor: "#05050a",
        color: "#fff",
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{
          mb: 8,
          fontWeight: "bold",
          background: "linear-gradient(90deg,#a855f7,#06b6d4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        My Skills
      </Typography>

      {/* CSS Grid container: 1 / 2 / 3 columns responsive.
          gridAutoRows: "1fr" + children height:100% => equal-height cards */}
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          display: "grid",
          gap: 4,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gridAutoRows: "1fr",
          alignItems: "stretch",
        }}
      >
        {Object.entries(skillCategories).map(([category, skills]) => (
          <motion.div
            key={category}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            style={{ height: "100%" }} 
          >
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                background: "#0b0b0f",
                border: "2px solid #0b2652",
                borderRadius: 3,
                color: "#fff",
                overflow: "hidden",
              
                "&:hover": {
                  background: "linear-gradient(90deg,#a855f7,#06b6d4)",
                  boxShadow: "0 12px 30px rgba(11,38,82,0.30)",
                  transform: "translateY(-6px)", 
                },
                transition: "box-shadow 0.25s ease, transform 0.25s ease",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 2,
                    fontWeight: "700",
                    color: "#fff",
                  }}
                >
                  {category}
                </Typography>

                {/* bullet list (left aligned) */}
                <Box
                  component="ul"
                  sx={{
                    listStyleType: "disc",
                    pl: 3,
                    m: 0,
                    color: "#fff",
                    "& li": { mb: 1, fontSize: "0.95rem" },
                  }}
                >
                  {skills.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
