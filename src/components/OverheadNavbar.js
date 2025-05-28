import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';

const OverheadNavbar = () => {
  return (
    <Box
      component="header"
      sx={{
        width: '100%',
        bgcolor: '#0d47a1',
        color: '#fff',
        py: 0.5,
        fontSize: 14,
        position: 'sticky',
        top: 0,
        zIndex: 1301,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontWeight: 500,
        }}
      >
        <Typography>
          Call us: <Link href="tel:+1234567890" color="inherit" underline="hover">+1 (234) 567-890</Link>
        </Typography>
        <Typography>
          Email: <Link href="mailto:info@maintenanceco.com" color="inherit" underline="hover">info@maintenanceco.com</Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default OverheadNavbar;
