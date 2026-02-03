import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, LinearProgress, Stack } from "@mui/material";
import { geoAlbersUsa, geoPath } from "d3-geo";
import { feature } from "topojson-client";

const US_TOPO_URL =
  "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const markers = [
  { name: "LA", coords: [-118.2426, 34.0549], color: "lightblue" },
  { name: "NY", coords: [-74.006, 40.7128], color: "blue" },
  { name: "AT", coords: [-84.388, 33.749], color: "coral" },
  { name: "CA", coords: [-87.6298, 41.8781], color: "orange" },
];

const MapChart = () => {
  const [states, setStates] = useState(null);

  useEffect(() => {
    fetch(US_TOPO_URL)
      .then((res) => res.json())
      .then((topology) => {
        const geo = feature(topology, topology.objects.states);
        setStates(geo.features);
      });
  }, []);

  if (!states) return null;

  const projection = geoAlbersUsa()
    .scale(1000)
    .translate([400, 250]);

  const path = geoPath(projection);

  return (
    <svg viewBox="0 0 800 500" width="100%" height="300">
      {states.map((d, i) => (
        <path
          key={i}
          d={path(d)}
          fill="#E0E0E0"
          stroke="#FFF"
        />
      ))}

      {markers.map((m, i) => {
        const [x, y] = projection(m.coords) || [];
        if (!x || !y) return null;

        return (
          <g key={i}>
            <circle
              cx={x}
              cy={y}
              r={15}
              fill={m.color}
              stroke="#fff"
              strokeWidth={2}
            />
         
          </g>
        );
      })}
    </svg>
  );
};

const ProgressItem = ({ label, value, color }) => (
  <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
    <Typography variant="body2">{label}</Typography>
    <LinearProgress
      variant="determinate"
      value={value}
      sx={{
        flex: 1,
        height: 5,
        backgroundColor: "#eee",
        "& .MuiLinearProgress-bar": { backgroundColor: color },
      }}
    />
    <Typography variant="body2">{value}%</Typography>
  </Stack>
);

const Mapsection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        p: 3,
        borderRadius: "20px",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      <Typography fontSize={17} fontWeight={500}>
        Visit From USA
      </Typography>
      <Typography fontSize={14} opacity={0.7} mb={2}>
        Top locations
      </Typography>

      <MapChart />

      <Box mt={3}>
        <ProgressItem label="LA" value={28} color="lightblue" />
        <ProgressItem label="NY" value={21} color="blue" />
        <ProgressItem label="AT" value={18} color="coral" />
        <ProgressItem label="CA" value={12} color="orange" />
      </Box>
    </Box>
  );
};

export default Mapsection;
