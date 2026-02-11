/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col justify-center items-center min-h-[80vh] text-center"
    >
      <Typography
        variant="h1"
        sx={{
          fontWeight: 900,
          letterSpacing: "-0.02em",
          fontSize: { xs: "3rem", md: "5rem" },
        }}
      >
        The <span className="text-cyan-400">Creative</span> Pulse
      </Typography>
      <Typography variant="h6" className="text-gray-400 mt-4 max-w-lg">
        Defining Culture, One Story at a Time. We bridge the gap between
        technical excellence and artistic expression.
      </Typography>
    </motion.div>
  );
}
