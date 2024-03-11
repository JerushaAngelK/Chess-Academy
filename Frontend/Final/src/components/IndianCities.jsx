import React from 'react';
import { Typography } from '@mui/material';

const IndianCities = () => {
  return (
    <div>
      <Typography variant="h4">Main Indian Cities</Typography>
      <ul>
        <li>Mumbai</li>
        <li>Delhi</li>
        <li>Bangalore</li>
        <li>Hyderabad</li>
        <li>Chennai</li>
        {/* Add more cities as needed */}
      </ul>
    </div>
  );
};

export default IndianCities;