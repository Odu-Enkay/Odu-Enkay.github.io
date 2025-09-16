

import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { motion } from 'framer-motion';


const Hero = () => {
return (
<Box id="home" sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', backgroundColor: '#05050a', pt: 8, position: 'relative' }}>
<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
<Typography variant="h5" sx={{ color: '#aaa', mb: 2 }}>Hello! I'm Nkiruka Odu</Typography>
<Typography variant="h2" sx={{ fontWeight: 'bold', mb: 3, background: 'linear-gradient(90deg,#a855f7,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
Efficiency is rooted in simplicity.
</Typography>
<Typography variant="body1" sx={{ maxWidth: 600, color: '#ccc', mb: 4 }}>
Hi, I'm a Software Developer I create clean and interactive web interfaces with modern UI techniques.
</Typography>
</motion.div>
<motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, duration: 0.8 }}>
<Avatar src="https://via.placeholder.com/150" sx={{ width: 160, height: 160, border: '4px solid #a855f7', boxShadow: '0 0 30px rgba(168,85,247,0.3)' }} />
</motion.div>
</Box>
);
};


export default Hero;