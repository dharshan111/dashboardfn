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
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    // Simulate login
    console.log("Login data:", formData);

    // After successful login, navigate to dashboard
    navigate("/dashboard");
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
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
        elevation={3}
        sx={{
          padding: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "20px",
          position:"relative",
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
                Welcome to Spike Admin
              </Typography>
              <Typography
                variant="h6"
                fontWeight={400}
                fontSize={13}
                sx={{ mb: 1 }}
              >
                This sign-up is made with NextAuth
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
                Sign in with Google
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
                Sign in with GitHub
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
              or sign up with
            </Divider>

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
                id="name"
                name="name"
                autoComplete="name"
                autoFocus
                value={formData.name}
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
                autoComplete="email"
                autoFocus
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
                autoComplete="current-password"
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mb: 1,
                  py: 1.5,
                  borderRadius: "25px",
                  height: "40px",
                  textTransform: "none",
                }}
              >
                Register
              </Button>

              <Box sx={{ textAlign: "center", display: "flex" }}>
                <Typography
                  variant="body2"
                  color="#000"
                  sx={{ fontSize: "14px", fontWeight: 300 }}
                >
                  Already have an Account?
                  <Link to="/register" style={{ textDecoration: "none" }}>
                    <Button
                      sx={{
                        fontSize: "13px",
                        textTransform: "none",
                      }}
                    >
                      Register
                    </Button>
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default Registerpage;
