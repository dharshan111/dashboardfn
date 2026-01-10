import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Avatar,
  Button,
  Menu,
  MenuItem,
  Typography,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from "@mui/icons-material/Language";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Person2Icon from "@mui/icons-material/Person2";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SettingsIcon from "@mui/icons-material/Settings";

const countries = [
  { name: "English (UK)", flag: "🇺🇸" },
  { name: "Chinese", flag: "🇩🇪" },
  { name: "France", flag: "🇫🇷" },
  { name: "India", flag: "🇮🇳" },
];

const Header = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [countryAnchorEl, setCountryAnchorEl] = useState(null);
  const [notificationsAnchorEl, setNotificationsAnchorEl] = useState(null);
  const [profileAnchorEl, setprofileAnchorEl] = useState(null);
  const [themeAnchorEl, setThemeAnchorEl] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Country dropdown handlers
  const handleCountryClick = (event) => {
    setCountryAnchorEl(event.currentTarget);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setCountryAnchorEl(null);
  };

  const handleCountryClose = () => {
    setCountryAnchorEl(null);
  };

  // Notifications dropdown handlers
  const handleNotificationsClick = (event) => {
    setNotificationsAnchorEl(event.currentTarget);
  };

  const handleNotificationsClose = () => {
    setNotificationsAnchorEl(null);
  };

  // Profile dropdown handling

  const handleprofileAnchorElClick = (event) => {
    setprofileAnchorEl(event.currentTarget);
  };

  const handleprofileAnchorElClose = () => {
    setprofileAnchorEl(null);
  };

  // Theme dropdown handlers
  const handleThemeClick = (event) => {
    setThemeAnchorEl(event.currentTarget);
  };

  const handleThemeClose = () => {
    setThemeAnchorEl(null);
  };

  // Sidebar handlers
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const countryOpen = Boolean(countryAnchorEl);
  const notificationsOpen = Boolean(notificationsAnchorEl);
  const themeOpen = Boolean(themeAnchorEl);
  const profileOpen = Boolean(profileAnchorEl);

  return (
    <>
    
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          borderRadius: "15px",
          mt: 2,
          mx: "auto",
          maxWidth: "95%",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left side: Menu button */}
          <IconButton
            edge="start"
            color="#000"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Center: Search button */}
          <Box
            sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
          ></Box>

          {/* Right side: Icons with dropdowns */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Button
              sx={{
                textTransform: "none",
                border: "1px solid lightgrey",
                borderRadius: "20px",
                color: "#000",
                fontWeight: 400,
              }}
            >
              <SearchIcon sx={{ mr: 1 }} />
              Try to Searching
            </Button>

            {/* Country Dropdown */}
            <Button
              onClick={handleCountryClick}
              sx={{
                textTransform: "none",
                borderRadius: "20px",
                color: "#000",
                fontWeight: 400,
                minWidth: "auto",
                padding: "6px 12px",
              }}
            >
              <Avatar
                alt={selectedCountry.name}
                src="https://spike-nextjs-pro-main.vercel.app/images/flag/icon-flag-en.svg"
                sx={{
                  width: "24px",
                  height: "24px",
                  textAlign: "center",
                  objectFit: "cover",
                }}
              />
            </Button>

            {/* Badge button - opens sidebar */}
            <Button
              onClick={toggleSidebar}
              sx={{
                textTransform: "none",
                borderRadius: "220px",
                color: "#000",
                fontWeight: 400,
                minWidth: "auto",
                padding: "6px",
              }}
            >
              <Badge badgeContent={1} color="primary">
                <CardMembershipIcon />
              </Badge>
            </Button>

            {/* Theme Dropdown */}
            <Button
              onClick={handleThemeClick}
              sx={{
                textTransform: "none",
                borderRadius: "220px",
                color: "#000",
                fontWeight: 400,
                minWidth: "auto",
                padding: "6px",
              }}
            >
              <DarkModeOutlinedIcon color="#000" sx={{ fontWeight: 300 }} />
            </Button>

            {/* Notifications Dropdown */}
            <Button
              onClick={handleNotificationsClick}
              sx={{
                textTransform: "none",
                borderRadius: "220px",
                color: "#000",
                fontWeight: 400,
                minWidth: "auto",
                padding: "6px",
              }}
            >
              <Badge badgeContent={3} color="error">
                <NotificationsNoneOutlinedIcon
                  color="#000"
                  sx={{ fontWeight: 200 }}
                />
              </Badge>
            </Button>

            {/*profile view */}
            <Button
              onClick={handleprofileAnchorElClick}
              sx={{
                textTransform: "none",
                borderRadius: "220px",
                fontWeight: 400,
                minWidth: "auto",
                padding: "6px",
                display: "flex",
                gap: 1,
              }}
            >
              <Avatar
                alt=""
                src="https://spike-nextjs-pro-main.vercel.app/images/profile/user1.jpg"
                sx={{
                  width: "45px",
                  height: "45px",
                  textAlign: "center",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    textAlign: "center",
                    color: "#000",
                    lineHeight: 1.2,
                  }}
                >
                  Mike Neilson
                </Typography>
                <Typography
                  sx={{
                    fontSize: "11px",
                    textAlign: "center",
                    color: "#666",

                    lineHeight: 1.2,
                  }}
                >
                  Admin {/* Role - change this text */}
                </Typography>
              </Box>
            </Button>
          </Box>

          {/* Country Dropdown Menu */}
          <Menu
            anchorEl={countryAnchorEl}
            open={countryOpen}
            onClose={handleCountryClose}
            PaperProps={{
              sx: {
                mt: 1,
                borderRadius: "10px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                maxHeight: 300,
              },
            }}
          >
            {countries.map((country) => (
              <MenuItem
                key={country.code}
                onClick={() => handleCountrySelect(country)}
                selected={selectedCountry.code === country.code}
                sx={{
                  padding: "10px 16px",
                  minWidth: "200px",
                  "&.Mui-selected": {
                    backgroundColor: "#fff",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.12)",
                    },
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar
                    sx={{
                      width: 28,
                      height: 28,
                      fontSize: "16px",
                      backgroundColor: "transparent",
                    }}
                  >
                    {country.flag}
                  </Avatar>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {country.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary" }}
                    >
                      {country.code}
                    </Typography>
                  </Box>
                </Box>
              </MenuItem>
            ))}
          </Menu>

          {/* Theme Dropdown Menu */}
          <Menu
            anchorEl={themeAnchorEl}
            open={themeOpen}
            onClose={handleThemeClose}
            PaperProps={{
              sx: {
                mt: 1,
                borderRadius: "10px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <MenuItem sx={{ fontWeight: 600, color: "text.secondary" }}>
              Theme Settings
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleThemeClose}>
              <Typography variant="body2">Light Mode</Typography>
            </MenuItem>
            <MenuItem onClick={handleThemeClose}>
              <Typography variant="body2">Dark Mode</Typography>
            </MenuItem>
            <MenuItem onClick={handleThemeClose}>
              <Typography variant="body2">Auto</Typography>
            </MenuItem>
          </Menu>

          {/* Notifications Dropdown Menu */}
          <Menu
            anchorEl={notificationsAnchorEl}
            open={notificationsOpen}
            onClose={handleNotificationsClose}
            PaperProps={{
              sx: {
                mt: 1,
                borderRadius: "10px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                width: "320px",
              },
            }}
          >
            <MenuItem
              sx={{
                fontWeight: 600,
                color: "text.secondary",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row-reverse",
              }}
            >
              <Button
                variant="contained"
                sx={{ borderRadius: "30px", p: 0, fontSize: "13px" }}
              >
                5 new
              </Button>
              Notifications
            </MenuItem>

            <MenuItem onClick={handleNotificationsClose} sx={{ p: 2 }}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <Box>
                  <Avatar
                    alt=""
                    src="https://spike-nextjs-pro-main.vercel.app/images/profile/user-1.jpg"
                    sx={{
                      width: "45px",
                      height: "45px",
                      textAlign: "center",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box>
                  <Typography variant="body2" fontWeight={500}>
                    Roman Joined The Team!
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    congratulate him
                  </Typography>
                </Box>
              </Box>
            </MenuItem>

            <MenuItem onClick={handleNotificationsClose} sx={{ p: 1.5 }}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box>
                  <Avatar
                    alt=""
                    src="https://spike-nextjs-pro-main.vercel.app/images/profile/user-2.jpg"
                    sx={{
                      width: "45px",
                      height: "45px",
                      textAlign: "center",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box>
                  <Typography variant="body2" fontWeight={500}>
                    New message received
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Salma sent you a new message
                  </Typography>
                </Box>
              </Box>
            </MenuItem>

            <MenuItem onClick={handleNotificationsClose} sx={{ p: 1.5 }}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box>
                  <Avatar
                    alt=""
                    src="https://spike-nextjs-pro-main.vercel.app/images/profile/user-3.jpg"
                    sx={{
                      width: "45px",
                      height: "45px",
                      textAlign: "center",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box>
                  <Typography variant="body2" fontWeight={500}>
                    New Payment received
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Check your earnings
                  </Typography>
                </Box>
              </Box>
            </MenuItem>

            <MenuItem onClick={handleNotificationsClose} sx={{ p: 1.5 }}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box>
                  <Avatar
                    alt=""
                    src="https://spike-nextjs-pro-main.vercel.app/images/profile/user-4.jpg"
                    sx={{
                      width: "45px",
                      height: "45px",
                      textAlign: "center",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box>
                  <Typography variant="body2" fontWeight={500}>
                    Jolly Completed tasks
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Assign her new tasks
                  </Typography>
                </Box>
              </Box>
            </MenuItem>

            <MenuItem onClick={handleNotificationsClose} sx={{ p: 1.5 }}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <Box>
                  <Avatar
                    alt=""
                    src="https://spike-nextjs-pro-main.vercel.app/images/profile/user-1.jpg"
                    sx={{
                      width: "45px",
                      height: "45px",
                      textAlign: "center",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box>
                  <Typography variant="body2" fontWeight={500}>
                    Roman Joined The Team!
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    congratulate him
                  </Typography>
                </Box>
              </Box>
            </MenuItem>

            <MenuItem sx={{ justifyContent: "center", color: "primary.main" }}>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "20px",
                  textTransform: "none",
                  width: "100%",
                }}
              >
                View all notifications
              </Button>
            </MenuItem>
          </Menu>

          {/*Profile dropdown */}
          <Menu
            anchorEl={profileAnchorEl}
            open={profileOpen}
            onClose={handleprofileAnchorElClose}
            PaperProps={{
              sx: {
                borderRadius: "10px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                width: "320px",
              },
            }}
          >
            <MenuItem
              sx={{
                fontWeight: 600,
                color: "#000",
                display: "flex",
                mb: 1,
              }}
            >
              User Profile
            </MenuItem>

            <MenuItem onClick={handleprofileAnchorElClose}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Avatar
                  alt=""
                  src="https://spike-nextjs-pro-main.vercel.app/images/profile/user1.jpg"
                  sx={{
                    width: "100px",
                    height: "100px",
                    textAlign: "center",
                    objectFit: "cover",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      textAlign: "center",
                      color: "#000",
                      lineHeight: 1.2,
                    }}
                  >
                    Mike Neilson
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      textAlign: "center",
                      color: "#666",
                      lineHeight: 1.2,
                    }}
                  >
                    Admin {/* Role - change this text */}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      textAlign: "center",
                      color: "#666",
                      lineHeight: 1.2,
                      mt: 0.5,
                    }}
                  >
                    Info@Spike.com {/* Role - change this text */}
                  </Typography>
                </Box>
              </Box>
            </MenuItem>
            <Divider
              sx={{
                borderColor: "rgba(39, 38, 38, 0.3)",
                mx: 3,
                mt: 1,
                opacity: 0.3,
              }}
            />
            <MenuItem onClick={handleprofileAnchorElClose} sx={{ p: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Button
                  sx={{
                    textTransform: "none",
                    borderRadius: "15px",
                    fontWeight: 400,
                    minWidth: "auto",
                    padding: "10px",

                    background: "#e5f3fb",
                  }}
                >
                  <Person2Icon />
                </Button>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      textAlign: "center",
                      color: "#000",
                      lineHeight: 1.2,
                    }}
                  >
                    My Profile
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      textAlign: "center",
                      color: "#666",
                      lineHeight: 1.2,
                      fontWeight: 300,
                    }}
                  >
                    Account Settings {/* Role - change this text */}
                  </Typography>
                </Box>
              </Box>
            </MenuItem>

            <MenuItem onClick={handleprofileAnchorElClose} sx={{ p: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Button
                  sx={{
                    textTransform: "none",
                    borderRadius: "15px",
                    fontWeight: 400,
                    minWidth: "auto",
                    padding: "10px",
                    color: "lightgreen",
                    background: "#dffff3",
                  }}
                >
                  <GppGoodOutlinedIcon />
                </Button>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      textAlign: "center",
                      color: "#000",
                      lineHeight: 1.2,
                    }}
                  >
                    My Inbox
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      textAlign: "center",
                      color: "#666",
                      lineHeight: 1.2,
                      fontWeight: 300,
                    }}
                  >
                    Messages & Emails {/* Role - change this text */}
                  </Typography>
                </Box>
              </Box>
            </MenuItem>

            <MenuItem onClick={handleprofileAnchorElClose} sx={{ p: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Button
                  sx={{
                    textTransform: "none",
                    borderRadius: "15px",
                    fontWeight: 400,
                    minWidth: "auto",
                    padding: "10px",
                    background: "#ffede9",
                    color: "lightcoral",
                  }}
                >
                  <CalendarMonthOutlinedIcon />
                </Button>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      textAlign: "center",
                      color: "#000",
                      lineHeight: 1.2,
                    }}
                  >
                    My Tasks
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      textAlign: "center",
                      color: "#666",
                      lineHeight: 1.2,
                      fontWeight: 300,
                    }}
                  >
                    To-Do and Daily Tasks {/* Role - change this text */}
                  </Typography>
                </Box>
              </Box>
            </MenuItem>

            <MenuItem sx={{ justifyContent: "center", color: "primary.main" }}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "20px",
                  textTransform: "none",
                  width: "100%",
                }}
              >
                Logout
              </Button>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Right Sidebar Drawer */}
      <Drawer
        anchor="right"
        open={sidebarOpen}
        onClose={closeSidebar}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,

            height: "calc(100% - 1px)",
            backgroundColor: "#fff",
          },
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Shopping Cart
          </Typography>
          {/* <IconButton onClick={closeSidebar}>
            <CloseIcon />
          </IconButton> */}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src="https://spike-nextjs-pro-main.vercel.app/images/products/empty-shopping-cart.svg"
            alt=""
            style={{ width: "200px", height: "200px" }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: "18px",
              }}
            >
              Cart is Empty
            </Typography>

            <Box sx={{ p: 2, mt: "auto" }}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  color: "#fff",
                  borderRadius: "20px",
                  fontWeight: 300,
                  textTransform: "none",
                }}
              >
                Go back to Shopping
              </Button>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
