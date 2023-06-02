import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { seed } = useSelector((state) => state.user);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    seed ? sessionStorage.removeItem("seed") : null;
    seed ? window.location.reload() : null;
  };

  return (
    <AppBar position="fixed" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            color="primary.dark"
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "cabin",
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            JobsPortal
          </Typography>

          <Typography
            align="center"
            color="primary.dark"
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            JobsPortal
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "end" }}>
            <Link to={seed ? "/profile" : "/register"}>
              <Button sx={{ color: "#68a092", fontWeight: 500, mr: "10px", fontFamily: "cabin" }}>{seed ? "profile" : "register"}</Button>
            </Link>
            <Link to={seed ? null : "/Login"}>
              <Button variant="contained" sx={{ bgcolor: "#68a092", color: "#ffff", fontWeight: 500, fontFamily: "cabin" }} onClick={() => handleLogout()}>
                {seed ? "Logout" : "Login"}
              </Button>
            </Link>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} sx={{ color: "#68a092" }}>
              <GiHamburgerMenu />
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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem key="register" onClick={handleCloseNavMenu}>
                <Link to={seed ? "/profile" : "/register"}>
                  <Button variant="text" sx={{ color: "black" }}>
                    {seed ? "profile" : "register"}
                  </Button>
                </Link>
              </MenuItem>
              <MenuItem key="login" onClick={handleCloseNavMenu}>
                <Link to={seed ? null : "/Login"}>
                  <Button variant="text" sx={{ color: "black" }} onClick={() => handleLogout()}>
                    {seed ? "Logout" : "Login"}
                  </Button>
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            ></Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
