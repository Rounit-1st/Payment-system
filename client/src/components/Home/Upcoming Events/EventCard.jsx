import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Box,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

// This is a "presentational" component - it only cares about HOW the card looks
const EventCard = ({ title, date, image, description, redirectUrl }) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 4,
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        transition: "transform 0.3s ease",
        "&:hover": { transform: "translateY(-10px)" },
      }}
    >
      <CardMedia component="img" height="200" image={image} alt={title} />
      <CardContent sx={{ position: "relative", flexGrow: 1 }}>
        <Chip
          icon={<CalendarMonthIcon />}
          label={date}
          color="primary"
          sx={{
            position: "absolute",
            top: -20,
            right: 20,
            fontWeight: "bold",
            boxShadow: 2,
          }}
        />
        <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ my: 2 }}>
          {description}
        </Typography>
      </CardContent>
      <Box sx={{ p: 2, pt: 0 }}>
        <a href={redirectUrl} target="_blank">
          <Button variant="contained" fullWidth sx={{ borderRadius: 2 }}>
            Register Now
          </Button>
        </a>
      </Box>
    </Card>
  );
};

export default EventCard;
