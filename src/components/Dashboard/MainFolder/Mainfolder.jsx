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
    <Box sx={{ display: {md:"flex",sm:"content",}, }}>
      <Sidebar
        sx={{ mt: 10 }}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      {/* Main content */}
      <Box component="main" sx={{p:{xs:0, md:3, sm:1}}}>
        {/* Header */}
        <Grid item xs={12} md={4} sx={{p:{xs:0}}}>
          <Header toggleSidebar={handleDrawerToggle} />
        </Grid>

        {/* Dashboard content */}
        <Grid container spacing={4}>
          {/* First Row: Barchart & PieCharts */}
          <Grid container>
            <Grid item size={{ xs: 12, md: 3, sm:6}}>
              <Barchart />
              <PieCharts />
            </Grid>

            {/* Centercard */}
            <Grid item size={{ xs: 12, md: 6 }}>
              <Centercard />
            </Grid>

            {/* ThirdCharts & FourthCharts */}
            <Grid item size={{ xs: 12, md: 3, sm:6 }}>
              <ThirdCharts />
              <FourthCharts />
            </Grid>
          </Grid>

          {/* Second Row: Mapsection and Tablecontent */}

            <Grid item size={{ xs: 12, md: 4 }}>
              <Mapsection />
            </Grid> 
            <Grid item size={{ xs: 12, md: 8 }}>
              <Tablecontent />
            </Grid>
          
          {/* Databox - Full width */}
          <Grid item size={12}>
            <Databox />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Mainfolder;
