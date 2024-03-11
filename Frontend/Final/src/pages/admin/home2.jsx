import  { useState } from 'react';
import { Navigate, useNavigate} from 'react-router-dom';
import PersistentDrawerLeft from '../../components/Drawer';
import '../../assets/css/home.css';
import LocationSelector from '../../components/Location';
import CountryCard from '../../components/Country';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Footer from '../../components/Footer';

export default function Home2() {
  // const history = useHistory();
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const countries = [
    { name: 'Karnataka', caption: 'mm' },
    { name: 'Kerala', caption: 'North of the United States' },
    { name: 'TamilNadu', caption: 'Down Under' },
    { name: 'AndhraPradesh', caption: 'In Asia' },
    { name: 'Maharashtra', caption: 'Island' },
    { name: 'Telangana', caption: 'Island' }
  ];

  const [showAddLocationForm, setShowAddLocationForm] = useState(false);
const [newLocation, setNewLocation] = useState({ name: '', caption: '', imageUrl: '' });

const handleAddLocation = () => {
 setShowAddLocationForm(true);
};

const handleNewLocationChange = (event) => {
 setNewLocation({ ...newLocation, [event.target.name]: event.target.value });
};

const handleNewLocationSubmit = (event) => {
 event.preventDefault();
 setCountries([...countries, newLocation]);
 setShowAddLocationForm(false);
};

  const handleLocationChange = (location) => {
    setSelectedCountry(location);
    setSearchInput(location);
    if (location === 'India') {
      Navigate('/indian-cities');
    }
  };

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };
  
  const matchingCountry = countries.find(country =>
    country.name.toLowerCase() === searchInput.toLowerCase() ||
    country.caption.toLowerCase() === searchInput.toLowerCase()
  );
  const handleCardClick = () => {
    navigate('/ofcourses');
 };
  return (
    <div className='seey'>
      <PersistentDrawerLeft style={{ backgroundColor: "#A67B5B" }} />
      {/* <h2 className='heading-main'style={{marginLeft:"20px",fontFamily:"Arial",textShadow:"1px  1px  6px brown"}}>Queening becomes easy with us!</h2> */}
      <h3 className='heading-sub' style={{marginLeft:"20px",marginTop:"0px",fontFamily:"serif",textShadow:"1px  1px  6px brown"}}>Choose your pawn's square to begin</h3>
      <Box sx={{ flexGrow:   1, p:   2 }}>
        <LocationSelector
          locations={countries.map(country => country.name)}
          onLocationChange={handleLocationChange}
        />
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
                <div onClick={handleCardClick}>
                <CountryCard
                  country={country.name}
                  caption={country.caption}
                  imageUrl={`../src/assets/images/${country.name.toLowerCase()}.jpg`}
                  selectedCountry={selectedCountry}
                  />
                  </div>
              </Grid>
            ))}
          </Grid>
        )}
         {showAddLocationForm && (
          <form onSubmit={handleNewLocationSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={newLocation.name} onChange={handleNewLocationChange} />
            </label>
            <label>
              Caption:
              <input type="text" name="caption" value={newLocation.caption} onChange={handleNewLocationChange} />
            </label>
            <label>
              Image URL:
              <input type="text" name="imageUrl" value={newLocation.imageUrl} onChange={handleNewLocationChange} />
            </label>
            <button type="submit">Submit</button>
          </form>
        )}
        <button onClick={handleAddLocation}>Add Location</button>
      </Box>
      <Footer />
    </div>
  );
}