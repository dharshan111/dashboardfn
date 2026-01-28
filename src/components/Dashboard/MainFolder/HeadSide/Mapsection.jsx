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
import React from "react";

const Mapsection = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          padding: {xs:"30px", md:"20px"},
          color: "#000",
          borderRadius: "10px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box sx={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
          <Box>
            <Typography sx={{ fontSize: "17px", fontWeight: 500 }}>
              Visit From USA
            </Typography>
            <Typography sx={{ fontSize: "14px", opacity: 0.7 }}>
              Top locations
            </Typography>
          </Box>
          <Box>
          </Box>
          <Box>
            <Box sx={{ width: "100%", m: 1 }}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography variant="body2">LA</Typography>
                <LinearProgress
                  variant="determinate"
                  value={35}
                  sx={{
                    flex: 1,
                    height: 5,
                    backgroundColor: 'lightgrey',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: 'lightblue'
                    }
                  }}
                />
                <Typography variant="body2">28%</Typography>
              </Stack>
            </Box>
            <Box sx={{ width: "100%", m: 1 }}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography variant="body2">NY</Typography>
                <LinearProgress
                  variant="determinate"
                  value={26}
                  sx={{
                    flex: 1,
                    height: 5,
                    backgroundColor: 'lightgrey',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: 'blue'
                    }
                  }}
                />
                <Typography variant="body2">21%</Typography>
              </Stack>
            </Box>
            <Box sx={{ width: "100%", m: 1 }}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography variant="body2">AT</Typography>
                <LinearProgress
                  variant="determinate"
                  value={18}
                  sx={{
                    flex: 1,
                    height: 5,
                    backgroundColor: 'lightgrey',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: 'coral'
                    }
                  }}
                />
                <Typography variant="body2">18%</Typography>
              </Stack>
            </Box>
            <Box sx={{ width: "100%", m: 1 }}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography variant="body2">CA</Typography>
                <LinearProgress
                  variant="determinate"
                  value={12}
                  sx={{
                    flex: 1,
                    height: 5,
                    backgroundColor: 'lightgrey',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: 'orange'
                    }
                  }}
                />
                <Typography variant="body2">12%</Typography>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Mapsection;