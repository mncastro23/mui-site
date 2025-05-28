import React from 'react';
import { Box, Container, Link } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Footer = () => {
  const infoBoxStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    flexShrink: 1,
    minWidth: 150,
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
  };

  return (
    <Box
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100vw',
        bgcolor: 'primary.main',
        color: 'white',
        py: 2,
        px: { xs: 2, md: 6 },
        boxSizing: 'border-box',
        boxShadow: '0 -2px 8px rgba(0,0,0,0.2)',
        zIndex: 1300,
        overflowX: 'hidden',
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Box sx={{ ...infoBoxStyle, maxWidth: 400 }}>
          <LocationOnIcon />
          <Link
            href="https://maps.app.goo.gl/L6o8vMMVbCW2aG8N8"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            underline="hover"
            sx={{ cursor: 'pointer' }}
          >
            Unique World Business Center Hamza Building - Al Karama - Dubai - United Arab Emirates
          </Link>
        </Box>
        <Box sx={infoBoxStyle}>
          <PhoneIcon />
          <Link href="tel:+97142831632" color="inherit" underline="hover">
            +971-4-283-1632
          </Link>
        </Box>
        <Box sx={infoBoxStyle}>
          <PhoneIphoneIcon />
          <Link href="tel:+971564419779" color="inherit" underline="hover">
            +971-56-441-9779
          </Link>
        </Box>
        <Box sx={infoBoxStyle}>
          <EmailIcon />
          <Link href="mailto:info@philkab.com" color="inherit" underline="hover">
            info@philkab.com
          </Link>
        </Box>
        <Box sx={infoBoxStyle}>
          <AccessTimeIcon />
          <span>Mon - Sat: 8:30 AM - 05:30 PM</span>
        </Box>
      </Container>
      <Box sx={{ mt: 1, fontSize: '0.8rem', opacity: 0.7, textAlign: 'center' }}>
        © 2025 PHILKAB TECHNICAL SERVICES L.L.C. All rights reserved.
      </Box>
    </Box>
  );
};

export default Footer;
