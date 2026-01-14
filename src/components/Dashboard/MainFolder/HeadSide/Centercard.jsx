import React from "react";
import {
  Box,
  Typography,
  Grid,
  Divider,
  Avatar,
  Button,
  Card,
  CardContent,
  Menu,
  MenuItem,
} from "@mui/material";
import Person2Icon from "@mui/icons-material/Person2";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const Centercard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState("March 2025");

  const months = ["March 2025", "April 2025", "May 2025"];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (month) => {
    setSelectedMonth(month);
    handleClose();
  };

  return (
    <Grid>
      <Box
        sx={{
          width: "500px",
          borderRadius: "10px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          p: 3,
          mt: 10,
          mr: 0,
          ml: 2,
          mb:1,
        }}
      >
        <Typography sx={{ fontWeight: 500, fontSize: "19px", fontStyle:'Poppins, sans-serif'}}>
          Congratulations Mike
        </Typography>
        <Typography sx={{ fontSize: "14px" }}>
          You have done 38% more sales
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box>
            <Box>
              <CardContent sx={{ p: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 2,
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
                        color: "#000",
                        lineHeight: 1.2,
                      }}
                    >
                      64 new Orders
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        color: "#666",
                        lineHeight: 1.2,
                        fontWeight: 300,
                      }}
                    >
                      Processing
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 2,
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
                        color: "#000",
                        lineHeight: 1.2,
                      }}
                    >
                      4 Orders
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        color: "#666",
                        lineHeight: 1.2,
                        fontWeight: 300,
                      }}
                    >
                      On hold
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 2,
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
                        color: "#000",
                        lineHeight: 1.2,
                      }}
                    >
                      12 Orders
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        color: "#666",
                        lineHeight: 1.2,
                        fontWeight: 300,
                      }}
                    >
                      Delivered
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Box>

          {/* image box */}
          <Box>
            <img
              src="	https://spike-nextjs-pro-main.vercel.app/images/backgrounds/man-working-on-laptop.png"
              alt=""
            />
          </Box>
        </Box>
        <Divider />
        {/* second card */}
        <Box sx={{ mt: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography sx={{ fontWeight: 500, fontSize: "19px" }}>
                Total Orders
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                Weekly orders updates
              </Typography>
            </Box>
            <Box>
              <Button
                aria-controls="month-menu"
                aria-haspopup="true"
                onClick={handleClick}
                sx={{ border: "1px solid lightgrey", borderRadius: "25px" }}
              >
                {selectedMonth}
              </Button>
              <Menu
                id="month-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {months.map((month) => (
                  <MenuItem key={month} onClick={() => handleSelect(month)}>
                    {month}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Box>

        <Box sx={{mt:1, mb:0}}>
          <LineChart
            sx={{
                "& .MuiMarkElement-animate":{
                    display:"none",
                },
                width:"100%",

                "& .MuiChartsAxis-root":{
                    opacity:0.5,
                },
                "& .MuiChartsAxis-line":{
                    display:"none",
                },
                "& .MuiChartsAxis-tick":{
                    display:"none",
                },
            }}
            xAxis={[
              {
                data: ["Mon", "Tus", "Wed", "Thu", "Fri", "Sat", "Sun"],
                scaleType: "point",
                tickNumber: 5, // Ensure all 7 days are shown
                tickLabelStyle: {
                  fontSize: 12,
                  fill: "#666",
                },
              },
            ]}
            yAxis={[
              {
                scaleType: "linear",
                min: 0,
                max: 40,
                tickNumber: 5, // Shows 0, 10, 20, 30, 40
                valueFormatter: (value) => `${value}k`,
                tickLabelStyle: {
                  fontSize: 12,
                  fill: "#666",
                },
              },
            ]}
            series={[
              {
                data: [0, 20, 15, 19, 14, 25, 32],
                showMark: ({ index }) => index % 2 === 0,
                color: "#1976d2",
                curve: "monotoneX",
        
              },
              {
                data: [0, 12, 19, 13, 26, 16, 25],
                showMark: ({ index }) => index % 2 === 0,
                color: "lightblue",
                curve: "monotoneX",
        
              },
            ]}
            height={300}
            grid={{
              vertical: true,
              horizontal: true,
            }}
            margin={{ top: 20}} // Adjusted margins
          />
        </Box>
      </Box>
    </Grid>
  );
};

export default Centercard;
