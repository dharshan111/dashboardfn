import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";

import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// Sample data with your requirements
const rows = [
  {
    id: 1,
    name: "iPhone 13 pro max-Pacific Blue-128GB storage",
    avatar: (
      <Avatar src="https://spike-nextjs-pro-main.vercel.app/images/products/product-5.png" />
    ),
    amount: "$400",
    amounttwo: "499",
    progress: 75,
    status: "confirmed",
    date: (
      <Button sx={{ backgroundColor: "transparent", color: "grey" }}>
        <MoreVertIcon />
      </Button>
    ),
  },
  {
    id: 2,
    name: "Apple MacBook Pro 13 inch-M1-8/256GB-space",
    avatar: (
      <Avatar src="https://spike-nextjs-pro-main.vercel.app/images/products/product-6.png" />
    ),
    amount: "$220",
    amounttwo: "499",
    progress: 40,
    status: "paid",
    date: (
      <Button sx={{ backgroundColor: "transparent", color: "grey" }}>
        <MoreVertIcon />
      </Button>
    ),
  },
  {
    id: 3,
    name: "PlayStation 5 DualSense Wireless Controller",
    avatar: (
      <Avatar src="https://spike-nextjs-pro-main.vercel.app/images/products/product-7.png" />
    ),
    amount: "$155",
    amounttwo: "499",
    progress: 20,
    status: "waiting",
    date: (
      <Button sx={{ backgroundColor: "transparent", color: "grey" }}>
        <MoreVertIcon />
      </Button>
    ),
  },
  {
    id: 4,
    name: "Amazon Basics Mesh, Mid-Back, Swivel Office De...",
    avatar: (
      <Avatar src="https://spike-nextjs-pro-main.vercel.app/images/products/product-8.png" />
    ),
    amount: "$190",
    amounttwo: "499",
    progress: 50,
    status: "paid",
    date: (
      <Button sx={{ backgroundColor: "transparent", color: "grey" }}>
        <MoreVertIcon />
      </Button>
    ),
  },
  {
    id: 5,
    name: "Sony X85J 75 Inch Sony 4K Ultra HD LED Smart G...",
    avatar: (
      <Avatar src="https://spike-nextjs-pro-main.vercel.app/images/products/product-9.png" />
    ),
    amount: "$136",
    amounttwo: "499",
    progress: 60,
    status: "confirmed",
    date: (
      <Button sx={{ backgroundColor: "transparent", color: "grey" }}>
        <MoreVertIcon />
      </Button>
    ),
  },
];

// Status chip component
const StatusChip = ({ status }) => {
  switch (status) {
    case "confirmed":
      return (
        <Chip
          label="Confirmed"
          color="primary"
          variant="outlined"
          size="small"
        />
      );
    case "paid":
      return (
        <Chip label="Pending" color="warning" variant="outlined" size="small" />
      );
    case "waiting":
      return (
        <Chip label="Cancelled" color="error" variant="outlined" size="small" />
      );
    case "cancelled":
      return (
        <Chip
          label="Confirmed"
          color="primary"
          variant="outlined"
          size="small"
        />
      );
    default:
      return <Chip label={status} size="small" />;
  }
};

// Helper function to get progress color based on status
const getProgressColor = (status) => {
  switch (status) {
    case "confirmed":
      return "primary";
    case "paid":
      return "warning";
    case "cancelled":
      return "error";
    case "waiting":
      return "error";
    default:
      return "primary";
  }
};

// Helper function to get payment text based on status
const getPaymentText = (status, progress) => {
  switch (status) {
    case "confirmed":
      return "Full Paid";
    case "paid":
      return "Partially Paid";
    case "cancelled":
      return "Cancelled";
    case "waiting":
      return "Cancelled";
    default:
      return progress === 100 ? "✓ Full Paid" : "Partial";
  }
};

export default function EnhancedTable() {
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          width: "100%",
          maxWidth: "900px", // Added max width constraint
          padding: "10px",
          color: "#000",
          borderRadius: "20px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          overflow: "hidden", // Prevents content overflow
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="enhanced table"> {/* Reduced minWidth */}
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", width: "40%" }}> {/* Added width */}
                Products
              </TableCell>
              <TableCell 
                align="left" 
                sx={{ fontWeight: "bold", width: "35%" }} // Added width
              >
                Payment
              </TableCell>
              <TableCell 
                align="center" 
                sx={{ fontWeight: "bold", width: "15%" }} // Added width
              >
                Status
              </TableCell>
              <TableCell 
                align="right" 
                sx={{ fontWeight: "bold", width: "10%" }} // Added width
              >
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                hover
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:hover": { backgroundColor: "action.hover" },
                }}
              >
                {/* First Cell: Avatar and Typography */}
                <TableCell 
                  component="th" 
                  scope="row"
                  sx={{ width: "40%" }} // Match header width
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    {row.avatar}
                    <Box sx={{ 
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "300px" // Prevent text from overflowing
                    }}>
                      <Typography 
                        variant="subtitle1" 
                        fontWeight="medium" 
                        fontSize="14px"
                        sx={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {row.name}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>

                {/* Second Cell: Amount and Linear Progress */}
                <TableCell align="left" sx={{ width: "35%" }}> {/* Match header width */}
                  <Box sx={{ width: "100%" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "column",
                        mb: 1,
                      }}
                    >
                      <Typography
                        variant="body2"
                        fontWeight="medium"
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        {row.amount}/
                        <Typography
                          sx={{ fontWeight: 350, fontSize: "14px" }}
                        >
                          {row.amounttwo}
                        </Typography>
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          fontSize: "13px",
                          fontWeight: 400,
                          color: "grey",
                          width: "100px",
                        }}
                      >
                        {getPaymentText(row.status, row.progress)}
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={row.progress}
                      color={getProgressColor(row.status)}
                      sx={{
                        height: 3,
                        borderRadius: 4,
                        mb: 1,
                        backgroundColor: "grey.200",
                        "& .MuiLinearProgress-bar": {
                          borderRadius: 4,
                        },
                      }}
                    />
                  </Box>
                </TableCell>

                {/* Third Cell: Status */}
                <TableCell align="center" sx={{ width: "15%" }}> {/* Match header width */}
                  <StatusChip status={row.status} />
                </TableCell>

                {/* Fourth Cell: Date */}
                <TableCell align="right" sx={{ width: "10%" }}> {/* Match header width */}
                  <Typography variant="body2" color="text.secondary">
                    {row.date}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}