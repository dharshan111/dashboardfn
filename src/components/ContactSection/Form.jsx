import React from "react";
import {
  Box,
  OutlinedInput,
  FormControl,
  MenuItem,
  Select,
  Button,
  Typography,
  Grid,
} from "@mui/material";

const StaticContactForm = () => {
  return (
    <Box component="form">
      <Grid
        container
        spacing={2}
        rowSpacing={2} 
        
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
         
          "& .MuiFormControl-root": {
            width: "100%",
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: "16px",
            opacity:0.7,
          },
        }}

      >
        {/* First Name */}
        <Grid item xs={12} sm={6} size={6}>
          <Typography fontWeight={600} fontSize={14} >
            First Name*
          </Typography>
          <FormControl  size="small">
            <OutlinedInput defaultValue="" placeholder="Name" />
          </FormControl>
        </Grid>

        {/* Last Name */}
        <Grid item xs={12} sm={6} size={6}>
          <Typography fontWeight={600} fontSize={14} >
            Last Name*
          </Typography>
          <FormControl size="small">
            <OutlinedInput
              defaultValue=""
              placeholder="Last Name"
            />
          </FormControl>
        </Grid>
       
        {/* Phone Number */}
        <Grid item xs={12} sm={6} size={6}>
          <Typography fontWeight={600} fontSize={14}>
            Phone Number*
          </Typography>
          <FormControl size="small">
            <OutlinedInput
              defaultValue=""
              placeholder="xxx xxx xxxx"
            />
          </FormControl>
        </Grid>

        {/* Email */}
        <Grid item xs={12} sm={6} size={6}>
          <Typography fontWeight={600} fontSize={14}>
            Email Address*
          </Typography>
          <FormControl size="small">
            <OutlinedInput
              type="email"
              defaultValue=""
              placeholder="Email Address"
            />
          </FormControl>
        </Grid>

        <Grid size={12}>
          {/* Enquiry Type Dropdown */}
          <Grid item xs={12} >
            <Typography fontWeight={600} fontSize={14}>
              Enquiry Related To*
            </Typography>
            <FormControl size="small">
              <Select
                label="Enquiry Related To"
                defaultValue=""
                input={<OutlinedInput placeholder="Enquiry Related To" />}
              >
                <MenuItem value="general">General Enquiry</MenuItem>
                <MenuItem value="general2">General Enquiry 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Message Textarea */}
          <Grid item xs={12} mt={2}>
            <Typography fontWeight={600} fontSize={14}>
              Message*
            </Typography>
            <FormControl>
              <OutlinedInput
                multiline
                rows={6}
                defaultValue=""
                placeholder="Write your Message here..."
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 2 }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 3,
                  py: 1,
                  borderRadius: "20px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  textTransform:"none",
                  backgroundColor: "#0085DB",
                  "&:hover": {
                    backgroundColor: "#0069b3",
                  },
                }}
              >
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Submit Button */}
      </Grid>
    </Box>
  );
};

export default StaticContactForm;
