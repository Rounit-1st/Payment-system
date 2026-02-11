import { Grid, Container, Typography, Box } from "@mui/material";
import MemberInfoCard from "./MemberInfoCard";
import { useEffect, useState } from "react";


export default function OurMembers() {
  const [membersData, setMembersData] = useState([]);
  useEffect(() => {
    const getMembers = async () => {
      try {
        const res = await fetch("http://localhost:8080/members");
        const dataJson = await res.json();
        setMembersData(dataJson);
      } catch (err) {
        console.log(err);
      }
    };
    getMembers();
  }, []);
  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 800, mb: 6 }}
      >
        Our Team
      </Typography>

      {/* container: defines this as a grid wrapper
                spacing: adds gap between cards
                columns: defines how many "units" wide the grid is
            */}
      <Grid container spacing={4} justifyContent="center">
        {membersData.map((member, index) => (
          // xs={12}: Full width on mobile
          // sm={6}: Half width on tablets
          // md={4}: One-third width on desktops
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MemberInfoCard member={member} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
