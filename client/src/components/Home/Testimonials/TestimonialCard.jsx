import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Rating,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const TestimonialCard = ({ name, role, feedback, image }) => {
  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        position: "relative",
        overflow: "visible", // To let the quote icon hang off the edge
      }}
    >
      <CardContent sx={{ pt: 5 }}>
        {/* Decorative Quote Icon */}
        <FormatQuoteIcon
          sx={{
            fontSize: 40,
            color: "primary.main",
            opacity: 0.2,
            position: "absolute",
            top: 10,
            left: 10,
          }}
        />

        <Typography
          variant="body1"
          sx={{ fontStyle: "italic", mb: 3, color: "text.secondary" }}
        >
          "{feedback}"
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mt: "auto" }}>
          <Avatar
            src={image}
            alt={name}
            sx={{
              width: 50,
              height: 50,
              mr: 2,
              border: "2px solid #fff",
              boxShadow: 2,
            }}
          />
          <Box>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", lineHeight: 1.2 }}
            >
              {name}
            </Typography>
            <Typography variant="caption" color="primary">
              {role}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
