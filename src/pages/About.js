import React from 'react';
import { Box, Container, Typography, Divider, Paper, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom align="center">
          "We Serve You with Our Best"
        </Typography>

        {/* Our Story */}
        <Box sx={{ mb: 6 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                height: '100%',
              }}
            >
              <Typography variant="h4" gutterBottom>
                Our Story
              </Typography>
              <Typography paragraph>
                We are more than just a cleaning and maintenance company.
              </Typography>
              <Typography paragraph>
                We are your dedicated partners in the quest for a cleaner and more sustainable environment. We started with the goal of providing the best products and services to our customers.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/resources/our-story.jpg"
                alt="Our Story"
                sx={{ width: '100%', borderRadius: 2 }}
              />
            </Grid>
          </Grid>
        </Box>

        <Divider />

        {/* Our Team */}
        <Box sx={{ my: 6 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                height: '100%',
              }}
            >
              <Typography variant="h4" gutterBottom>
                Our Team
              </Typography>
              <Typography paragraph>
                Our team is made up of experienced professionals who are dedicated to providing exceptional service. We work closely with our clients to understand their needs and provide tailored solutions that exceed their expectations.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/resources/our-team.jpg"
                alt="Our Team"
                sx={{ width: '100%', borderRadius: 2 }}
              />
            </Grid>
          </Grid>
        </Box>

        <Divider />

        {/* Our Products */}
        <Box sx={{ my: 6 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                height: '100%',
              }}
            >
              <Typography variant="h4" gutterBottom>
                Our Products
              </Typography>
              <Typography paragraph>
                We offer a diverse range of maintenance services, covering everything from regular upkeep to immediate emergency repairs, ensuring your property remains in excellent condition at all times.
              </Typography>
              <Typography paragraph>
                We provide comprehensive commercial and residential cleaning services customized to suit the specific requirements of both businesses and homes.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/resources/our-products.jpg"
                alt="Our Products"
                sx={{ width: '100%', borderRadius: 2 }}
              />
            </Grid>
          </Grid>
        </Box>

        <Paper
          elevation={3}
          sx={{ mt: 6, p: 3, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}
        >
          <Typography variant="h6" gutterBottom>
            Contact us today to learn how we can support your maintenance and cleaning needs.
          </Typography>

          <Button 
            variant="contained" 
            color="secondary" 
            onClick={handleContactClick}
            sx={{ mt: 2 }}
          >
            Contact Us
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default About;
