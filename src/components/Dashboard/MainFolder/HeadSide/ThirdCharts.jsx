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
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import StatHeader from "./StatHeader";

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
        mt:{xs:1,md:10},
      }}
    >
      <StatHeader
        title="Latest Deal"
        percent="86.5%"
        percentColor="lightgreen"
        subtitle="Last 7 days"
      />

      <Box>
        
        <Stack direction="row" sx={{ p: 0.5, display:"flex", justifyContent:"space-between" }}>
          <Typography sx={{ fontWeight: 600 }}>$98,500</Typography>
          <Typography sx={{ fontWeight: 600 }}>$1,22,900</Typography>
        </Stack>
        <Box>
          <LinearProgress
            variant="determinate"
            value={25}
            sx={{ borderRadius: "10px", ml:1, mr:1, }}
          />
        </Box>
        <Typography sx={{ fontWeight: 300, m: 1 }}>
          Coupons used: 18/22
        </Typography>
        <Box sx={{ mt: 10, display:"flex", flexDirection:"column"}}>
          <Typography sx={{fontWeight:510, m:1}}>
            Recent Purchasers
            <AvatarGroup total={+12}>
              <Avatar
                alt="Remy Sharp"
                src="https://spike-nextjs-pro-main.vercel.app/images/profile/user1.jpg"
              />
              <Avatar
                alt="Travis Howard"
                src="https://spike-nextjs-pro-main.vercel.app/images/profile/user2.jpg"
              />
              <Avatar
                alt="Agnes Walker"
                src="https://spike-nextjs-pro-main.vercel.app/images/profile/user3.jpg"
              />
              <Avatar
                alt="Trevor Henderson"
                src="https://spike-nextjs-pro-main.vercel.app/images/profile/user4.jpg"
              />
            </AvatarGroup>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
