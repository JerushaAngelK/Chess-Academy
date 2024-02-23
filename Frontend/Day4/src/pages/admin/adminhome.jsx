import React, { useState } from 'react';
import PersistentDrawerLeft from '../../components/Drawer';
import '../../assets/css/home.css';
import LocationSelector from '../../components/Location';
import CountryCard from '../../components/Country';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Footer from '../../components/Footer';
import AdminPersistentDrawerLeft from '../../components/AdminDrawer';

export default function AdminHome() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const countries = [
    { name: 'USA', caption: 'The United States of America' },
    { name: 'Canada', caption: 'North of the United States' },
    { name: 'Australia', caption: 'Down Under' },
    { name: 'India', caption: 'In Asia' },
    { name: 'UK', caption: 'Island' },
    
  ];

  const handleLocationChange = (location) => {
    setSelectedCountry(location);
    setSearchInput(location); // Update search input to match the selected location
  };

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  // Find the matching country based on the search input or selected location
  const matchingCountry = countries.find(country =>
    country.name.toLowerCase() === searchInput.toLowerCase() ||
    country.caption.toLowerCase() === searchInput.toLowerCase()
  );

  return (
    <div className='seey'>
      <AdminPersistentDrawerLeft style={{ backgroundColor: "#A67B5B" }} />
      <Box sx={{ flexGrow:   1, p:   2 }}>
        <LocationSelector
          locations={countries.map(country => country.name)}
          onLocationChange={handleLocationChange}
        />
        {/* Assuming the search box is already present in your UI */}
        {matchingCountry ? (
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <CountryCard
                country={matchingCountry.name}
                caption={matchingCountry.caption}
                imageUrl={`../src/assets/images/${matchingCountry.name.toLowerCase()}.jpg`}
                selectedCountry={selectedCountry}
              />
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={2}>
            {countries.map((country) => (
              <Grid item xs={12} sm={6} md={4} key={country.name}>
                <CountryCard
                  country={country.name}
                  caption={country.caption}
                  imageUrl={`../src/assets/images/${country.name.toLowerCase()}.jpg`}
                  selectedCountry={selectedCountry}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
      <Footer />
    </div>
  );
}