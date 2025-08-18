import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      elevation={4}
      sx={{
        backgroundImage: "url(/images/bg.png)",
        backgroundSize:'cover',
        backgroundPosition: 'center',
        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        left: 0,
        right: 0, 
      }}
    >
      <Toolbar
        disableGutters 
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
          maxWidth: "1200px", 
          margin: "0 auto",   
          px: 2,            
        }}
      >
        {/*I will place my Logo / Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#FF9800",
            letterSpacing: 1,
          }}
        >
          Nkiruka Odu
        </Typography>

        {/* Nav Links */}
        <Box>
          {["About", "Projects", "Contact"].map((item) => (
            <Button
              key={item}
              href={`#${item.toLowerCase()}`}
              sx={{
                color: "#FFFFFF",
                textTransform: "none",
                fontSize: "1rem",
                mx: 1.5,
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#03A9F4",
                  transform: "translateY(-2px)",
                },
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
