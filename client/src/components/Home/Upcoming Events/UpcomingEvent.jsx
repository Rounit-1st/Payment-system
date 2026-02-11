import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import EventCard from './EventCard'; // Importing your modular component
import { useTheme } from "@emotion/react";

const UPCOMING_DATA = [
  {
    title: "IKS Cultural Debate",
    date: "Feb 20, 2026",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
    description: "Exploring the depths of Indian Knowledge Systems in modern education at MANIT.",
    redirectUrl:"https://docs.google.com/forms/d/e/1FAIpQLSeZDqfEjuyRw6dRPTt_0Co4MuA9eTHxrzNGI32wNCZybW_xlA/viewform"
  }
];

const UpcomingEvents = () => {
  const theme = useTheme();
  return (
    <Box component="section" sx={{ py: 10, backgroundImage: `radial-gradient(at 0% 0%, ${theme.palette.primary.main}10 0, transparent 50%)` }}>
      <Container>
        <Typography 
          variant="h3" 
          align="center" 
          sx={{ fontWeight: 800, mb: 2, color: '#fff' }}
        >
          What's Happening
        </Typography>
        <Typography 
          variant="body1" 
          align="center" 
          sx={{ mb: 8, color: 'text.secondary', maxWidth: '600px', mx: 'auto' }}
        >
          Stay updated with the latest workshops, competitions, and cultural meets in our society.
        </Typography>

        <Grid container spacing={4}>
          {UPCOMING_DATA.map((event, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              {/* Integrating the Card here */}
              <EventCard 
                title={event.title}
                date={event.date}
                image={event.image}
                description={event.description}
                redirectUrl={event.redirectUrl}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default UpcomingEvents;