import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Avatar,
  Box,
  Alert,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import {
  Visibility,
  VisibilityOff,
  Login as LoginIcon,
  PersonAdd,
} from "@mui/icons-material";

function Registerpage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous messages
    setError("");
    setSuccess("");

    // Basic validation
    if (!formData.username || !formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Password validation (at least 6 characters)
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    // Store user data in localStorage
    try {
      const userData = {
        username: formData.username,
        email: formData.email,
        password: formData.password, // Note: In real applications, never store plain passwords!
        registeredAt: new Date().toISOString()
      };

      // Save to localStorage
      localStorage.setItem("user", JSON.stringify(userData));
      
      // For demo purposes, also store in a users array
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      existingUsers.push(userData);
      localStorage.setItem("users", JSON.stringify(existingUsers));

      setSuccess("Registration successful! Redirecting to dashboard...");
      
      // Simulate API call delay
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);

      console.log("User registered:", userData);
    } catch (err) {
      setError("Failed to save registration. Please try again.");
      console.error("Registration error:", err);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Function to clear form
  const clearForm = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <Container
      component="main"
      sx={{
        display: "flex",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={2}
        sx={{
          padding: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "20px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: { xs: "-50px", sm: "-70px", md: "-92px" },
            right: { xs: "-40px", sm: "-60px", md: "-77px" },
            zIndex: -1,
          }}
        >
          <img
            src="https://spike-nextjs-pro-nextauth.vercel.app/images/backgrounds/shap-login.png"
            alt="Decorative shape"
            style={{
              width: { xs: "200px", sm: "250px", md: "304px" },
              height: { xs: "210px", sm: "270px", md: "315px" },
            }}
          />
        </Box>

        <Box
          sx={{
            padding: { xs: "20px", md: "5px" },
          }}
        >
          {/* Bottom left box */}
          <Box
            sx={{
              position: "absolute",
              bottom: { xs: "-80px", sm: "-100px", md: "-131px" },
              left: { xs: "-60px", sm: "-80px", md: "-100px" },
              width: { xs: "200px", sm: "250px", md: "304px" },
              height: { xs: "200px", sm: "250px", md: "315px" },
              backgroundColor: "#F4957F",
              borderRadius: "50%",
              zIndex: -1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "primary.main",
                fontWeight: "bold",
                opacity: 0.7,
              }}
            >
              Spike
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-start" },
              gap: 4,
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="https://spike-nextjs-pro-nextauth.vercel.app/images/backgrounds/login3-bg.png"
                alt="Login background"
                style={{
                  width: "75%",
                  objectFit: "contain",
                  objectPosition: "center",
                  display: { xs: "none", md: "flex" },
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h6" sx={{ fontSize: "28px" }}>
                  Create Your Account
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight={400}
                  fontSize={13}
                  sx={{ mb: 1 }}
                >
                  Join Spike Admin today
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  width: "101%",
                  gap: 1,
                  flexDirection: { xs: "column", md: "column", lg: "row" },
                }}
              >
                <Button
                  sx={{
                    textTransform: "none",
                    border: "1px solid lightgrey",
                    borderRadius: "20px",
                    width: "100%",
                    height: "45px",
                    color: "#000",
                    fontWeight: 400,
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://spike-nextjs-pro-nextauth.vercel.app/images/svgs/google-icon.svg"
                    sx={{
                      "& .MuiAvatar-img": {
                        width: "20px",
                        height: "20px",
                      },
                    }}
                  />
                  Sign up with Google
                </Button>

                <Button
                  sx={{
                    textTransform: "none",
                    border: "1px solid lightgrey",
                    borderRadius: "20px",
                    width: "100%",
                    height: "45px",
                    color: "#000",
                    fontWeight: 400,
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://spike-nextjs-pro-nextauth.vercel.app/images/svgs/git-icon.svg"
                    sx={{
                      "& .MuiAvatar-img": {
                        width: "20px",
                        height: "20px",
                      },
                    }}
                  />
                  Sign up with GitHub
                </Button>
              </Box>

              <Divider
                sx={{
                  width: "100%",
                  my: 2,
                  fontSize: "14px",
                  color: "#000",
                }}
              >
                or register with email
              </Divider>

              {/* Success Message */}
              {success && (
                <Alert severity="success" sx={{ width: "100%", mt: 2 }}>
                  {success}
                </Alert>
              )}

              {/* Error Message */}
              {error && (
                <Alert severity="error" sx={{ width: "100%", mt: 2 }}>
                  {error}
                </Alert>
              )}

              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  mt: 3,
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "26px",
                    opacity: 0.7,
                    height: "40px",
                  },
                }}
              >
                <Typography fontWeight={600} fontSize={14}>
                  Username
                </Typography>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  value={formData.username}
                  onChange={handleChange}
                />

                <Typography fontWeight={600} fontSize={14}>
                  Email Address
                </Typography>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <Typography fontWeight={600} fontSize={14}>
                  Password
                </Typography>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                  sx={{
                    borderRadius: "20px",
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      py: 1.5,
                      borderRadius: "25px",
                      height: "40px",
                      textTransform: "none",
                    }}
                  >
                    Register
                  </Button>
                  <Button
                    type="button"
                    fullWidth
                    variant="outlined"
                    onClick={clearForm}
                    sx={{
                      py: 1.5,
                      borderRadius: "25px",
                      height: "40px",
                      textTransform: "none",
                    }}
                  >
                    Clear
                  </Button>
                </Box>

                <Box sx={{ textAlign: "center", display: "flex", mt: 2 }}>
                  <Typography
                    variant="body2"
                    color="#000"
                    sx={{ fontSize: "14px", fontWeight: 300 }}
                  >
                    Already have an Account?
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      <Button
                        sx={{
                          fontSize: "13px",
                          textTransform: "none",
                        }}
                      >
                        Sign In
                      </Button>
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default Registerpage;