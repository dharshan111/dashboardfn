import { Box, Typography } from "@mui/material";

export default function StatHeader({
  title,
  value,
  percent,
  percentColor,
  subtitle,
}) {
  return (
    <Box p={2} sx={{ marginBottom:"24px",}}>
      <Box sx={{ display: "flex", justifyContent:"space-between", alignItems:"center" }}>
        <Box>
          <Typography fontSize={18} fontWeight={500}>
            {title}
          </Typography>

          <Typography fontSize={12} color="#94a3b8">
            {subtitle}
          </Typography>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
          <Typography fontSize={18} fontWeight={600}>
            {value}
          </Typography>

          <Box
            sx={{
              px: 1,
              py: 0.3,
              fontSize: 12,
              border: "1px solid lightgrey",
              borderRadius: 10,
              bgcolor: `${percentColor}22`,
              color: percentColor,
            }}
          >
            {percent}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
