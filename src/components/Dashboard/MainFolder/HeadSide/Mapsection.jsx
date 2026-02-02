import {
  Box,
  Typography,
  LinearProgress,
  Avatar,
  AvatarGroup,
  Stack,
} from "@mui/material";
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// Updated markers with different colors matching the progress bars
const markers = [
  { 
    markerOffset: -20, 
    name: "LA", 
    coordinates: [-118.2426, 34.0549], // Los Angeles coordinates
    color: "lightblue"
  },
  { 
    markerOffset: -20, 
    name: "NY", 
    coordinates: [-74.006, 40.7128], // New York coordinates
    color: "blue"
  },
  { 
    markerOffset: -20, 
    name: "AT", 
    coordinates: [-84.388, 33.749], // Atlanta coordinates
    color: "coral"
  },
  { 
    markerOffset: -20, 
    name: "CA", 
    coordinates: [-87.6298, 41.8781], // Chicago coordinates (using CA for Chicago)
    color: "orange"
  },
];

const MapChart = () => {
  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
            {geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#E0E0E0"
                stroke="#FFF"
              />
            ))}
          </>
        )}
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset, color }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={15} fill={color} stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: "3px" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

const Mapsection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: { xs: "30px", md: "20px" },
        color: "#000",
        borderRadius: "10px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "column" }, gap: 1 }}>
        {/* Left side - Map */}
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontSize: "17px", fontWeight: 500, }}>
            Visit From USA
          </Typography>
          <Typography sx={{ fontSize: "14px", opacity: 0.7, mb: 2 }}>
            Top locations
          </Typography>
          <Box sx={{ height: "300px", width: "100%", overflow: "hidden", borderRadius: "8px" }}>
            <MapChart />
          </Box>
        </Box>

        {/* Right side - Progress bars */}
        <Box sx={{ flex: 1 }}>        
          <Box sx={{ mb: 4 }}>
            {/* LA - Light Blue */}
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
            
            {/* NY - Blue */}
            <Box sx={{ width: "100%", m: 1  }}>
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
            
            {/* AT - Coral */}
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
            
            {/* CA - Orange */}
            <Box sx={{ width: "100%", m: 1, mb:1  }}>
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
    </Box>
  );
};

export default Mapsection;