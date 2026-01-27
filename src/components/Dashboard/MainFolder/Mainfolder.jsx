import React from "react";
import { Grid, Box } from "@mui/material";
import Header from "./HeadSide/Header";
import Barchart from "./HeadSide/Barchart";
import PieCharts from "./HeadSide/Secondchart";
import Centercard from "./HeadSide/Centercard";
import ThirdCharts from "./HeadSide/ThirdCharts";
import FourthCharts from "./HeadSide/FourthCharts";
import Mapsection from "./HeadSide/Mapsection";
import Tablecontent from "./HeadSide/Tablecontent";
import Databox from "./HeadSide/Databox";
import Sidebar from "./HeadSide/Sidebar"; // Make sure this has default export
import { useState } from "react";

const Mainfolder = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
    
      <Sidebar
        sx={{ mt: 10 }}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}> 
        {/* Header */}
        <Grid item xs={12} md={4}>
          <Header toggleSidebar={handleDrawerToggle}/>
        </Grid>

        {/* Dashboard content */}
        <Grid container spacing={4}>
          {/* First Row: Barchart & PieCharts */}
          <Grid container columns={{ xs: 3.2, sm: 6, md: 8, lg:12 }}>
            <Grid item xs={12} md={4} size={3}>
              <Barchart />
              <PieCharts />
            </Grid>

            {/* Centercard */}
            <Grid item xs={12} md={4} size={6}>
              <Centercard />
            </Grid>

            {/* ThirdCharts & FourthCharts */}
            <Grid item xs={12} md={4} size={3}>
              <ThirdCharts />
              <FourthCharts />
            </Grid>
          </Grid>

          {/* Second Row: Mapsection and Tablecontent */}
          <Grid
            container
            columns={{ xs: 4, sm: 8, md: 12 }}
            item
            spacing={9}
            xs={12}
            md={6}
            size={12}
          >
            <Grid item xs={12} md={4} size={4}>
              <Mapsection />
            </Grid>
            <Grid item xs={2} md={4} size={8}>
              <Tablecontent />
            </Grid>
          </Grid>

          {/* Databox - Full width */}
          <Grid item xs={12}>
            <Databox />
          </Grid>

        </Grid>
      </Box>
    </Box>
  );
};

export default Mainfolder;
