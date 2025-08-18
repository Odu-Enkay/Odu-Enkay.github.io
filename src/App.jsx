import React from "react";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

function App() {
  return (
    <Box
      sx={{
        backgroundImage: "url(images/bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Navbar - full width */}
      <Navbar />

      {/* Wrapper for main content */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          mt: 12, // space for fixed navbar
          mb: 4,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            borderRadius: 4,
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            p: 4,
          }}
        >
          <Carousel />
          <About />
          <Projects />
          <Contact />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
