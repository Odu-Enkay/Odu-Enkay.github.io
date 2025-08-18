import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        background: "#D9D1D0, 50%))",
        color: "#fff",
        py: 3, 
        mt: "auto",
        boxShadow:"10px",
        textAlign: "center",
        minHeight: "80px", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="body1">
        © {year} Odu Nkiruka. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
