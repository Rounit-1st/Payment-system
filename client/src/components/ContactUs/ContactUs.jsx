/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = React.useState({
    access_key: "638de203-2123-409c-bca3-a81808978e61",
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Prepare the data
    const json = JSON.stringify(formData);

    // 2. Send the request
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        console.log("Success:", result);
        alert("Message sent successfully!"); // We can replace this with a better UI later
        // Optional: Clear form after success
        setFormData({ ...formData, name: "", email: "", message: "" });
      } else {
        console.log("Error:", result);
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Check your internet connection.");
    }
  };
  return (
    <>
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6">
        <Grid container spacing={8} sx={{ maxWidth: "1200px" }}>
          {/* LEFT SIDE: Content */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
                Let's get in <span className="text-cyan-400">touch</span>
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "rgba(255,255,255,0.6)" }}
              >
                Or just contact us manually on inspiremanit28@gmail.com
              </Typography>
            </motion.div>
          </Grid>

          {/* RIGHT SIDE: Form */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                backgroundColor: "#161616",
                padding: "40px",
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <form onSubmit={handleSubmit}>
                <TextField
                  required
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  margin="normal"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      color: "white", // Text color
                      "& fieldset": { borderColor: "rgba(255, 255, 255, 0.2)" }, // Subtle border
                      "&:hover fieldset": { borderColor: "#00bcd4" }, // Brand color on hover
                      "&.Mui-focused fieldset": { borderColor: "#00bcd4" }, // Brand color on focus
                    },
                    "& .MuiInputLabel-root": {
                      color: "rgba(255, 255, 255, 0.7)",
                    }, // Label color
                    "& .MuiInputLabel-root.Mui-focused": { color: "#00bcd4" }, // Label focus color
                  }}
                />
                <TextField
                  required
                  fullWidth
                  label="Email id"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      color: "white", // Text color
                      "& fieldset": { borderColor: "rgba(255, 255, 255, 0.2)" }, // Subtle border
                      "&:hover fieldset": { borderColor: "#00bcd4" }, // Brand color on hover
                      "&.Mui-focused fieldset": { borderColor: "#00bcd4" }, // Brand color on focus
                    },
                    "& .MuiInputLabel-root": {
                      color: "rgba(255, 255, 255, 0.7)",
                    }, // Label color
                    "& .MuiInputLabel-root.Mui-focused": { color: "#00bcd4" }, // Label focus color
                  }}
                />
                <TextField
                  required
                  rows={4}
                  multiline
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  margin="normal"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      color: "white", // Text color
                      "& fieldset": { borderColor: "rgba(255, 255, 255, 0.2)" }, // Subtle border
                      "&:hover fieldset": { borderColor: "#00bcd4" }, // Brand color on hover
                      "&.Mui-focused fieldset": { borderColor: "#00bcd4" }, // Brand color on focus
                    },
                    "& .MuiInputLabel-root": {
                      color: "rgba(255, 255, 255, 0.7)",
                    }, // Label color
                    "& .MuiInputLabel-root.Mui-focused": { color: "#00bcd4" }, // Label focus color
                  }}
                />
                <input type="checkbox" name="botcheck" style={{ display: "none" }} />
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#00acc1" }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  style={{
                    marginTop: "2rem",
                    padding: "12px 32px",
                    borderRadius: "50px",
                    border: "none",
                    backgroundColor: "#00bcd4",
                    color: "black",
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontSize: "1rem",
                    boxShadow: "0px 4px 15px rgba(0, 188, 212, 0.3)", // Subtle glow
                  }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
