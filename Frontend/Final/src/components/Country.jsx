
// // import '../assets/css/home.css'; // Import the CSS file
// // import React, { useEffect, useRef, useState } from 'react';
// // import PropTypes from 'prop-types';
// // import Box from '@mui/material/Box';
// // import Typography from '@mui/material/Typography';

// // const CountryCard = ({ country, caption, imageUrl, selectedCountry }) => {
// //   const [isHovered, setIsHovered] = useState(false);
// //   const [isClicked, setIsClicked] = useState(false);
// //   const cardRef = useRef(null);

// //   const handleMouseEnter = () => {
// //     setIsHovered(true);
// //   };

// //   const handleMouseLeave = () => {
// //     setIsHovered(false);
// //   };

// //   const handleClick = () => {
// //     setIsClicked(!isClicked);
// //   };

// //   const handleClickOutside = () => {
// //     setIsClicked(false);
// //   };

// //   const isSelected = country === selectedCountry;
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (cardRef.current && !cardRef.current.contains(event.target)) {
// //         setIsClicked(false);
// //       }
// //     };

// //     document.addEventListener('mousedown', handleClickOutside);
// //     return () => {
// //         document.removeEventListener('mousedown', handleClickOutside);
// //       };
// //     }, [cardRef]);
  
  

// //   return (
// //     <Box
// //       className={`country-card ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`}
// //       onMouseEnter={handleMouseEnter}
// //       onMouseLeave={handleMouseLeave}
// //       onClick={handleClick}
// //       onBlur={handleClickOutside}
// //       ref={cardRef}
// //     >
// //         <div className="card-container">
// //         <img src={imageUrl} alt={country} className="country-card-image" />
// //         {isClicked && (
// //           <div className="caption-card">
// //             <Typography variant="body2" className="country-card-caption">
// //               {caption}
// //             </Typography>
// //           </div>
// //         )}
// //       </div>
// //       <div className="country-name">
// //         {country}
// //       </div>
// //     </Box>
// //   );
// // };

// // CountryCard.propTypes = {
// //   country: PropTypes.string.isRequired,
// //   caption: PropTypes.string.isRequired,
// //   imageUrl: PropTypes.string.isRequired,
// //   selectedCountry: PropTypes.string, // Add selectedCountry to propTypes if you're using it
// // };

// // export default CountryCard;

// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

// const CountryCard = ({ country, caption, imageUrl }) => {
//   const [isClicked, setIsClicked] = useState(false);

//   const handleClick = () => {
//     setIsClicked(!isClicked);
//   };

//   return (
//     <Box className={`country-card ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>
//       {isClicked ? (
//         <div className="caption-card">
//           <Typography variant="body2" className="country-card-caption">
//             {caption}
//           </Typography>
//         </div>
//       ) : (
//         <img src={imageUrl} alt={country} className="country-card-image" />
//       )}
//       <div className="country-name">
//         {country}
//       </div>
//     </Box>
//   );
// };

// CountryCard.propTypes = {
//   country: PropTypes.string.isRequired,
//   caption: PropTypes.string.isRequired,
//   imageUrl: PropTypes.string.isRequired,
//   selectedCountry: PropTypes.string, // Add selectedCountry to propTypes if you're using it
//  };

// export default CountryCard;
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'; 

const CountryCard = ({ stateName, image, selectedCountry }) => {
 const [isClicked, setIsClicked] = useState(false);
 const navigate = useNavigate(); 

 const handleClick = () => {
    setIsClicked(!isClicked);
    navigate(`/state/${stateName}`); 
 };

 return (
    <Box className={`country-card ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>
      {isClicked ? (
        <div className="caption-card">
          <Typography variant="body2" className="country-card-caption">
            {image}
          </Typography>
        </div>
      ) : (
        <img src={image} alt={stateName} className="country-card-image" />
      )}
      <div className="country-name">
        {stateName}
      </div>
    </Box>
 );
};

CountryCard.propTypes = {
 stateName: PropTypes.string.isRequired,
 image: PropTypes.string.isRequired,
 selectedCountry: PropTypes.string, 
};

export default CountryCard;