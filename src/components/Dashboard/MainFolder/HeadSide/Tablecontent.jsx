import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


// Sample data with your requirements
const rows = [
  {
    id: 1,
    name: 'iPhone 13 pro max-Pacific Blue-128GB storage',
    avatar: <Avatar src="https://spike-nextjs-pro-main.vercel.app/images/products/product-5.png"/>,
    amount: '$5,240',
    progress: 75,
    status: 'confirmed',
    date: 'Jan 15, 2024'
  },
  {
    id: 2,
    name: 'Apple MacBook Pro 13 inch-M1-8/256GB-space',
    avatar: <Avatar src="https://spike-nextjs-pro-main.vercel.app/images/products/product-6.png" />,
    amount: '$12,500',
    progress: 100,
    status: 'paid',
    date: 'Jan 14, 2024'
  },
  {
    id: 3,
    name: 'PlayStation 5 DualSense Wireless Controller',
    avatar: <Avatar src="https://spike-nextjs-pro-main.vercel.app/images/products/product-7.png" />,
    amount: '$8,750',
    progress: 30,
    status: 'waiting',
    date: 'Jan 13, 2024'
  },
  {
    id: 4,
    name: 'Amazon Basics Mesh, Mid-Back, Swivel Office De...',
    avatar: <Avatar src="	https://spike-nextjs-pro-main.vercel.app/images/products/product-8.png"/>,
    amount: '$3,200',
    progress: 50,
    status: 'confirmed',
    date: 'Jan 12, 2024'
  },
  {
    id: 5,
    name: 'Sony X85J 75 Inch Sony 4K Ultra HD LED Smart G...',
    avatar: <Avatar src="https://spike-nextjs-pro-main.vercel.app/images/products/product-9.png"/>,
    amount: '$15,000',
    progress: 0,
    status: 'cancelled',
    date: 'Jan 11, 2024'
  },
];

// Status chip component
const StatusChip = ({ status }) => {
  switch (status) {
    case 'confirmed':
      return (
        <Chip 
          icon={<CheckCircleIcon />} 
          label="Confirmed" 
          color="success" 
          variant="outlined" 
          size="small"
        />
      );
    case 'paid':
      return (
        <Chip 
          icon={<CheckCircleIcon />} 
          label="Paid" 
          color="success" 
          variant="filled" 
          size="small"
        />
      );
    case 'waiting':
      return (
        <Chip 
          icon={<AccessTimeIcon />} 
          label="Waiting" 
          color="warning" 
          variant="outlined" 
          size="small"
        />
      );
    case 'cancelled':
      return (
        <Chip 
          icon={<CancelIcon />} 
          label="Cancelled" 
          color="error" 
          variant="outlined" 
          size="small"
        />
      );
    default:
      return <Chip label={status} size="small" />;
  }
};

export default function EnhancedTable() {
  return (
    <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 2 }}>
      <Table sx={{ minWidth: 800 }} aria-label="enhanced table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold', }}>Products</TableCell>
            <TableCell align="left" sx={{ fontWeight: 'bold', }}>Payment</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold',  }}>Status</TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold',  }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              hover
              sx={{ 
                '&:last-child td, &:last-child th': { border: 0 },
                '&:hover': { backgroundColor: 'action.hover' }
              }}
            >
              {/* First Cell: Avatar and Typography */}
              <TableCell component="th" scope="row">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  {row.avatar}
                  <Box>
                    <Typography variant="subtitle1" fontWeight="medium">
                      {row.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {row.email}
                    </Typography>
                    <Typography variant="caption" color="primary">
                      {row.product}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>

              {/* Second Cell: Amount and Linear Progress */}
              <TableCell align="left">
                <Box sx={{ width: '80%' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" fontWeight="medium">
                      {row.amount}
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={row.progress} 
                    sx={{ 
                      height: 8, 
                      borderRadius: 4,
                      mb: 1,
                      backgroundColor: 'grey.200',
                      '& .MuiLinearProgress-bar': {
                        borderRadius: 4,
                        backgroundColor: row.progress === 100 ? 'success.main' : 'primary.main'
                      }
                    }} 
                  />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="caption" color="text.secondary">
                      {row.progress}% Paid
                    </Typography>
                    <Typography 
                      variant="caption" 
                      color={row.progress === 100 ? 'success.main' : 'text.secondary'}
                      fontWeight={row.progress === 100 ? 'bold' : 'normal'}
                    >
                      {row.progress === 100 ? '✓ Full Paid' : 'Partial'}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>

              {/* Third Cell: Status */}
              <TableCell align="center">
                <StatusChip status={row.status} />
              </TableCell>

              {/* Fourth Cell: Date */}
              <TableCell align="right">
                <Typography variant="body2" color="text.secondary">
                  {row.date}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}