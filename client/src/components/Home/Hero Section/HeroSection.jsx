/* eslint-disable no-unused-vars */
import InspireImg from "../../../assets/InspireLogo.jpg";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { useTheme } from "@emotion/react";
import Box from '@mui/material/Box';

export default function HeroSection() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        py: 10,
        backgroundImage: `radial-gradient(at 0% 0%, ${theme.palette.primary.main}10 0, transparent 50%)`,
      }}
    >
      <div className="flex flex-col md:flex-row  justify-around items-center min-h-[80vh] px-10">
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }} // Starts small and invisible
          animate={{ opacity: 1, scale: 1 }} // Pops up to full size
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01], // A smooth "springy" feel
          }}
          src={InspireImg}
          className="w-64 md:w-96 rounded-2xl"
          alt="Inspire Logo"
        />
        <motion.div
          initial={{ opacity: 0, x: 100 }} // Starts from the right
          animate={{ opacity: 1, x: 0 }} // Slides into position
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-xl mt-10 md:mt-0"
        >
          <h1 className="text-white text-center md:text-left text-4xl md:text-6xl font-bold italic">
            "Aspire To <span className="text-cyan-400">Inspire</span> <br />
            Until You Expire"
          </h1>
          <p className="text-slate-300 text-center md:text-left mt-4 text-lg">
            Official Society of MANIT Bhopal.
          </p>
        </motion.div>
      </div>
    </Box>
  );
}
