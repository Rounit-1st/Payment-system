/* eslint-disable no-unused-vars */
import { Typography, Container, Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import AboutUsImg from "../../../assets/AboutUsImage.jpg";

export default function AboutSection() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        py: 10,
        backgroundImage: `radial-gradient(at 0% 0%, ${theme.palette.primary.main}10 0, transparent 50%)`,
      }}
    >
      <section className=" py-20 overflow-hidden">
        <Container maxWidth="lg">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* TEXT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 text-center md:text-left"
            >
              <Typography
                variant="h3"
                className="text-white font-bold mb-4 relative inline-block"
                sx={{ fontWeight: 800 }}
              >
                About <span className="text-cyan-400">Us</span>
                {/* Decorative underline */}
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-cyan-400 rounded-full"></span>
              </Typography>

              <Typography
                variant="body1"
                className="text-slate-300 text-lg leading-relaxed mt-6 italic"
                sx={{ fontSize: "1.15rem" }}
              >
                "We voluntarily work to bejewel youths with wisdom and values to
                enable them to lead a principle-centered life."
              </Typography>

              <Typography
                variant="body1"
                className="text-slate-400 mt-4 leading-relaxed"
              >
                We organize technical camps and cultural events focusing on the
                overall growth and well-being of students while promoting Indian
                culture and its diversity.
              </Typography>

              {/* Optional: Add a 'Learn More' Button here */}
            </motion.div>

            {/* IMAGE SECTION */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              {/* Decorative Background Blob */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-cyan-400/10 rounded-2xl -z-10"></div>

              <img
                src={AboutUsImg}
                alt="About Inspire"
                className="rounded-2xl shadow-2xl border-2 border-slate-700 w-full object-cover transform hover:rotate-1 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </Container>
      </section>
    </Box>
  );
}
