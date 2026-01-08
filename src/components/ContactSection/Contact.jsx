import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Typography, Box, Card, Stack, Divider, Container } from "@mui/material";
import Form from './Form'

const Contact = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Content Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: "center",
          alignItems: { xs: 'center', md: 'flex-start' },
          gap: 4,
        }}
      >
        {/* Left Card */}
        <Card
          variant="outlined"
          sx={{
            width: { xs: '100%', md: '400px' },
            borderRadius: 3,
            backgroundColor: "#0085DB",
            color: "#fff",
            flexShrink: 0,
          }}
        >
          <Box sx={{ p: 4 }}>
            <Stack
              direction="row"
              sx={{ justifyContent: "space-between", alignItems: "center", mb: 1 }}
            >
              <Typography variant="h5" fontWeight={600}>
                Reach Out Today
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.8)" }}>
              Have questions or need assistance? We're just a message away.
            </Typography>
          </Box>
          
          <Divider
            sx={{
              borderColor: 'rgba(255, 255, 255, 0.3)',
              mx: 3,
              opacity: 0.3,
            }}
          />
          
          <Box sx={{ p: 4 }}>
            <Stack
              direction="row"
              sx={{ justifyContent: "space-between", alignItems: "center", mb: 1 }}
            >
              <Typography variant="h5" fontWeight={600}>
                Our Location
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.8)" }}>
              Visit us in person or find our contact details to connect with us directly.
            </Typography>
          </Box>
        </Card>

        {/* Right Form */}
        <Box>
            <Form />
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;