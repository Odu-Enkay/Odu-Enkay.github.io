import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";

export default function Navbar() {
  const menuItems = ["Home", "Projects", "Skills", "About", "Contact"];

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "rgba(15, 15, 15, 0.95)", 
        boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
        zIndex: 1300, 
      }}
    >
      <Toolbar
        sx={{
          justifyContent: { xs: "center", md: "flex-end" },
          px: { xs: 2, md: 8 },
        }}
      >
        {menuItems.map((item) => (
          <Button
            key={item}
            href={`#${item.toLowerCase()}`}
            sx={{
              color: "#ccc",
              fontWeight: "500",
              mx: 1,
              textTransform: "uppercase", 
              "&:hover": {
                color: "#0ff",
                textShadow: "0 0 8px #0ff",
                transform: "scale(1.05)",
                transition: "all 0.2s ease-in-out",
              },
            }}
          >
            {item}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}
