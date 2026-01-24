import {
  Box,
  Typography,
  // useMediaQuery,
  LinearProgress,
  Avatar,
  AvatarGroup,
  // useTheme,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import StatHeader from "./StatHeader";
import { LineChart } from "@mui/x-charts/LineChart";

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 14,
  fontWeight: "bold",
}));

export default function PaymentChart() {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        padding: "10px",
        color: "#000",
        borderRadius: "10px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        mt:2,
        
      }}
    >
      <StatHeader
        title="Customers"
        value="6,380"
        percent="86.5%"
        percentColor="lightgreen"
        subtitle="Last 7 days"
      />

      <Box sx={{ mt: 1, mb: "32px" }}>
        <LineChart
          sx={{
            // Hide all unnecessary elements
            "& .MuiMarkElement-root": {
              display: "none",
            },
            "& .MuiChartsAxis-root": {
              display: "none",
            },
            "& .MuiChartsAxis-line": {
              display: "none",
            },
            "& .MuiChartsAxis-tick": {
              display: "none",
            },
            "& .MuiChartsAxis-tickLabel": {
              display: "none",
            },
            "& .MuiChartsGrid-root": {
              display: "none",
            },
            "& .MuiChartsAxis-label": {
              display: "none",
            },
            // Tight container around the line
            "& .MuiLineElement-root": {
              strokeWidth: 2,
            },
            // Remove all padding/margin from the chart container
            padding: 0,
            margin: 0,
            overflow: "visible",
          }}
          xAxis={[
            {
              data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              scaleType: "point",
              // Hide axis completely
              disableLine: true,
              disableTicks: true,
              tickLabelStyle: { display: "none" },
            },
          ]}
          yAxis={[
            {
              scaleType: "linear",
              min: 0,
              max: 40,
              // Hide axis completely
              disableLine: true,
              disableTicks: true,
              tickLabelStyle: { display: "none" },
            },
          ]}
          series={[
            {
              data: [15, 33, 13, 21, 12, 21], // Added 7th value to match x-axis
              showMark: false, // Disable marks completely
              color: "#1976d2",
              curve: "monotoneX",
            },
          ]}
          height={150} // Smaller height since we only show the line
          grid={{
            vertical: false,
            horizontal: false,
          }}
          margin={{ top: 0, bottom: 0, left: 0, right: 0 }} // Zero margin
        />
      </Box>

      <Box sx={{display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems: "center"}}>
        <Box sx={{ display: "flex", justifyContent:"space-between", alignItems: "center" }}>
          <Box sx={{ display: "flex", gap: 5 }}>
            <Typography sx={{ opacity: 0.7, fontSize:"14px", }}>April 07 - April 14</Typography>
            <Typography sx={{ opacity: 0.7, fontSize:"14px" }} >6,380</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent:"space-between", alignItems: "center", mt:1,  }}>
          <Box sx={{ display: "flex", gap: 10.3 }}>
            <Typography sx={{ opacity: 0.7, fontSize:"14px",}}>Last Week</Typography>
            <Typography sx={{ opacity: 0.7,fontSize:"14px" }}>4,298</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
