import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Modal,
  Button,
  CardMedia,
} from '@mui/material';

import BuildIcon from '@mui/icons-material/Build';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import PaintIcon from '@mui/icons-material/FormatPaint';
import WarningIcon from '@mui/icons-material/Warning';

const services = [
  {
    title: 'Handyman Repairs',
    description: 'Expert repairs and installations for your home.',
    icon: <BuildIcon fontSize="large" color="primary" />,
    image: '/resources/handyman.jpg',
  },
  {
    title: 'Plumbing Services',
    description: 'Leaky faucets, pipe replacements, and more.',
    icon: <PlumbingIcon fontSize="large" color="primary" />,
    image: '/resources/plumbing.jpg',
  },
  {
    title: 'Electrical Work',
    description: 'Safe and reliable electrical services.',
    icon: <ElectricalServicesIcon fontSize="large" color="primary" />,
    image: '/resources/electrical.jpg',
  },
  {
    title: 'HVAC Maintenance',
    description: 'Cooling and heating systems maintenance.',
    icon: <AcUnitIcon fontSize="large" color="primary" />,
    image: '/resources/hvac.jpg',
  },
  {
    title: 'Painting & Carpentry',
    description: 'Custom finishes and woodwork.',
    icon: <PaintIcon fontSize="large" color="primary" />,
    image: '/resources/painting.jpg',
  },
  {
    title: 'Emergency Services',
    description: '24/7 urgent maintenance solutions.',
    icon: <WarningIcon fontSize="large" color="primary" />,
    image: '/resources/emergency.jpg',
  },
];

const Services = () => {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpen = (service) => {
    setSelectedService(service);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedService(null);
  };

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Our Services
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 4,
          mt: 4,
        }}
      >
        {services.map((service, index) => (
          <Card
            key={index}
            sx={{
              width: 280,
              cursor: 'pointer',
              textAlign: 'center',
              transition: '0.3s',
              '&:hover': {
                boxShadow: 6,
                transform: 'scale(1.03)',
              },
            }}
            onClick={() => handleOpen(service)}
          >
            {service.image && (
              <CardMedia
                component="img"
                height="160"
                image={service.image}
                alt={service.title}
              />
            )}
            <CardContent>
              <Box>{service.icon}</Box>
              <Typography variant="h6" mt={1}>
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Modal for Book This Service */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            width: 350,
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" gutterBottom>
            {selectedService?.title}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {selectedService?.description}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => {
              window.location.href = '/book';
            }}
            sx={{ mt: 2 }}
          >
            Book This Service
          </Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default Services;
