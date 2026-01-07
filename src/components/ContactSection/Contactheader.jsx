import React from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Typography, Box, Container } from "@mui/material";
const Contactheader = () => {
  return (
    <>
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: 'wrap',
          mb: 5,
          gap: 2,
          
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          We'd love to hear from you
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Typography sx={{ fontSize: "14px" }}>SPIKE</Typography>
          <ArrowForwardIosIcon sx={{ fontSize: "14px" }} />
          <Typography color="primary" sx={{ fontSize: "14px", fontWeight: 600 }}>
            CONTACT PAGE
          </Typography>
        </Box>
      </Box>
      </Container>
    </>
  )
}

export default Contactheader;