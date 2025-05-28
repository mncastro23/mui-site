import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Badge,
  styled,
} from '@mui/material';

import HandymanIcon from '@mui/icons-material/Handyman';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BrushIcon from '@mui/icons-material/Brush';
import EmergencyIcon from '@mui/icons-material/WarningAmber';

// Ribbon styled badge
const RibbonBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 'auto',
    left: 8,
    top: 8,
    borderRadius: '0 8px 8px 0',
    padding: '0 10px',
    fontWeight: 'bold',
    fontSize: '0.75rem',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
}));

const services = [
  { label: 'Handyman Repairs', icon: <HandymanIcon color="primary" sx={{ fontSize: 40 }} /> },
  { label: 'Plumbing Services', icon: <PlumbingIcon color="primary" sx={{ fontSize: 40 }} /> },
  { label: 'Electrical Work', icon: <ElectricBoltIcon color="primary" sx={{ fontSize: 40 }} /> },
  { label: 'HVAC Maintenance', icon: <AcUnitIcon color="primary" sx={{ fontSize: 40 }} /> },
  { label: 'Painting & Carpentry', icon: <BrushIcon color="primary" sx={{ fontSize: 40 }} /> },
  { label: 'Emergency Services', icon: <EmergencyIcon color="primary" sx={{ fontSize: 40 }} /> },
];

const Home = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center', py: 8 }}>
        <Container>
          <Typography variant="h3" gutterBottom>
            Trusted Maintenance Services
          </Typography>
          <Typography variant="h6" gutterBottom>
            Quality repairs and upkeep for homes and businesses
          </Typography>
          <Button variant="contained" color="secondary" sx={{ mt: 3, mr: 2 }} onClick={() => navigate('/book')}>
            Book Now
          </Button>
          <Button variant="outlined" color="inherit" sx={{ mt: 3 }} onClick={() => navigate('/contact')}>
            Contact Us
          </Button>
        </Container>
      </Box>

      {/* Services Section */}
      <Container sx={{ py: 6, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Our Services
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 4, mt: 4 }}>
          {services.map(({ label, icon }, index) => {
            const isHovered = hoveredIndex === index;

            const cardContent = (
              <CardContent sx={{ textAlign: 'center' }}>
                <Box sx={{ mb: 1 }}>{icon}</Box>
                <Typography variant="h6" gutterBottom>
                  {label}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Reliable technicians. Guaranteed results.
                </Typography>
                {isHovered && (
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    sx={{ mt: 2 }}
                    onClick={() => navigate('/book')}
                  >
                    Book Now
                  </Button>
                )}
              </CardContent>
            );

            return (
              <Card
                key={index}
                elevation={3}
                sx={{
                  width: 280,
                  position: 'relative',
                  transition: '0.3s',
                  transform: isHovered ? 'scale(1.03)' : 'scale(1)',
                  boxShadow: isHovered ? 8 : 2,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {index === 0 ? (
                  <RibbonBadge badgeContent="Popular" overlap="rectangular">
                    {cardContent}
                  </RibbonBadge>
                ) : (
                  cardContent
                )}
              </Card>
            );
          })}
        </Box>
      </Container>

      {/* About Section */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: 6 }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Why Choose Us?
          </Typography>
          <Typography variant="body1" align="center" maxWidth="md" sx={{ mx: 'auto' }}>
            With over a decade of experience, we offer dependable, affordable, and fast
            maintenance services. From home repairs to commercial upkeep, our skilled
            team ensures your property stays in top condition. Licensed & insured.
          </Typography>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ py: 6, textAlign: 'center', bgcolor: 'primary.main', color: '#fff' }}>
        <Container>
          <Typography variant="h5" gutterBottom>
            Ready to Schedule Your Service?
          </Typography>
          <Button variant="contained" color="secondary" size="large" onClick={() => navigate('/book')}>
            Book an Appointment
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
