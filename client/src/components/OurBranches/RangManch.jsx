/* eslint-disable no-unused-vars */
import React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { Typography } from "@mui/material";
import rangManchLogo from "../../assets/rangManchLogo.jpg";
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const SpotlightCard = ({ src, alt }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group relative flex justify-center items-center overflow-hidden rounded-2xl bg-slate-900 border border-slate-800"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(34, 211, 238, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 shadow-2xl"
      />
    </div>
  );
};

export default function RangManch() {
  return (
    <>
      <section className={`flex flex-col md:flex-row gap-12 items-center`}>
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SpotlightCard src={rangManchLogo} alt="RangManch Logo" />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="overline"
            className="text-cyan-400 tracking-widest font-bold"
          >
            Visionaries Behind the Lens
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2, mt: 1 }}>
            Rang
            <span className="text-cyan-400">Manch</span>
          </Typography>
          <Typography
            variant="body1"
            className="text-gray-400 text-lg leading-relaxed"
          >
            The official Filmmaking society of MANIT BHOPAL. We don't just
            capture moments; we craft narratives that resonate. In collaboration
            with INSPIRE MANIT, we push the boundaries of student cinema.
          </Typography>
          <a href="https://www.youtube.com/@Rangmanch-NITBHOPAL" target="_blank">
            <button className="bg-red-500 px-20 py-2 mt-4 rounded-2xl text-center"><span className="mr-4"><YouTubeIcon/></span>Our Youtube Channel</button>
          </a>
          <a href="https://www.instagram.com/rangmanch_nitb/?__d=1" target="_blank">
            <button className="bg-pink-500 px-20 py-2 mt-4 rounded-2xl text-center"><span className="mr-4"><InstagramIcon/></span>Our Instagram</button>
          </a>
        </motion.div>
      </section>
    </>
  );
}
