/* eslint-disable no-unused-vars */
import { Container, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// const alumniData = [
//   {
//     id: 1,
//     name: "Rahul Sharma",
//     role: "Software Engineer",
//     company: "Google",
//     year: "Batch of 2020",
//     image: "https://via.placeholder.com/150",
//     linkedin: "#",
//   },
//   {
//     id: 2,
//     name: "Ananya Verma",
//     role: "Product Manager",
//     company: "Microsoft",
//     year: "Batch of 2019",
//     image: "https://via.placeholder.com/150",
//     linkedin: "#",
//   },
//   {
//     id: 3,
//     name: "Aman Gupta",
//     role: "Founder",
//     company: "Startup XYZ",
//     year: "Batch of 2018",
//     image: "https://via.placeholder.com/150",
//     linkedin: "#",
//   },
//   {
//     id: 4,
//     name: "Sneha Patel",
//     role: "Data Scientist",
//     company: "Amazon",
//     year: "Batch of 2021",
//     image: "https://via.placeholder.com/150",
//     linkedin: "#",
//   },
// ];

export default function OurAlumni() {
  const [alumniData, setAlumniData] = useState([]);
  useEffect(() => {
    const getAlumni = async () => {
      try {
        const res = await fetch("http://localhost:8080/alumni");
        const dataJson = await res.json();
        setAlumniData(dataJson);
      } catch (err) {
        console.log(err);
      }
    };
    getAlumni();
  }, []);
  return (
    <section className=" py-16">
      <Container maxWidth="lg" className="flex flex-col items-center">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: "easeInOut",
          }}
          className="text-center mb-12"
        >
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            The Hall of <span className="text-cyan-400">Heritage</span>
          </Typography>
          <Typography variant="h6" className="text-gray-500 mt-2">
            Meet the honorable alumni of our society
          </Typography>
        </motion.div>

        {/* Alumni Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {alumniData.map((alumni, index) => (
            <motion.div
              key={alumni.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center text-center"
            >
              {/* Image */}
              <img
                src={alumni.image}
                alt={alumni.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-cyan-400"
              />

              {/* Info */}
              <Typography variant="h6" className="mt-4 font-semibold text-black">
                {alumni.name}
              </Typography>

              <p className="text-cyan-500 text-sm font-medium">
                {alumni.role}
              </p>
              <p className="text-cyan-500 text-sm font-medium">
                {alumni.branch}
              </p>
              <p className="text-gray-500 text-sm">
                {alumni.company}
              </p>
              <p className="text-gray-400 text-xs mt-1">
                {alumni.year}
              </p>

              {/* Button */}
              <a
                href={alumni.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 text-sm rounded-full bg-cyan-500 text-white hover:bg-cyan-600 transition"
              >
                View Profile
              </a>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
