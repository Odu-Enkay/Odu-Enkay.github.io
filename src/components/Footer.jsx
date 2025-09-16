import React from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import { LinkedIn, GitHub, Twitter } from "@mui/icons-material";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(90deg, #0b0b0f, #1f1f1f)",
        color: "#ccc",
        py: 4,
        mt: "auto",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Stack direction="row" spacing={2}>
        <IconButton component="a" href="https://www.linkedin.com" target="_blank">
          <LinkedIn sx={{ color: "#0ea5e9" }} />
        </IconButton>
        <IconButton component="a" href="https://github.com/Odu-Enkay" target="_blank">
          <GitHub sx={{ color: "#fff" }} />
        </IconButton>
        <IconButton component="a" href="https://twitter.com" target="_blank">
          <Twitter sx={{ color: "#1da1f2" }} />
        </IconButton>
      </Stack>
      <Typography variant="body2">
        © {year} Odu Nkiruka. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
