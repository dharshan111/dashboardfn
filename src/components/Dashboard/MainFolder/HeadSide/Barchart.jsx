import { Box, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import StatHeader from "./StatHeader";

const pData = [2234, 3872, 2998, 4125, 3357, 2789, 2998];
const uData = [3098, 4215, 2384, 2101, 4752, 3593, 2384];
const xLabels = ["M", "T", "W", "T", "F", "S", "S"];

export default function StackedBarChart() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        padding: "10px",
        color: "#000",
        borderRadius: "20px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <StatHeader
        title="Payments"
        value="12,389"
        percent="-3.08%"
        percentColor="orange"
        subtitle="Last 7 days"
      />

      <BarChart
        height={180}
        series={[
          {
            data: pData,
            label: "Last year",
            stack: "total",
            color: "#74B9F2",
          },
          {
            data: uData,
            label: "This year",
            stack: "total",
            color: "#E3E3E3",
          },
        ]}
        xAxis={[
          {
            data: xLabels,
            scaleType: "band",
            tickLabelStyle: {
              fill: "#000",
              fontSize: "12px",
              fontWeight: 500,
            },
            axisLine: {
              stroke: "transparent", // Hide x-axis line
            },
            tickSize: 0,
          },
        ]}
        yAxis={[
          {
            width: 0, // Hide y-axis width
            tickLabelStyle: {
              fill: "transparent", // Hide y-axis labels
              fontSize: 0,
            },
            axisLine: {
              stroke: "transparent", // Hide y-axis line
            },
            tickSize: 0,
          },
        ]}
        grid={{
          vertical: false,
          horizontal: false, // Remove all grid lines
        }}
        borderRadius={8} // Rounded corners for bars
        slotProps={{
          legend: {
            hidden: true,
          },
        }}
        sx={{
          width: "100%",
          maxWidth: "200px",
          // General text styling
          "& text": {
            fill: "#b4b4b4ff",
            fontWeight: 200,
          },

          // Bar styling - make bars thinner
          "& .MuiBarElement-root": {
            width: isMobile ? 5 : 10,
            rx: 10,
            ry: 10,
          },

          // Tooltip styling
          "& .MuiChartsTooltip-root": {
            backgroundColor: "#1e293b",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            "& .MuiChartsTooltip-label, & .MuiChartsTooltip-value": {
              fill: "#fff !important",
            },
          },

          // X-axis labels only
          "& .MuiChartsAxis-tickLabel": {
            fill: "#000 !important",
            fontSize: "12px",
            fontWeight: 500,
          },

          // Hide all axis lines
          "& .MuiChartsAxis-line": {
            stroke: "transparent !important",
          },

          // Hide all ticks
          "& .MuiChartsAxis-tick": {
            stroke: "transparent !important",
          },

          // Hide legend
          "& .MuiChartsLegend-root": {
            display: "none",
          },

          // Remove chart container background/border
          "& .MuiChartsAxis-root": {
            "& text": {
              fill: "#000",
            },
          },

          // Remove chart area border if any
          "& .MuiChartsSurface-root": {
            overflow: "visible",
          },
        }}
      />

      <Box sx={{mt:1, mb:1,}}>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Box
            sx={{
              borderRadius: "30px",
              border: "2px solid #43baf1ff", // Add border to see the rounded corners
              width: 10,
              height: 10,
            }}
          ></Box>
          <Box sx={{ display: "flex", gap: 12 }}>
            <Typography sx={{ opacity: 0.7 }}>Paypal</Typography>
            <Typography sx={{ opacity: 0.7 }}>52%</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Box
            sx={{
              borderRadius: "30px",
              border: "2px solid lightgrey", // Add border to see the rounded corners
              width: 10,
              height: 10,
            }}
          ></Box>
          <Box sx={{ display: "flex", gap: 8 }}>
            <Typography sx={{ opacity: 0.7 }}>Credit card</Typography>
            <Typography sx={{ opacity: 0.7 }}>48%</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
