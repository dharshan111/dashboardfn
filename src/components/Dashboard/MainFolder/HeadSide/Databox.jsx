import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TablePagination from "@mui/material/TablePagination";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Checkbox from "@mui/material/Checkbox";

// Sample data with your requirements
const products = [
  {
    id: 1,
    name: "iPhone 13 pro max-Pacific Blue-128GB storage",
    avatar:
      "https://spike-nextjs-pro-main.vercel.app/images/products/product-5.png",
    avatarimg:
      "https://spike-nextjs-pro-main.vercel.app/images/profile/user1.jpg",
    customerName: "John Smith",
    email: "john.smith@email.com",
    rating: 4.5,
    review: "Excellent product, very satisfied",
    status: "confirmed",
    date: "Jan 3",
  },
  {
    id: 2,
    name: "Apple MacBook Pro 13 inch-M1-8/256GB-space",
    avatar:
      "https://spike-nextjs-pro-main.vercel.app/images/products/product-6.png",
    avatarimg:
      "https://spike-nextjs-pro-main.vercel.app/images/profile/user2.jpg",
    customerName: "Emma Johnson",
    email: "emma.j@email.com",
    rating: 4.0,
    review: "Good performance, but battery could be better",
    status: "pending",
    date: "Jan 1",
  },
  {
    id: 3,
    name: "PlayStation 5 DualSense Wireless Controller",
    avatar:
      "https://spike-nextjs-pro-main.vercel.app/images/products/product-7.png",
    avatarimg:
      "https://spike-nextjs-pro-main.vercel.app/images/profile/user3.jpg",
    customerName: "Michael Brown",
    email: "michael.b@email.com",
    rating: 5.0,
    review: "Perfect controller, highly recommended",
    status: "confirmed",
    date: "jan 7",
  },
  {
    id: 4,
    name: "Amazon Basics Mesh, Mid-Back, Swivel Office De...",
    avatar:
      "https://spike-nextjs-pro-main.vercel.app/images/products/product-8.png",
    avatarimg:
      "https://spike-nextjs-pro-main.vercel.app/images/profile/user4.jpg",
    customerName: "Sarah Wilson",
    email: "sarah.w@email.com",
    rating: 3.5,
    review: "Comfortable but assembly was difficult",
    status: "pending",
    date: "Jan 10",
  },
  {
    id: 5,
    name: "Sony X85J 75 Inch Sony 4K Ultra HD LED Smart G...",
    avatar:
      "https://spike-nextjs-pro-main.vercel.app/images/products/product-9.png",
    avatarimg:
      "https://spike-nextjs-pro-main.vercel.app/images/profile/user5.jpg",
    customerName: "David Lee",
    email: "david.lee@email.com",
    rating: 4.8,
    review: "Amazing picture quality, worth every penny",
    status: "confirmed",
    date: "Jan 16",
  },
];

// Generate 25 rows by repeating the 5 products
const rows = [];
for (let i = 0; i < 25; i++) {
  const product = products[i % 5];
  rows.push({
    ...product,
    id: i + 1,
    name: product.name + (i >= 5 ? ` #${Math.floor(i / 5) + 1}` : ""),
  });
}

// Status chip component
const StatusChip = ({ status }) => {
  if (status === "confirmed") {
    return (
      <Chip
        label="Confirmed"
        size="small"
        sx={{
          backgroundColor: "#e8f5e9",
          color: "#2e7d32",
          fontWeight: 500,
          border: "1px solid #a5d6a7",
        }}
      />
    );
  }
  return (
    <Chip
      label="Pending"
      size="small"
      sx={{
        backgroundColor: "#ffebee",
        color: "#c62828",
        fontWeight: 500,
        border: "1px solid #ef9a9a",
      }}
    />
  );
};

export default function EnhancedTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchMode, setSearchMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRowClick = (rowId) => {
    setSelectedRows((prev) => {
      if (prev.includes(rowId)) {
        return prev.filter((id) => id !== rowId);
      } else {
        return [...prev, rowId];
      }
    });
  };

  const clearSelection = () => {
    setSelectedRows([]);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = displayedRows.map((row) => row.id);
      setSelectedRows(newSelected);
    } else {
      setSelectedRows([]);
    }
  };

  const handleCheckboxClick = (event, rowId) => {
    event.stopPropagation();
    handleRowClick(rowId);
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // Sort rows based on sortConfig
  const sortedRows = [...rows].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue < bValue) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  // Filter rows based on search query
  const filteredRows = sortedRows.filter((row) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      row.name.toLowerCase().includes(query) ||
      row.customerName.toLowerCase().includes(query) ||
      row.email.toLowerCase().includes(query) ||
      row.review.toLowerCase().includes(query) ||
      row.status.toLowerCase().includes(query) ||
      row.date.toLowerCase().includes(query)
    );
  });

  // Calculate the rows to display for current page
  const displayedRows = filteredRows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const isAllSelected =
    displayedRows.length > 0 && selectedRows.length === displayedRows.length;
  const isSomeSelected =
    selectedRows.length > 0 && selectedRows.length < displayedRows.length;

  const SortableHeader = ({ label, sortKey }) => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        cursor: "pointer",
        "&:hover": { opacity: 0.8 },
      }}
      onClick={() => handleSort(sortKey)}
    >
      <Typography variant="body2" fontWeight="bold">
        {label}
      </Typography>
      {sortConfig.key === sortKey &&
        (sortConfig.direction === "asc" ? (
          <ArrowUpwardIcon fontSize="small" />
        ) : (
          <ArrowDownwardIcon fontSize="small" />
        ))}
    </Box>
  );

  return (
    <Paper
      sx={{
        width: "100%", // Changed to 100%
        maxWidth: "985px", // Added maxWidth constraint
        padding: "16px", // Slightly increased padding
        color: "#000",
        borderRadius: "20px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        overflow: "hidden", // Prevent content from overflowing
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Box>
          <Typography variant="h6" fontWeight="bold">
            Latest reviews
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            Review & received across all channels
          </Typography>
        </Box>

        {selectedRows.length > 0 ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              backgroundColor: "#e3f2fd",
              padding: "6px 12px",
              borderRadius: "15px",
              border: "1px solid #bbdefb",
            }}
          >
            <Typography sx={{ color: "#1976d2", fontWeight: 500 }}>
              Selected {selectedRows.length}
            </Typography>
            <IconButton
              size="small"
              onClick={clearSelection}
              sx={{
                padding: "2px",
                color: "#d32f2f",
                "&:hover": { backgroundColor: "#ffebee" },
              }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        ) : (
          <TextField
            placeholder="Search..."
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{
              width: 250,
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
      </Box>

      {/* Table with horizontal scroll only */}
      <TableContainer sx={{ 
        maxHeight: 600, 
        overflowY: "hidden", // Changed to auto for vertical scrolling if needed
        overflowX: "auto", // Enable horizontal scrolling
      }}>
        <Table sx={{ minWidth: 1000 }}> {/* Reduced from 1200 to 1000 */}
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox" sx={{ width: "5%" }}>
                <Checkbox
                  indeterminate={isSomeSelected}
                  checked={isAllSelected}
                  onChange={handleSelectAllClick}
                  color="primary"
                />
              </TableCell>
              <TableCell sx={{ width: "25%", minWidth: "250px" }}> {/* Increased width */}
                <SortableHeader label="Products" sortKey="name" />
              </TableCell>
              <TableCell sx={{ width: "20%", minWidth: "200px" }}>
                <SortableHeader label="Customers" sortKey="customerName" />
              </TableCell>
              <TableCell sx={{ width: "30%", minWidth: "300px" }}>
                <SortableHeader label="Review" sortKey="rating" />
              </TableCell>
              <TableCell sx={{ width: "10%", textAlign: "center", minWidth: "100px" }}>
                <SortableHeader label="Status" sortKey="status" />
              </TableCell>
              <TableCell sx={{ width: "7%", textAlign: "center", minWidth: "80px" }}>
                <SortableHeader label="Date" sortKey="date" />
              </TableCell>
              <TableCell sx={{ width: "3%", textAlign: "center", minWidth: "50px" }}>
                <Typography variant="body2" fontWeight="bold">
                  Action
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedRows.map((row) => (
              <TableRow
                key={row.id}
                hover
                onClick={() => handleRowClick(row.id)}
                selected={selectedRows.includes(row.id)}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:hover": { backgroundColor: "action.hover" },
                  cursor: "pointer",
                  "&.Mui-selected": {
                    backgroundColor: "action.selected",
                  },
                  "&.Mui-selected:hover": {
                    backgroundColor: "action.selected",
                  },
                }}
              >
                {/* Checkbox Column */}
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedRows.includes(row.id)}
                    onClick={(event) => handleCheckboxClick(event, row.id)}
                    color="primary"
                  />
                </TableCell>

                {/* Products Column */}
                <TableCell sx={{ width: "25%" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar
                      src={row.avatar}
                      sx={{ width: 40, height: 40 }}
                      alt={row.name}
                    />
                    <Typography 
                      variant="body2" 
                      fontWeight="medium"
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        maxWidth: "200px"
                      }}
                    >
                      {row.name}
                    </Typography>
                  </Box>
                </TableCell>

                {/* Customers Column */}
                <TableCell sx={{ width: "20%" }}>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Avatar
                      src={row.avatarimg}
                      sx={{ width: 40, height: 40 }}
                    />
                    <Box sx={{ 
                      display: "flex", 
                      flexDirection: "column",
                      overflow: "hidden"
                    }}>
                      <Typography 
                        variant="body2" 
                        fontWeight="medium"
                        sx={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          maxWidth: "150px"
                        }}
                      >
                        {row.customerName}
                      </Typography>
                      <Typography 
                        variant="caption" 
                        color="text.secondary"
                        sx={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          maxWidth: "150px"
                        }}
                      >
                        {row.email}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>

                {/* Review Column */}
                <TableCell sx={{ width: "30%" }}>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 0.5,
                      }}
                    >
                      <Rating
                        value={row.rating}
                        precision={0.5}
                        size="medium"
                        readOnly
                      />
                    </Box>
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        fontSize: "15px",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        lineHeight: "1.4",
                        maxHeight: "2.8em"
                      }}
                    >
                      {row.review}
                    </Typography>
                  </Box>
                </TableCell>

                {/* Status Column */}
                <TableCell align="center" sx={{ width: "10%" }}>
                  <StatusChip status={row.status} />
                </TableCell>

                {/* Date Column */}
                <TableCell align="center" sx={{ width: "7%" }}>
                  <Typography variant="body2" color="text.secondary">
                    {row.date}
                  </Typography>
                </TableCell>

                {/* Action Column */}
                <TableCell align="center" sx={{ width: "3%" }}>
                  <Button
                    sx={{
                      minWidth: "auto",
                      padding: "4px",
                      color: "grey",
                      "&:hover": {
                        backgroundColor: "action.hover",
                      },
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MoreVertIcon fontSize="small" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{
          borderTop: "1px solid #e0e0e0",
          "& .MuiTablePagination-toolbar": {
            padding: "0 16px",
          },
        }}
      />
    </Paper>
  );
}