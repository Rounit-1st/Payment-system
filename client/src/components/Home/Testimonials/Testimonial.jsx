import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import TestimonialCard from './TestimonialCard';
import { useTheme } from "@emotion/react";

const TESTIMONIALS_DATA = [
  {
    name: "Sagnick Dey",
    role: "Executive",
    feedback: "The only society in college that provide some real conncetion and supports life growth",
    image: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1769764933/WhatsApp_Image_2026-01-30_at_14.50.51_jimen1.jpg",
    
  },
  {
    name: "Divyanshu Shukla",
    role: "Graphic Designer",
    feedback: "Working with team inspire has really supported me throughout the entire college journey.",
    image: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1770262044/Divyanshu_img_gywj9m.jpg",
    
  },
  {
    name: "Anurag Sharma",
    role: "Alumni",
    feedback: "The networking opportunities I got through this society helped me land my first internship. Truly a community that builds leaders.",
    image: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1770404586/1758282729902_renysy.jpg",
  }
];

const Testimonials = () => {
  const theme = useTheme();
  return (
    <Box component="section" sx={{ py: 10, backgroundImage: `radial-gradient(at 0% 0%, ${theme.palette.primary.main}10 0, transparent 50%)` }}>
      <Container>
        <Typography variant="overline" display="block" align="center" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold', letterSpacing: 2 }}>
          Community Voice
        </Typography>
        <Typography variant="h3" align="center" sx={{ fontWeight: 800, mb: 8 }}>
          What Our Members Say
        </Typography>

        <Grid container spacing={4}>
          {TESTIMONIALS_DATA.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <TestimonialCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;