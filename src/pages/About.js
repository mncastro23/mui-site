import React from 'react';
import { Box, Container, Typography, Divider, Paper, Grid } from '@mui/material';

// Import images from resources folder
import OurStoryImg from '../resources/our-story.jpg';
import OurTeamImg from '../resources/our-team.jpg';
import OurProductsImg from '../resources/our-products.jpg';

const About = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom align="center">
          About Us
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
                src={OurStoryImg}
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
              <Typography variant="h6" sx={{ fontStyle: 'italic', mt: 3 }}>
                "We Serve You with Our Best"
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={OurTeamImg}
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
                src={OurProductsImg}
                alt="Our Products"
                sx={{ width: '100%', borderRadius: 2 }}
              />
            </Grid>
          </Grid>
        </Box>

        <Paper
          elevation={3}
          sx={{ mt: 6, p: 3, bgcolor: 'primary.main', color: 'white' }}
        >
          <Typography variant="h6" align="center">
            Contact us today to learn how we can support your maintenance and cleaning needs.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default About;
