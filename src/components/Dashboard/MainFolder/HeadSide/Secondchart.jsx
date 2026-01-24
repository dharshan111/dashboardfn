import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import StatHeader from "./StatHeader";

const data = [
  { value: 70, label: "2020" },
  { value: 18, label: "2021" },
  { value: 12, label: "2022" },
];

const size = {
  width: 150,
  height: 150,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 14,
  fontWeight: "bold",
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PaymentChart() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        padding: "10px",
        color: "#000",
        borderRadius: "15px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        mt: 2,
      }}
    >
      <StatHeader
        title="Products"
        value="432"
        percent="+26.5%"
        percentColor="lightgreen"
        subtitle="Last 7 days"
      />

      <Box sx={{ display: "flex", justifyContent: "center", mt: 1, mb: 1 }}>
        <PieChart
          series={[
            {
              data,
              innerRadius: 55,
              outerRadius: 70,
              paddingAngle: 0,
              cornerRadius: 0,
              highlightScope: { fade: "global", highlight: "item" },
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            },
          ]}
          colors={["#0886c0ff", "coral", "#43baf1ff"]}
          {...size}
          slotProps={{
            legend: { hidden: true },
          }}
          sx={{
            // General text styling
            "& text": {
              fill: "transparent", // Hide pie labels
            },

            // Tooltip styling
            "& .MuiChartsTooltip-root": {
              backgroundColor: "#1e293b",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              "& .MuiChartsTooltip-label, & .MuiChartsTooltip-value": {
                fill: "#fff !important",
              },
            },

            "& .MuiChartsLegend-root": {
              display: "none",
            },
          }}
        >
          <PieCenterLabel>Total</PieCenterLabel>
        </PieChart>
      </Box>

      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Typography
          sx={{
            opacity: 0.7,
            fontSize: "14px",
            textAlign: "center",
            margin: "16px 0px 0px",
          }}
        >
          $18k Profit more than <br /> month
        </Typography>
      </Box>
    </Box>
  );
}
