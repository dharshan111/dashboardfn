import { Box, Paper, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import StatHeader from "./StatHeader";

const pData = [29, 52, 38, 47, 57, 41, 46];
const uData =  [71, 71, 71, 71, 71, 71, 71];
const xLabels = ["M", "T", "W", "T", "F", "S", "S"];

export default function StackedBarChart() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const chartOptions = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 7,
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'last',
        dataLabels: {
          total: {
            enabled: false
          }
        },
        columnWidth: isMobile ? '40%' : '60%'
      },
    },
    xaxis: {
      categories: xLabels,
      labels: {
        style: {
          colors: "#c4bebe",
          fontSize: isMobile ? "10px" : "12px",
          
          fontWeight: 500
        }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    legend: {
      show: false
    },
    colors: ['#74B9F2', '#E3E3E3'],
    fill: {
      opacity: 1
    },
    grid: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      theme: 'light'
    }
  };

  const chartSeries = [
    {
      name: 'Last year',
      data: pData
    },
    {
      name: 'This year',
      data: uData
    }
  ];

  return (
    <Grid>
      <Box
        sx={{
          width: "100%",
          padding: "10px",
          color: "#000",
          borderRadius: "15px",
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

        <Box id="chart">
          <ReactApexChart 
            options={chartOptions} 
            series={chartSeries} 
            type="bar" 
            height={150}
            width={'100%'}
          />
        </Box>

        <Box sx={{ mt: 1,}}>
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
    </Grid>
  );
}