import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Breadcrumbs,
  Typography,
  Link,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathSegments = location.pathname.split("/").filter(Boolean);
  const currentPage = pathSegments[pathSegments.length - 1] || "Home";

  const handleNavClick = (path) => navigate(path);

  // Profile menu state
  const [anchorEl, setAnchorEl] = useState(null);
  const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleProfileMenuClose = () => setAnchorEl(null);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#000" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Breadcrumb */}
        <Breadcrumbs
          aria-label="breadcrumb"
          separator="›"
          sx={{ fontSize: "1rem", color: "white" }}
        >
          <Link
            underline="hover"
            sx={{ cursor: "pointer", color: "red" }}
            onClick={() => handleNavClick("/home")}
          >
            Home
          </Link>
          <Typography sx={{ fontWeight: "bold", color: "white" }}>
            {currentPage.replace("-", " ")}
          </Typography>
        </Breadcrumbs>

        {/* Right side icons */}
        <Stack direction="row" spacing={2}>
          <IconButton color="inherit" onClick={() => handleNavClick("/cart")}>
            <ShoppingCartIcon />
          </IconButton>

          {/* Profile */}
          <IconButton onClick={handleProfileMenuOpen} color="inherit">
            <Avatar sx={{ width: 30, height: 30 }}>U</Avatar>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleProfileMenuClose}
          >
            <MenuItem
              onClick={() => {
                handleProfileMenuClose();
                handleNavClick("/profile");
              }}
            >
              Profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleProfileMenuClose();
                handleNavClick("/");
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
