// Sidebar.jsx
import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Avatar,
  Collapse,
  IconButton,
  Badge,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  Dashboard as DashboardIcon,
  Home as HomeIcon,
  Apps as AppsIcon,
  Contacts as ContactsIcon,
  Article as BlogIcon,
  ShoppingCart as EcommerceIcon,
  Chat as ChatIcon,
  People as UsersIcon,
  ExpandLess,
  ExpandMore,
  ChevronLeft,
  ChevronRight,
  Notifications,
  Settings,
  HelpOutline,
  Person,
  Logout,
  ShoppingCart,
  ChatBubbleOutline,
  NoteAlt,
  CalendarToday,
  Email,
  ConfirmationNumber,
  ViewKanban,
} from "@mui/icons-material";

const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [openHome, setOpenHome] = useState(false);
  const [openApps, setOpenApps] = useState(false);
  const [openBlogs, setOpenBlogs] = useState(false);
  const [openEcommerce, setEcommerce] = useState(false);
  const [openUser, setUser] = useState(false);
  const [openUsertwo, setUsertwo] = useState(false);

  const drawerWidth = 260;

  const handleHomeClick = () => {
    setOpenHome(!openHome);
  };

  const handleEcomClick = () => {
    setEcommerce(!openEcommerce);
  };

  const handleAppsClick = () => {
    setOpenApps(!openApps);
  };

  const handleBlogsClick = () => {
    setOpenBlogs(!openBlogs);
  };

  const handleUserClick = () => {
    setUser(!openUser);
  };

  const handleUserTwoClick = () => {
    setUsertwo(!openUsertwo);
  };

  const drawerContent = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "#fff",
        overflow: "hidden",
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: "#f1f1f1",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#888",
          borderRadius: "4px",
          height: "30px !important",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },
      }}
    >
      {/* Logo Area */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "20px 20px",
          width: "174px",
          height: "70px",
          flexShrink: 0,
        }}
      >
        <img
          src="https://spike-nextjs-pro-main.vercel.app/images/logos/logo-dark.svg"
          alt=""
        />
      </Box>

      {/* Main Content with Scroll */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
            borderRadius: "4px",
            marginTop: "10px",
            marginBottom: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#888",
            borderRadius: "4px",
            height: "50px",
            minHeight: "50px",
            maxHeight: "50px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },
        }}
      >
        {/* HOME Section with Apps */}
        <Box sx={{ mt: 2 }}>
          <Typography
            sx={{ fontSize: "15px", fontWeight: 600, color: "grey", ml: 3 }}
          >
            HOME
          </Typography>

          <List sx={{ p: 0 }}>
            <ListItemButton sx={{ gap: 2, p: 1, ml: 3 }}>
              <DashboardIcon sx={{ color: "#666" }} />
              <ListItemText
                primary="Dashboard 1"
                primaryTypographyProps={{ fontSize: "0.9rem" }}
              />
            </ListItemButton>
            <ListItemButton sx={{ gap: 2, p: 1, ml: 3 }}>
              <DashboardIcon sx={{ color: "#666" }} />
              <ListItemText
                primary="Dashboard 2"
                primaryTypographyProps={{ fontSize: "0.9rem" }}
              />
            </ListItemButton>

            <List sx={{ flex: 1 }}>
              {/* Frontend Pages */}
              <ListItem disablePadding>
                <ListItemButton
                  onClick={handleHomeClick}
                  sx={{
                    ml: 2,
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.04)",
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Frontend Pages" />
                  {openHome ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </ListItem>

              <Collapse in={openHome} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {[
                    "Homepage",
                    "About Us",
                    "Blog",
                    "Blog Details",
                    "Contact",
                    "Portfolio",
                    "Pricing",
                  ].map((item, index) => (
                    <ListItemButton
                      key={index}
                      sx={{
                        padding: "10px 20px 10px 56px",
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.04)",
                        },
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 36, color: "#666" }}>
                        <FiberManualRecordIcon
                          sx={{ fontSize: "12px", color: "lightgrey" }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{
                          fontSize: "0.9rem",
                          color: "#666",
                        }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </List>

            {/* Main Navigation Menu */}
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 600,
                color: "grey",
                ml: 3,
                mt: 3,
              }}
            >
              APPS
            </Typography>
            {/* Apps Section in HOME area */}
            <ListItem disablePadding>
              <ListItemButton
                onClick={handleAppsClick}
                sx={{
                  gap: 2,
                  p: 2,
                  ml: 2,
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                  },
                }}
              >
                <AppsIcon sx={{ color: "#666" }} />
                <ListItemText
                  primary="Blogs"
                  primaryTypographyProps={{ fontSize: "0.9rem" }}
                />
                {openApps ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>

            {/* Apps Submenu */}
            <Collapse in={openApps} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{
                    padding: "10px 20px 10px 56px",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.04)",
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36, color: "#666" }}>
                    <ContactsIcon sx={{ fontSize: "1rem" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Contacts"
                    primaryTypographyProps={{
                      fontSize: "0.9rem",
                      color: "#666",
                    }}
                  />
                </ListItemButton>
                <ListItemButton
                  sx={{
                    padding: "10px 20px 10px 56px",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.04)",
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36, color: "#666" }}>
                    <BlogIcon sx={{ fontSize: "1rem" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Posts"
                    primaryTypographyProps={{
                      fontSize: "0.9rem",
                      color: "#666",
                    }}
                  />
                </ListItemButton>
                <ListItemButton
                  sx={{
                    padding: "10px 20px 10px 56px",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.04)",
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36, color: "#666" }}>
                    <EcommerceIcon sx={{ fontSize: "1rem" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Details"
                    primaryTypographyProps={{
                      fontSize: "0.9rem",
                      color: "#666",
                    }}
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </List>

          <List sx={{ flex: 1 }}>
            {/* Ecommerce Pages */}
            <ListItem disablePadding>
              <ListItemButton
                onClick={handleEcomClick}
                sx={{
                  ml: 2,
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <ShoppingCart />
                </ListItemIcon>
                <ListItemText primary="Ecommerce" />
                {openEcommerce ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>

            <Collapse in={openEcommerce} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {[
                  "Shop",
                  "Shop V2",
                  "Detail",
                  "List",
                  "Checkout",
                  "Add Product",
                  "Edit Product",
                ].map((item, index) => (
                  <ListItemButton
                    key={index}
                    sx={{
                      padding: "10px 20px 10px 56px",
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.04)",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 36, color: "#666" }}>
                      <FiberManualRecordIcon
                        sx={{ fontSize: "12px", color: "lightgrey" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        fontSize: "0.9rem",
                        color: "#666",
                      }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>

            <ListItemButton sx={{ gap: 2, p: 1, ml: 3 }}>
              <ChatBubbleOutline sx={{ color: "#666" }} />
              <ListItemText
                primary="Chats"
                primaryTypographyProps={{ fontSize: "0.9rem" }}
              />
            </ListItemButton>
          </List>

          <List sx={{ flex: 1 }}>
            {/* User Pages */}
            <ListItem disablePadding>
              <ListItemButton
                onClick={handleUserClick}
                sx={{
                  ml: 2,
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <UsersIcon />
                </ListItemIcon>
                <ListItemText primary="Users" />
                {openUser ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>

            <Collapse in={openUser} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {["Profile", "Followers", "Friends", "Gallery"].map(
                  (item, index) => (
                    <ListItemButton
                      key={index}
                      sx={{
                        padding: "10px 20px 10px 56px",
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.04)",
                        },
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 36, color: "#666" }}>
                        <FiberManualRecordIcon
                          sx={{ fontSize: "12px", color: "lightgrey" }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{
                          fontSize: "0.9rem",
                          color: "#666",
                        }}
                      />
                    </ListItemButton>
                  )
                )}
              </List>
            </Collapse>
          </List>

          <List sx={{ flex: 1 }}>
            {/* User Pages 2 */}
            <ListItem disablePadding>
              <ListItemButton
                onClick={handleUserTwoClick}
                sx={{
                  ml: 2,
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Users v2" />
                {openUsertwo ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>

            <Collapse in={openUsertwo} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {["Profile", "Teams", "Projects", "Connections"].map(
                  (item, index) => (
                    <ListItemButton
                      key={index}
                      sx={{
                        padding: "10px 20px 10px 56px",
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.04)",
                        },
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 36, color: "#666" }}>
                        <FiberManualRecordIcon
                          sx={{ fontSize: "12px", color: "lightgrey" }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{
                          fontSize: "0.9rem",
                          color: "#666",
                        }}
                      />
                    </ListItemButton>
                  )
                )}
              </List>
            </Collapse>
            
            {/* Additional Menu Items with Proper Icons */}
            <ListItemButton sx={{ gap: 2, p: 1, ml: 3 }}>
              <NoteAlt sx={{ color: "#666" }} />
              <ListItemText
                primary="Notes"
                primaryTypographyProps={{ fontSize: "0.9rem" }}
              />
            </ListItemButton>
            <ListItemButton sx={{ gap: 2, p: 1, ml: 3 }}>
              <CalendarToday sx={{ color: "#666" }} />
              <ListItemText
                primary="Calendar"
                primaryTypographyProps={{ fontSize: "0.9rem" }}
              />
            </ListItemButton>
            <ListItemButton sx={{ gap: 2, p: 1, ml: 3 }}>
              <Email sx={{ color: "#666" }} />
              <ListItemText
                primary="Email"
                primaryTypographyProps={{ fontSize: "0.9rem" }}
              />
            </ListItemButton>
            <ListItemButton sx={{ gap: 2, p: 1, ml: 3 }}>
              <ConfirmationNumber sx={{ color: "#666" }} />
              <ListItemText
                primary="Tickets"
                primaryTypographyProps={{ fontSize: "0.9rem" }}
              />
            </ListItemButton>
            <ListItemButton sx={{ gap: 2, p: 1, ml: 3 }}>
              <ViewKanban sx={{ color: "#666" }} />
              <ListItemText
                primary="Kanban"
                primaryTypographyProps={{ fontSize: "0.9rem" }}
              />
            </ListItemButton>
          </List>
        </Box>
      </Box>

      {/* Logout Section at the bottom */}
      <Box
        sx={{
          mt: "auto",
          p: 2,
          borderTop: "1px solid #f0f0f0",
          backgroundColor: "primary",
        }}
      >
        <ListItemButton
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            p: 1,
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
            },
          }}
        >
          <Avatar
            alt="User"
            src="https://spike-nextjs-pro-main.vercel.app/images/profile/user1.jpg"
            sx={{
              width: 40,
              height: 40,
            }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#000",
              }}
            >
              Mike Neilson
            </Typography>
            <Typography
              sx={{
                fontSize: "0.8rem",
                color: "#666",
              }}
            >
              Admin
            </Typography>
          </Box>
          <Logout sx={{ color: "#666", fontSize: "1.2rem" }} />
        </ListItemButton>
      </Box>
    </Box>
  );

  return (
    <>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              boxShadow: "4px 0px 20px rgba(0, 0, 0, 0.08)",
              borderRight: "none",
            },
          }}
        >
          {drawerContent}
        </Drawer>

        {/* Desktop Drawer - Main fix is here */}
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
            position: "fixed",
            left: 0,
            top: 0,
            height: "100vh",
            width: drawerWidth,
            zIndex: theme.zIndex.drawer,
            boxShadow: "4px 0px 20px rgba(0, 0, 0, 0.08)",
            backgroundColor: "#fff",
            borderRadius: "0 20px 20px 0",
            overflow: "hidden",
          }}
        >
          {drawerContent}
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;