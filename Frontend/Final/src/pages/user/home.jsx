// import  { useEffect, useState } from 'react';
// import { Navigate, useNavigate} from 'react-router-dom';
// import PersistentDrawerLeft from '../../components/Drawer';
// import '../../assets/css/home.css';
// import LocationSelector from '../../components/Location';
// import CountryCard from '../../components/Country';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Footer from '../../components/Footer';

// export default function Home() {
//   // const history = useHistory(); // Initialize useHistory
//   const navigate = useNavigate();
//   const [selectedCountry, setSelectedCountry] = useState('');
//   const [searchInput, setSearchInput] = useState('');
//   const [states, setStates] = useState([]);
//   const countries = [
//     { name: 'Karnataka', caption: 'mm' },
//     { name: 'Kerala', caption: 'North of the United States' },
//     { name: 'TamilNadu', caption: 'Down Under' },
//     { name: 'AndhraPradesh', caption: 'In Asia' },
//     { name: 'Maharashtra', caption: 'Island' },
//     { name: 'Telangana', caption: 'Island' }
//   ];

//   const token = localStorage.getItem("token");
// useEffect(() => {
//   const fetchCountries = async () => {
// try {
//   const response = await fetch("http://localhost:8080/api/states/", 
//   {
//     headers: {
//       Authorization: `Bearer ${token}`, 
//       "Content-Type": "application/json", 
//   }
  
// });
// if (!response.ok) {
//   throw new Error('Network response was not ok');
// }
// const data = await response.json();
// // Assuming the backend returns an array of states
// // Update the countries state with the fetched data
// setCountries(data);
// }
// catch(error){
//   console.log(error);
// }
// };
// fetchCountries();
// }, [token]);



//   const handleLocationChange = (location) => {
//     setSelectedCountry(location);
//     setSearchInput(location);
//     if (location === 'India') {
//       Navigate('/indian-cities');
//     }
//   };

//   const handleSearchChange = (event) => {
//     setSearchInput(event.target.value);
//   };
  
//   const matchingCountry = countries.find(country =>
//     country.name.toLowerCase() === searchInput.toLowerCase() ||
//     country.caption.toLowerCase() === searchInput.toLowerCase()
//   );
//   const handleCardClick = () => {
//     navigate('/ofcourses');
//  };
//   return (
//     <div className='seey'>
//       <PersistentDrawerLeft style={{ backgroundColor: "#A67B5B" }} />
//       <h2 style={{marginLeft:"20px",fontFamily:"Arial",textShadow:"1px  1px  6px brown"}}>Queening becomes easy with us!</h2>
//       <h3 style={{marginLeft:"20px",marginTop:"0px",fontFamily:"serif",textShadow:"1px  1px  6px brown"}}>Choose your pawn's square to begin</h3>
//       <Box sx={{ flexGrow:   1, p:   2 }}>
//         <LocationSelector
//           locations={countries.map(country => country.name)}
//           onLocationChange={handleLocationChange}
//         />
//         {matchingCountry ? (
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6} md={4}>
//               <CountryCard
//                 country={matchingCountry.name}
//                 caption={matchingCountry.caption}
//                 imageUrl={`../src/assets/images/${matchingCountry.name.toLowerCase()}.jpg`}
//                 selectedCountry={selectedCountry}
//               />
//             </Grid>
//           </Grid>
//         ) : (
//           <Grid container spacing={2}>
//             {countries.map((country) => (
//               <Grid item xs={12} sm={6} md={4} key={country.name}>
//                 <div onClick={handleCardClick}>
//                 <CountryCard
//                   country={country.name}
//                   caption={country.caption}
//                   imageUrl={`../src/assets/images/${country.name.toLowerCase()}.jpg`}
//                   selectedCountry={selectedCountry}
//                   />
//                   </div>
//               </Grid>
//             ))}
//           </Grid>
//         )}
//       </Box>
//       <Footer />
//     </div>
//   );
// }
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import PersistentDrawerLeft from '../../components/Drawer';
import '../../assets/css/home.css';
import LocationSelector from '../../components/Location';
import CountryCard from '../../components/Country';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Footer from '../../components/Footer';

export default function Home() {
 const navigate = useNavigate();
 const [selectedCountry, setSelectedCountry] = useState('');
 const [searchInput, setSearchInput] = useState('');
 const [states, setStates] = useState([]); // Updated to states
 const token = localStorage.getItem("token");

 useEffect(() => {
   const fetchStates = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/states/", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched states data:', data); // Log the fetched data to the console
        setStates(data); // Update the states state with the fetched data
      } catch (error) {
        console.error("Failed to fetch states:", error);
      }
   };

   fetchStates();
 }, [token]); // Depend on the token to refetch when it changes

 const handleLocationChange = (location) => {
    setSelectedCountry(location);
    setSearchInput(location);
    if (location === 'India') {
      navigate('/indian-cities');
    }
 };

 const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
 };

 const matchingCountry = states.find(state =>
    state.stateName.toLowerCase() === searchInput.toLowerCase() ||
    state.image.toLowerCase() === searchInput.toLowerCase()
 );

 const handleCardClick = () => {
    navigate('/ofcourses');
 };

 return (
    <div className='seey'>
      <PersistentDrawerLeft style={{ backgroundColor: "#A67B5B" }} />
      {/* <h2 className='heading-main'style={{ marginLeft: "400px", fontFamily: "Arial", textShadow: "1px 1px 6px brown" }}>Queening becomes easy with us!</h2> */}
      <h3 className='heading-sub'style={{ marginLeft: "300px", marginTop: "0px", fontFamily: "serif", textShadow: "1px 1px 6px brown" }}>CHOOSE YOUR PAWN'S SQUARE TO BEGIN...</h3>
      <Box sx={{ flexGrow: 1, p: 4 }}>
        <LocationSelector
          locations={states.map(state => state.stateName)} 
          onLocationChange={handleLocationChange}
        />
        {matchingCountry ? (
          <Grid container spacing={2}>
            <Grid item xs={1} sm={6} md={2}>
              <CountryCard
                stateName={matchingCountry.stateName} 
                image={matchingCountry.image} 
                selectedCountry={selectedCountry}
              />
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={2}>
            {states.map((state) => ( 
              <Grid item xs={2} sm={6} md={4} key={state.stateName}>
                <div onClick={handleCardClick}>
                 <CountryCard
                    stateName={state.stateName}
                    image={state.image} 
                    selectedCountry={selectedCountry}
                 />
                </div>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
      <Footer />
    </div>
 );
}