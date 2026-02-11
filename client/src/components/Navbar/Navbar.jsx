/* eslint-disable no-unused-vars */
import './Navbar.css';
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import InspireImg from "../../assets/InspireLogo.jpg";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";

const navItems = [
  { name: "Home", path: "/"},
  { name: "Gallery", path: "/gallery"},
  { name: "Our Members", path: "/members"},
  { name: "Contact Us", path: "/contact"},
  { name: "Our Alumni", path: "/alumni"},
  { name: "Our Branches", path: "/branches"},
];


function Navbar() {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundImage: `radial-gradient(at 0% 0%, ${theme.palette.primary.main}10 0, transparent 50%)`,
        boxShadow: "none",
        color: "#fff",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Box
            component="img"
            src={InspireImg}
            sx={{
              height: 40,
              width: "auto",
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            INSPIRE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {navItems.map((page) => (
                <Link key={page.name} to={`${page.path}`} >
                  <Button
                    onClick={handleCloseNavMenu}
                    // CHANGED: color to 'inherit' so it follows the AppBar's black color
                    sx={{ my: 2, color: "inherit", display: "block"}}
                  >
                    <p id="route-name">{page.name}</p>
                  </Button>
                </Link>
              ))}
            </Menu>
          </Box>
          {/* <Box
            component="img"
            src={InspireImg}
            sx={{
              height: 40,
              width: "auto",
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          /> */}
          <Typography
            variant="h5"
            noWrap
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            INSPIRE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navItems.map((page) => (
              <Link to={`${page.path}`}>
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  
                  sx={{ my: 2, color: "#fff", display: "block" }}
                >
                  <p id='route-name'>{page.name}</p>
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
