import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Stack from '@mui/material/Stack';


export default function MemberInfoCard({ member }) {
  
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={member.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {member.name}
          </Typography>
          {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
          <Stack direction="row" spacing={1}>
            <Chip label={member.role} variant="outlined"/>
            <Chip label={member.year} />
            <Chip label={member.branch} />
          </Stack>
        </CardContent>
        <CardActions>
          <Button size="small" href={member.linkedIn} target="_blank">
            <LinkedInIcon />
          </Button>
          {/* <Button size="small">
            <InstagramIcon />
          </Button> */}
        </CardActions>
      </Card>
    </>
  );
}
