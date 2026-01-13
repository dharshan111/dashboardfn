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

const Mainfolder = () => {
  return (
    <>
      <Grid item xs={12}>
        <Header />
      </Grid>

      <Box sx={{ p: 3 }}>
        {/* Header - Full width */}
        <Grid container spacing={3}>
          {/* First Row: Barchart, Centercard, ThirdCharts */}
          <Grid item xs={12} md={4}>
            <Barchart />
            <PieCharts />
          </Grid>
          <Grid item xs={12} md={4}>
            <Centercard />
          </Grid>
          <Grid item xs={12} md={4}>
            <ThirdCharts />
            <FourthCharts />
          </Grid>

          {/* Third Row: Mapsection (left) and Tablecontent (right) */}
          <Grid item xs={12} md={6}>
            <Mapsection />
          </Grid>
          <Grid item xs={12} md={6}>
            <Tablecontent />
          </Grid>

          {/* Databox - Full width */}
          <Grid item xs={12}>
            <Databox />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Mainfolder;
