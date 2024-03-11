import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Box, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';

const LocationSelector = ({ locations, onLocationChange }) => {
  const [selectedLocation, setSelectedLocation] = React.useState('');

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
    onLocationChange(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb:   2 }}>
      <FormControl fullWidth variant="outlined" sx={{ mr:   2 }}>
        <InputLabel id="location-label">Location</InputLabel>
        <Select
          labelId="location-label"
          id="location-select"
          value={selectedLocation}
          onChange={handleLocationChange}
          label="Location"
        >
          {locations.map((location) => (
            <MenuItem key={location} value={location}>
              {location}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Search"
        variant="outlined"
        sx={{ flexGrow:   1 }}
      />
    </Box>
  );
};

LocationSelector.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.string).isRequired, // Expects an array of strings
  onLocationChange: PropTypes.func.isRequired, // Expects a function
};

export default LocationSelector;