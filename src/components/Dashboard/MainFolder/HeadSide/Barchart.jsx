import { Box, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import StatHeader from "./StatHeader";

const pData = [2234, 3872, 2998, 4125, 3357, 2789, 2998];
const uData = [3098, 4215, 2384, 2101, 4752, 3593, 2384];
const xLabels = ["M", "T", "W", "T", "F", "S", "S"];

export default function StackedBarChart() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLaptop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        width: "100%",
        padding: "10px",
        color: "#000",
        borderRadius: "20px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        mt: 10,
        
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
        height={isMobile ? 180 : 175}
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
              fontSize: isMobile ? "10px" : "12px",
              fontWeight: 500,
            },
            axisLine: {
              stroke: "transparent",
            },
            tickSize: 0,
          },
        ]}
        yAxis={[
          {
            width: 0,
            tickLabelStyle: {
              fill: "transparent",
              fontSize: 0,
            },
            axisLine: {
              stroke: "transparent",
            },
            tickSize: 0,
          },
        ]}
        grid={{
          vertical: false,
          horizontal: false,
        }}
        borderRadius={8}
        slotProps={{
          legend: {
            hidden: true,
          },
        }}
        sx={{
          width: "100%",

          // Responsive bar width based on screen size
          "& .MuiBarElement-root": {
            // Mobile: thinner bars
            width: isMobile ? 8 : isTablet ? 12 : 12, 
            rx: 8,
            ry: 8,
          },

          // Make chart area fill the space
          "& .MuiChartsAxis-directionX": {
            scale: "band",
            // Ensure all labels are visible
            data: xLabels,
          },

          // General text styling
          "& text": {
            fill: "#b4b4b4ff",
            fontWeight: 200,
          },

          // Tooltip styling
          "& .MuiChartsTooltip-root": {
            backgroundColor: "#1e293b",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            "& .MuiChartsTooltip-label, & .MuiChartsTooltip-value": {
              fill: "#fff !important",
            },
          },

          // X-axis labels - ensure all are visible
          "& .MuiChartsAxis-tickLabel": {
            fill: "#000 !important",
            fontSize: isMobile ? "10px" : "12px",
            fontWeight: 500,
          },

          // Fix for last label visibility
          "& .MuiChartsAxis-directionX .MuiChartsAxis-tickLabel": {
            opacity: 1,
            visibility: "visible",
          },

          // Specific fix for the last label
          "& .MuiChartsAxis-directionX .MuiChartsAxis-tickLabel:last-child": {
            display: "block !important",
            opacity: "1 !important",
            visibility: "visible !important",
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

      <Box sx={{ mt: 1, mb: 1 }}>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center", mb: 1 }}>
          <Box
            sx={{
              borderRadius: "30px",
              border: "2px solid #43baf1ff",
              width: 10,
              height: 10,
            }}
          ></Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography sx={{ opacity: 0.7, fontSize: "14px" }}>
              Paypal
            </Typography>
            <Typography sx={{ opacity: 0.7, fontSize: "14px" }}>52%</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Box
            sx={{
              borderRadius: "30px",
              border: "2px solid lightgrey",
              width: 10,
              height: 10,
            }}
          ></Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography sx={{ opacity: 0.7, fontSize: "14px" }}>
              Credit card
            </Typography>
            <Typography sx={{ opacity: 0.7, fontSize: "14px" }}>48%</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}