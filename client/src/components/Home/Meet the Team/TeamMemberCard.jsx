import React from 'react';
import { Box, Typography, Avatar, IconButton, Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const TeamMemberCard = ({ name, role, image, linkedin, github, instagram }) => {
  return (
    <Box sx={{ 
      textAlign: 'center', 
      p: 3, 
      transition: 'transform 0.3s ease',
      '&:hover': { transform: 'translateY(-8px)' }
    }}>
      <Avatar 
        src={image} 
        alt={name} 
        sx={{ 
          width: 160, 
          height: 160, 
          mx: 'auto', 
          mb: 2, 
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          border: '4px solid white'
        }} 
      />
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
        {name}
      </Typography>
      <Typography variant="body2" color="primary" sx={{ mb: 2, fontWeight: 500, letterSpacing: 1 }}>
        {role.toUpperCase()}
      </Typography>

      <Stack direction="row" spacing={1} justifyContent="center">
        <IconButton size="small" component="a" href={linkedin} target="_blank" sx={{ color: '#0077b5' }}>
          <LinkedInIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" component="a" href={github} target="_blank" sx={{ color: '#333' }}>
          <GitHubIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" component="a" href={instagram} target="_blank" sx={{ color: '#e4405f' }}>
          <InstagramIcon fontSize="small" />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default TeamMemberCard;