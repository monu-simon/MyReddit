import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Typography from '@mui/material/Typography';


const Footer = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', textAlign: 'center', padding: '16px' }}>
      <Typography variant="body2" color="textSecondary">
        &copy; MyReddit
      </Typography>
    </div>
  )
}

export default Footer