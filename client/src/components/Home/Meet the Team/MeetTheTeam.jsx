import React from 'react';
import { Box, Container, Typography, Grid, useTheme } from '@mui/material';
import TeamMemberCard from './TeamMemberCard';

const TEAM_DATA = [
  {
    name: "Aman Srivastava",
    role: "President",
    image: "https://i.pravatar.cc/150?u=aman", // Replace with real photos
    linkedin: "#",
    github: "#",
    instagram: "#"
  },
  {
    name: "Sneha Kapoor",
    role: "Technical Lead",
    image: "https://i.pravatar.cc/150?u=sneha",
    linkedin: "#",
    github: "#",
    instagram: "#"
  },
  {
    name: "Vikram Meena",
    role: "Event Coordinator",
    image: "https://i.pravatar.cc/150?u=vikram",
    linkedin: "#",
    github: "#",
    instagram: "#"
  }
];

const MeetTheTeam = () => {
  const theme = useTheme();
  return (
    <Box component="section" sx={{ py: 12, backgroundImage: `radial-gradient(at 0% 0%, ${theme.palette.primary.main}10 0, transparent 50%)` }}>
      <Container>
        <Typography variant="h3" align="center" sx={{ fontWeight: 900, mb: 2 }}>
          Meet the Core
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: 600, mx: 'auto' }}>
          The dedicated students working behind the scenes to bring you the best events and technical resources at MANIT.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {TEAM_DATA.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <TeamMemberCard {...member} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MeetTheTeam;