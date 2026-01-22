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
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  // Track active item
  const [activeItem, setActiveItem] = useState("Dashboard 1");

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

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    // On mobile, close the drawer when an item is clicked
    if (isMobile) {
      handleDrawerToggle();
    }
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
        <Box sx={{ mt: 1 }}>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 600,
              color: "grey",
              ml: 3,
              mb: 2,
            }}
          >
            HOME
          </Typography>

          <List sx={{ p: 0 }}>
            {/* Dashboard 1 - Active by default */}
            <ListItemButton
              onClick={() => handleItemClick("Dashboard 1")}
              sx={{
                gap: 2,
                p: 1,
                ml: 3,
                position: "relative",
                overflow: "hidden",
                borderRadius: "20px",
                backgroundColor:
                  activeItem === "Dashboard 1" ? "#e3f2fd" : "transparent",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: activeItem === "Dashboard 1" ? "4px" : "0px",
                  backgroundColor:
                    activeItem === "Dashboard 1" ? "#1976d2" : "transparent",
                  borderTopRightRadius: "4px",
                  borderBottomRightRadius: "4px",
                  transition: "width 0.3s ease",
                },
                "&:hover": {
                  backgroundColor: "#ff7f5033",
                  "&::before": {
                    backgroundColor: "#FF7F50",
                    width: "6px",
                  },
                  "& .MuiListItemIcon-root": {
                    color: "#FF7F50",
                  },
                  "& .MuiListItemText-primary": {
                    color: "#FF7F50",
                  },
                },
              }}
            >
              <DashboardIcon
                sx={{
                  color: activeItem === "Dashboard 1" ? "#1976d2" : "#666",
                  transition: "color 0.3s ease",
                }}
              />
              <ListItemText
                primary="Dashboard 1"
                primaryTypographyProps={{
                  fontSize: "0.9rem",
                  color: activeItem === "Dashboard 1" ? "#1976d2" : "#666",
                  fontWeight: activeItem === "Dashboard 1" ? 600 : 400,
                  transition: "color 0.3s ease",
                }}
              />
            </ListItemButton>

            {/* Dashboard 2 */}
            <ListItemButton
              onClick={() => handleItemClick("Dashboard 2")}
              sx={{
                gap: 2,
                p: 1,
                ml: 3,
                position: "relative",
                overflow: "hidden",
                borderRadius: "20px",
                backgroundColor:
                  activeItem === "Dashboard 2" ? "#e3f2fd" : "transparent",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: activeItem === "Dashboard 2" ? "4px" : "0px",
                  backgroundColor:
                    activeItem === "Dashboard 2" ? "#1976d2" : "transparent",
                  borderTopRightRadius: "4px",
                  borderBottomRightRadius: "4px",
                  transition: "width 0.3s ease",
                },
                "&:hover": {
                  backgroundColor: "#ff7f5033",
                  "&::before": {
                    backgroundColor: "#FF7F50",
                    width: "6px",
                  },
                  "& .MuiListItemIcon-root": {
                    color: "#FF7F50",
                  },
                  "& .MuiListItemText-primary": {
                    color: "#FF7F50",
                  },
                },
              }}
            >
              <DashboardIcon
                sx={{
                  color: activeItem === "Dashboard 2" ? "#1976d2" : "#666",
                  transition: "color 0.3s ease",
                }}
              />
              <ListItemText
                primary="Dashboard 2"
                primaryTypographyProps={{
                  fontSize: "0.9rem",
                  color: activeItem === "Dashboard 2" ? "#1976d2" : "#666",
                  fontWeight: activeItem === "Dashboard 2" ? 600 : 400,
                  transition: "color 0.3s ease",
                }}
              />
            </ListItemButton>

            {/* Frontend Pages */}
            <ListItem disablePadding>
              <ListItemButton
                onClick={handleHomeClick}
                sx={{
                  ml: 2,
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "20px",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "0px",
                    backgroundColor: "transparent",
                    borderTopRightRadius: "4px",
                    borderBottomRightRadius: "4px",
                    transition: "all 0.3s ease",
                  },
                  "&:hover": {
                    backgroundColor: "#ff7f5033",
                    "&::before": {
                      backgroundColor: "#FF7F50",
                      width: "6px",
                    },
                    "& .MuiListItemIcon-root": {
                      color: "#FF7F50",
                    },
                    "& .MuiListItemText-primary": {
                      color: "#FF7F50",
                    },
                  },
                }}
              >
                <ListItemIcon
                  sx={{ minWidth: 40, transition: "color 0.3s ease" }}
                >
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
                    onClick={() => handleItemClick(item)}
                    sx={{
                      padding: "10px 20px 10px 56px",
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "20px",
                      margin: "2px 0",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: activeItem === item ? "4px" : "0px",
                        backgroundColor:
                          activeItem === item ? "#1976d2" : "transparent",
                        borderTopRightRadius: "4px",
                        borderBottomRightRadius: "4px",
                        transition: "width 0.3s ease",
                      },
                      "&:hover": {
                        backgroundColor: "#ff7f5033",
                        "&::before": {
                          backgroundColor: "#FF7F50",
                          width: "6px",
                        },
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 36,
                        color: "#666",
                        transition: "color 0.3s ease",
                      }}
                    >
                      <FiberManualRecordIcon
                        sx={{ fontSize: "12px", color: "lightgrey" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        fontSize: "0.9rem",
                        color: activeItem === item ? "#1976d2" : "#666",
                        fontWeight: activeItem === item ? 600 : 400,
                        transition: "color 0.3s ease",
                      }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>

            {/* Main Navigation Menu */}
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 600,
                color: "grey",
                ml: 3,
                mt: 3,
              }}
            >
              APPS
            </Typography>

            <ListItemButton
              onClick={() => {
                navigate("/contacts"); // Navigate to contacts page
                if (isMobile) {
                  handleDrawerToggle(); // Close sidebar on mobile
                }
              }}
              sx={{
                gap: 2,
                p: 1,
                ml: 3,
                position: "relative",
                overflow: "hidden",
                borderRadius: "20px",
                backgroundColor:
                  activeItem === "Contacts" ? "#90ee9033" : "transparent",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: activeItem === "Contacts" ? "4px" : "0px",
                  backgroundColor:
                    activeItem === "Contacts" ? "#90EE90" : "transparent",
                  borderTopRightRadius: "4px",
                  borderBottomRightRadius: "4px",
                  transition: "width 0.3s ease",
                },
                "&:hover": {
                  backgroundColor: "#ff7f5033",
                  "&::before": {
                    backgroundColor: "#FF7F50",
                    width: "6px",
                  },
                  "& .MuiListItemText-primary": {
                    color: "#FF7F50",
                  },
                },
              }}
            >
              <ContactsIcon
                sx={{
                  color: activeItem === "Contacts" ? "#FF7F50" : "#666",
                  transition: "color 0.3s ease",
                }}
              />
              <ListItemText
                primary="Contacts"
                primaryTypographyProps={{
                  fontSize: "0.9rem",
                  color: activeItem === "Contacts" ? "#FF7F50" : "#666",
                  fontWeight: activeItem === "Contacts" ? 600 : 400,
                  transition: "color 0.3s ease",
                }}
              />
            </ListItemButton>

            {/* Apps Section in HOME area */}
            <ListItem disablePadding>
              <ListItemButton
                onClick={handleAppsClick}
                sx={{
                  gap: 2,
                  ml: 2,
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "20px",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "0px",
                    backgroundColor: "transparent",
                    borderTopRightRadius: "4px",
                    borderBottomRightRadius: "4px",
                    transition: "all 0.3s ease",
                  },
                  "&:hover": {
                    backgroundColor: "#ff7f5033",
                    "&::before": {
                      backgroundColor: "#FF7F50",
                      width: "6px",
                    },
                    "& .MuiListItemIcon-root": {
                      color: "#FF7F50",
                    },
                    "& .MuiListItemText-primary": {
                      color: "#FF7F50",
                    },
                  },
                }}
              >
                <AppsIcon
                  sx={{ color: "#666", transition: "color 0.3s ease" }}
                />
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
                  onClick={() => handleItemClick("Posts")}
                  sx={{
                    padding: "10px 20px 10px 56px",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "20px",
                    margin: "2px 0",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: activeItem === "Posts" ? "4px" : "0px",
                      backgroundColor:
                        activeItem === "Posts" ? "#1976d2" : "transparent",
                      borderTopRightRadius: "4px",
                      borderBottomRightRadius: "4px",
                      transition: "width 0.3s ease",
                    },
                    "&:hover": {
                      backgroundColor: "#ff7f5033",
                      "&::before": {
                        backgroundColor: "#FF7F50",
                        width: "6px",
                      },
                      "& .MuiListItemIcon-root": {
                        color: "#FF7F50",
                      },
                      "& .MuiListItemText-primary": {
                        color: "#FF7F50",
                      },
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 36,
                      color: "#666",
                      transition: "color 0.3s ease",
                    }}
                  >
                    <BlogIcon sx={{ fontSize: "1rem" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Posts"
                    primaryTypographyProps={{
                      fontSize: "0.9rem",
                      color: activeItem === "Posts" ? "#1976d2" : "#666",
                      fontWeight: activeItem === "Posts" ? 600 : 400,
                      transition: "color 0.3s ease",
                    }}
                  />
                </ListItemButton>

                <ListItemButton
                  onClick={() => handleItemClick("Details")}
                  sx={{
                    padding: "10px 20px 10px 56px",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "20px",
                    margin: "2px 0",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: activeItem === "Details" ? "4px" : "0px",
                      backgroundColor:
                        activeItem === "Details" ? "#1976d2" : "transparent",
                      borderTopRightRadius: "4px",
                      borderBottomRightRadius: "4px",
                      transition: "width 0.3s ease",
                    },
                    "&:hover": {
                      backgroundColor: "#ff7f5033",
                      "&::before": {
                        backgroundColor: "#FF7F50",
                        width: "6px",
                      },
                      "& .MuiListItemIcon-root": {
                        color: "#FF7F50",
                      },
                      "& .MuiListItemText-primary": {
                        color: "#FF7F50",
                      },
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 36,
                      color: "#666",
                      transition: "color 0.3s ease",
                    }}
                  >
                    <EcommerceIcon sx={{ fontSize: "1rem" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Details"
                    primaryTypographyProps={{
                      fontSize: "0.9rem",
                      color: activeItem === "Details" ? "#1976d2" : "#666",
                      fontWeight: activeItem === "Details" ? 600 : 400,
                      transition: "color 0.3s ease",
                    }}
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </List>

          {/* Ecommerce Pages */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleEcomClick}
              sx={{
                ml: 2,
                position: "relative",
                overflow: "hidden",
                borderRadius: "20px",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "0px",
                  backgroundColor: "transparent",
                  borderTopRightRadius: "4px",
                  borderBottomRightRadius: "4px",
                  transition: "all 0.3s ease",
                },
                "&:hover": {
                  backgroundColor: "#ff7f5033",
                  "&::before": {
                    backgroundColor: "#FF7F50",
                    width: "6px",
                  },
                  "& .MuiListItemIcon-root": {
                    color: "#FF7F50",
                  },
                  "& .MuiListItemText-primary": {
                    color: "#FF7F50",
                  },
                },
              }}
            >
              <ListItemIcon
                sx={{ minWidth: 40, transition: "color 0.3s ease" }}
              >
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
                  onClick={() => handleItemClick(item)}
                  sx={{
                    padding: "10px 20px 10px 56px",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "20px",
                    margin: "2px 0",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: activeItem === item ? "4px" : "0px",
                      backgroundColor:
                        activeItem === item ? "#1976d2" : "transparent",
                      borderTopRightRadius: "4px",
                      borderBottomRightRadius: "4px",
                      transition: "width 0.3s ease",
                    },
                    "&:hover": {
                      backgroundColor: "#ff7f5033",
                      "&::before": {
                        backgroundColor: "#FF7F50",
                        width: "6px",
                      },
                      "& .MuiListItemIcon-root": {
                        color: "#FF7F50",
                      },
                      "& .MuiListItemText-primary": {
                        color: "#FF7F50",
                      },
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 36,
                      color: "#666",
                      transition: "color 0.3s ease",
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{ fontSize: "12px", color: "lightgrey" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      fontSize: "0.9rem",
                      color: activeItem === item ? "#1976d2" : "#666",
                      fontWeight: activeItem === item ? 600 : 400,
                      transition: "color 0.3s ease",
                    }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Collapse>

          {/* Chats with lightgreen background when active */}
          <ListItemButton
            onClick={() => handleItemClick("Chats")}
            sx={{
              gap: 2,
              p: 1,
              ml: 3,
              position: "relative",
              overflow: "hidden",
              borderRadius: "20px",
              backgroundColor:
                activeItem === "Chats" ? "#90ee9033" : "transparent",
              "&::before": {
                content: '""',
                position: "absolute",
                left: 0,
                top: 0,
                width: activeItem === "Chats" ? "4px" : "0px",
                backgroundColor:
                  activeItem === "Chats" ? "#90EE90" : "transparent",
                borderTopRightRadius: "4px",
                borderBottomRightRadius: "4px",
                transition: "width 0.3s ease",
              },
              "&:hover": {
                backgroundColor: "#ff7f5033",
                "&::before": {
                  backgroundColor: "#FF7F50",
                  width: "6px",
                },
                "& .MuiListItemText-primary": {
                  color: "#FF7F50",
                },
              },
            }}
          >
            <ChatBubbleOutline
              sx={{
                color: activeItem === "Chats" ? "#90EE90" : "#666",
                transition: "color 0.3s ease",
              }}
            />
            <ListItemText
              primary="Chats"
              primaryTypographyProps={{
                fontSize: "0.9rem",
                color: activeItem === "Chats" ? "#90EE90" : "#666",
                fontWeight: activeItem === "Chats" ? 600 : 400,
                transition: "color 0.3s ease",
              }}
            />
          </ListItemButton>

          {/* User Pages */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleUserClick}
              sx={{
                ml: 2,
                position: "relative",
                overflow: "hidden",
                borderRadius: "20px",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "0px",
                  backgroundColor: "transparent",
                  borderTopRightRadius: "4px",
                  borderBottomRightRadius: "4px",
                  transition: "all 0.3s ease",
                },
                "&:hover": {
                  backgroundColor: "#ff7f5033",
                  "&::before": {
                    backgroundColor: "#FF7F50",
                    width: "6px",
                  },
                  "& .MuiListItemIcon-root": {
                    color: "#FF7F50",
                  },
                  "& .MuiListItemText-primary": {
                    color: "#FF7F50",
                  },
                },
              }}
            >
              <ListItemIcon
                sx={{ minWidth: 40, transition: "color 0.3s ease" }}
              >
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
                    onClick={() => handleItemClick(item)}
                    sx={{
                      padding: "10px 20px 10px 56px",
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "20px",
                      margin: "2px 0",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: activeItem === item ? "4px" : "0px",
                        backgroundColor:
                          activeItem === item ? "#1976d2" : "transparent",
                        borderTopRightRadius: "4px",
                        borderBottomRightRadius: "4px",
                        transition: "width 0.3s ease",
                      },
                      "&:hover": {
                        backgroundColor: "#ff7f5033",
                        "&::before": {
                          backgroundColor: "#FF7F50",
                          width: "6px",
                        },
                        "& .MuiListItemIcon-root": {
                          color: "#FF7F50",
                        },
                        "& .MuiListItemText-primary": {
                          color: "#FF7F50",
                        },
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 36,
                        color: "#666",
                        transition: "color 0.3s ease",
                      }}
                    >
                      <FiberManualRecordIcon
                        sx={{ fontSize: "12px", color: "lightgrey" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        fontSize: "0.9rem",
                        color: activeItem === item ? "#1976d2" : "#666",
                        fontWeight: activeItem === item ? 600 : 400,
                        transition: "color 0.3s ease",
                      }}
                    />
                  </ListItemButton>
                )
              )}
            </List>
          </Collapse>

          {/* User Pages 2 */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleUserTwoClick}
              sx={{
                ml: 2,
                position: "relative",
                overflow: "hidden",
                borderRadius: "20px",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "0px",
                  backgroundColor: "transparent",
                  borderTopRightRadius: "4px",
                  borderBottomRightRadius: "4px",
                  transition: "all 0.3s ease",
                },
                "&:hover": {
                  backgroundColor: "#ff7f5033",
                  "&::before": {
                    backgroundColor: "#FF7F50",
                    width: "6px",
                  },
                  "& .MuiListItemIcon-root": {
                    color: "#FF7F50",
                  },
                  "& .MuiListItemText-primary": {
                    color: "#FF7F50",
                  },
                },
              }}
            >
              <ListItemIcon
                sx={{ minWidth: 40, transition: "color 0.3s ease" }}
              >
                <HomeIcon sx={{ fontSize: "1rem" }} />
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
                    onClick={() => handleItemClick(item)}
                    sx={{
                      padding: "10px 20px 10px 56px",
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "20px",
                      margin: "2px 0",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: activeItem === item ? "4px" : "0px",
                        backgroundColor:
                          activeItem === item ? "#1976d2" : "transparent",
                        borderTopRightRadius: "4px",
                        borderBottomRightRadius: "4px",
                        transition: "width 0.3s ease",
                      },
                      "&:hover": {
                        backgroundColor: "#ff7f5033",
                        "&::before": {
                          backgroundColor: "#FF7F50",
                          width: "6px",
                        },
                        "& .MuiListItemIcon-root": {
                          color: "#FF7F50",
                        },
                        "& .MuiListItemText-primary": {
                          color: "#FF7F50",
                        },
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 36,
                        color: "#666",
                        transition: "color 0.3s ease",
                      }}
                    >
                      <FiberManualRecordIcon
                        sx={{ fontSize: "12px", color: "lightgrey" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        fontSize: "0.9rem",
                        color: activeItem === item ? "#1976d2" : "#666",
                        fontWeight: activeItem === item ? 600 : 400,
                        transition: "color 0.3s ease",
                      }}
                    />
                  </ListItemButton>
                )
              )}
            </List>
          </Collapse>

          {/* Additional Menu Items with Proper Icons */}
          {["Notes", "Calendar", "Email", "Tickets", "Kanban"].map((item) => (
            <ListItemButton
              key={item}
              onClick={() => handleItemClick(item)}
              sx={{
                gap: 2,
                p: 1,
                ml: 3,
                position: "relative",
                overflow: "hidden",
                borderRadius: "20px",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: activeItem === item ? "4px" : "0px",
                  backgroundColor:
                    activeItem === item ? "#1976d2" : "transparent",
                  borderTopRightRadius: "4px",
                  borderBottomRightRadius: "4px",
                  transition: "width 0.3s ease",
                },
                "&:hover": {
                  backgroundColor: "#ff7f5033",
                  "&::before": {
                    backgroundColor: "#FF7F50",
                    width: "6px",
                  },
                  "& .MuiListItemIcon-root": {
                    color: "#FF7F50",
                  },
                  "& .MuiListItemText-primary": {
                    color: "#FF7F50",
                  },
                },
              }}
            >
              {item === "Notes" && (
                <NoteAlt
                  sx={{
                    color: activeItem === item ? "#1976d2" : "#666",
                    transition: "color 0.3s ease",
                  }}
                />
              )}
              {item === "Calendar" && (
                <CalendarToday
                  sx={{
                    color: activeItem === item ? "#1976d2" : "#666",
                    transition: "color 0.3s ease",
                  }}
                />
              )}
              {item === "Email" && (
                <Email
                  sx={{
                    color: activeItem === item ? "#1976d2" : "#666",
                    transition: "color 0.3s ease",
                  }}
                />
              )}
              {item === "Tickets" && (
                <ConfirmationNumber
                  sx={{
                    color: activeItem === item ? "#1976d2" : "#666",
                    transition: "color 0.3s ease",
                  }}
                />
              )}
              {item === "Kanban" && (
                <ViewKanban
                  sx={{
                    color: activeItem === item ? "#1976d2" : "#666",
                    transition: "color 0.3s ease",
                  }}
                />
              )}
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  fontSize: "0.9rem",
                  color: activeItem === item ? "#1976d2" : "#666",
                  fontWeight: activeItem === item ? 600 : 400,
                  transition: "color 0.3s ease",
                }}
              />
            </ListItemButton>
          ))}
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
            p: 2.5,
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              left: 0,
              top: 0,
              width: "0px",
              backgroundColor: "transparent",
              borderTopRightRadius: "4px",
              borderBottomRightRadius: "4px",
              transition: "all 0.3s ease",
            },
            "&:hover": {
              backgroundColor: "#E5F3FB",
              "&::before": {
                backgroundColor: "#E5F3FB",
                width: "6px",
              },
            },
          }}
          onClick={() => {
            // Clear localStorage
            localStorage.removeItem("user");
            localStorage.removeItem("users"); 
          
            // go to login page
            navigate("/login");
          }}
        >
          
          <Avatar
            alt="User"
            src="https://spike-nextjs-pro-main.vercel.app/images/profile/user1.jpg"
            sx={{
              width: 40,
              height: 40,
              transition: "border 0.3s ease",
            }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#000",
                transition: "color 0.3s ease",
              }}
            >
              Mike Neilson
            </Typography>
            <Typography
              sx={{
                fontSize: "0.8rem",
                color: "#666",
                transition: "color 0.3s ease",
              }}
            >
              Admin
            </Typography>
          </Box>
          <Logout
            sx={{
              color: "#666",
              fontSize: "1.2rem",
              transition: "color 0.3s ease",
            }}
          />
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
        {/* Mobile Drawer - Opens when menu button is clicked */}
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

        {/* Desktop Drawer - Always visible on desktop */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              mt: 1,
              ml: 1.5,

              boxShadow: "4px 0px 20px rgba(0, 0, 0, 0.08)",
              backgroundColor: "#fff",
              borderRadius: "0 20px 20px 0",
              borderRight: "none",
            },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      </Box>
    </>
  );
};

export default Sidebar;
