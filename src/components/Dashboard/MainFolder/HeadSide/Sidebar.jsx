// // Sidebar.jsx
// import React, { useState } from 'react';
// import {
//   Box,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Divider,
//   Typography,
//   Avatar,
//   Collapse,
//   IconButton,
//   Badge,
//   useTheme,
//   useMediaQuery
// } from '@mui/material';
// import {
//   Dashboard as DashboardIcon,
//   Home as HomeIcon,
//   Apps as AppsIcon,
//   Contacts as ContactsIcon,
//   Article as BlogIcon,
//   ShoppingCart as EcommerceIcon,
//   Chat as ChatIcon,
//   People as UsersIcon,
//   ExpandLess,
//   ExpandMore,
//   ChevronLeft,
//   ChevronRight,
//   Notifications,
//   Settings,
//   HelpOutline,
//   Person
// } from '@mui/icons-material';

// const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const [openHome, setOpenHome] = useState(true);
//   const [openApps, setOpenApps] = useState(true);

//   const drawerWidth = 260;

//   const handleHomeClick = () => {
//     setOpenHome(!openHome);
//   };

//   const handleAppsClick = () => {
//     setOpenApps(!openApps);
//   };

//   const menuItems = [
//     {
//       text: 'Home',
//       icon: <HomeIcon />,
//       expandable: true,
//       open: openHome,
//       onClick: handleHomeClick,
//       subItems: [
//         { text: 'Dashboard 1', icon: <DashboardIcon /> },
//         { text: 'Dashboard 2', icon: <DashboardIcon /> },
//         { text: 'Frontend Pages', icon: <DashboardIcon /> }
//       ]
//     },
//     {
//       text: 'Apps',
//       icon: <AppsIcon />,
//       expandable: true,
//       open: openApps,
//       onClick: handleAppsClick,
//       subItems: [
//         { text: 'Contacts', icon: <ContactsIcon /> },
//         { text: 'Blog', icon: <BlogIcon /> },
//         { text: 'Ecommerce', icon: <EcommerceIcon /> },
//         { text: 'Chats', icon: <ChatIcon /> },
//         { text: 'Users', icon: <UsersIcon /> },
//         { text: 'Users v2', icon: <UsersIcon /> }
//       ]
//     }
//   ];

//   const drawerContent = (
//     <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%'}}>
//       {/* Logo Area */}
//       <Box
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           padding: '25px 20px',
          
         
//         }}
//       >
//         <Avatar
//           sx={{
//             bgcolor: '#3b82f6',
//             width: 40,
//             height: 40,
//             marginRight: 2,
//             fontWeight: 'bold'
//           }}
//         >
//           S
//         </Avatar>
//         <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//           Spike Admin
//         </Typography>
//       </Box>

//       {/* Navigation Menu */}
//       <List sx={{ flex: 1, padding: '10px 0',  }}>
//         {menuItems.map((item, index) => (
//           <Box key={index}>
//             <ListItem disablePadding>
//               <ListItemButton
//                 onClick={item.onClick}
//                 sx={{
//                   padding: '12px 20px',
                 
//                 }}
//               >
//                 <ListItemIcon sx={{ minWidth: 40 }}>
//                   {item.icon}
//                 </ListItemIcon>
//                 <ListItemText
//                   primary={item.text}
//                   primaryTypographyProps={{
                    
//                     fontWeight: 500
//                   }}
//                 />
//                 {item.expandable && (item.open ? <ExpandLess /> : <ExpandMore />)}
//               </ListItemButton>
//             </ListItem>

//             {item.expandable && (
//               <Collapse in={item.open} timeout="auto" unmountOnExit>
//                 <List component="div" disablePadding>
//                   {item.subItems.map((subItem, subIndex) => (
//                     <ListItemButton
//                       key={subIndex}
//                       sx={{
//                         padding: '10px 20px 10px 56px',
//                         '&:hover': {
//                           backgroundColor: 'rgba(255, 255, 255, 0.08)'
//                         }
//                       }}
//                     >
//                       <ListItemIcon sx={{ minWidth: 36 }}>
//                         {subItem.icon}
//                       </ListItemIcon>
//                       <ListItemText
//                         primary={subItem.text}
//                         primaryTypographyProps={{
                    
//                           fontSize: '0.9rem'
//                         }}
//                       />
//                     </ListItemButton>
//                   ))}
//                 </List>
//               </Collapse>
//             )}
//           </Box>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <>
//     <Box
//       component="nav"
//       sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//     >
//       {/* Mobile Drawer */}
//       <Drawer
//         variant="temporary"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{
//           keepMounted: true, // Better open performance on mobile
//         }}
//         sx={{
//           display: { xs: 'block', sm: 'none' },
//           '& .MuiDrawer-paper': {
//             boxSizing: 'border-box',
//             width: drawerWidth,
    
//           },
//         }}
//       >
//         {drawerContent}
//       </Drawer>

//       {/* Desktop Drawer */}
//       <Drawer
//         variant="permanent"
//         sx={{
//           display: { xs: 'none', sm: 'block' },
//           '& .MuiDrawer-paper': {
//             boxSizing: 'border-box',
//             width: drawerWidth,

            
//             borderRight: 'none'
//           },
//         }}
//         open
//       >
//         {drawerContent}
//       </Drawer>
//     </Box>    
    
//     </>
    

//   );
// };

// export default Sidebar;