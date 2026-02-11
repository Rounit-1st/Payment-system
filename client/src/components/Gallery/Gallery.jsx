/* eslint-disable no-unused-vars */
//import React, { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useMediaQuery, useTheme, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

export default function Gallery() {
  const [imageData, setImageData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetch("https://inspiremanit-production-8ec6.up.railway.app/");
      // const data = await fetch("http://localhost:8080/gallery");
      const jsonData = await data.json();
      setImageData(jsonData);
    };
    getData();
  }, []);
  const theme = useTheme();

  // This returns true if the screen is smaller than 600px (MUI's 'sm' breakpoint)
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // const [itemData,setItemData] = useState([]);
  // useEffect(()=>{
  //     const fetchData = async ()=>{

  //         const imageData = await fetch("/gallery")
  //         const imageDataJson = await imageData.json();
  //         setItemData(imageDataJson);
  //     }
  //     fetchData();
  // },[]);
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", mb: 5, fontWeight: "bold" }}
      >
        Our <span style={{ color: "#00bcd4" }}>Gallery</span>
      </Typography>

      <ImageList variant="masonry" cols={isMobile ? 1 : 3} gap={16}>
        {imageData.map((item, index) => (
          <ImageListItem className="hover:scale-105 " key={item._id}>
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }} // Staggered entrance
              viewport={{ once: true }}
              src={`${item.url}?w=500&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{
                borderRadius: "16px",
                cursor: "pointer",
                display: "block",
                width: "100%",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}
