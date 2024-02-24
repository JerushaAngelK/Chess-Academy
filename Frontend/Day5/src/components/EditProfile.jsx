import *as React from 'react';
import { Modal, Box, Typography, Button, TextField, Select, MenuItem, InputLabel, FormControl, FormControlLabel, Checkbox, IconButton } from '@mui/material';
import { useState } from 'react';
import '../assets/css/editprofile.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const EditProfileModal = ({ open, handleClose }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [removeProfileImage, setRemoveProfileImage] = useState(false);
  const [country, setCountry] = useState('');
  const [age, setAge] = useState('');
  const [level, setLevel] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [previewImage, setPreviewImage] = useState(null); 
  const [showOptions, setShowOptions] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setProfileImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const handleRemoveImage = () => {
    setProfileImage(null);
    setPreviewImage(null);
    setRemoveProfileImage(true);
    setShowOptions(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({ profileImage, country, age, level, aboutMe });
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={{ width:  400, bgcolor: 'background.paper', p:  2, mt:  5, mx: 'auto' }}>
        <Typography id="modal-title" variant="h6" component="h2">
          Edit Profile
        </Typography>
        <form onSubmit={handleSubmit}>
        <Box sx={{ mt:   2, display: 'flex', alignItems: 'center' }}>
            {previewImage?(
              <>
              <img src={previewImage} alt="Profile" className="profile-image" />
              <IconButton
              onClick={() => setShowOptions(!showOptions)}
              className="edit-icon"
            >
              <EditIcon />
            </IconButton>
            {showOptions && (
              <Box className="options-list">
                <IconButton onClick={handleImageChange}>
                  <AddAPhotoIcon />
                </IconButton>
                <IconButton onClick={handleRemoveImage}>
                  <DeleteIcon />
                </IconButton>
                </Box>
            )}
            </>
            ) : (
              <IconButton
                onClick={handleImageChange}
                className="profile-image-placeholder"
              >
                <AddAPhotoIcon />
              </IconButton>
            )}
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="contained-button-file"
              type="file"
              onChange={handleImageChange}
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" component="span">
                Upload Image
              </Button>
            </label>
          </Box>
          {/* <Box sx={{ mt:  2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={removeProfileImage}
                  onChange={(event) => setRemoveProfileImage(event.target.checked)}
                  name="removeProfileImage"
                />
              }
              label="Remove Existing Photo"
            />
          </Box> */}
          <Box sx={{ mt:  2 }}>
            <FormControl fullWidth>
              <InputLabel id="country-label">Country</InputLabel>
              <Select
                labelId="country-label"
                id="country-select"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
              >
                {/* Add MenuItem components for each country option here */}
                <MenuItem value="USA">USA</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
                {/* Example */}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ mt:  2 }}>
            <TextField
              fullWidth
              type="number"
              label="Age"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
          </Box>
          <Box sx={{ mt:  2 }}>
            <FormControl fullWidth>
              <InputLabel id="level-label">Level</InputLabel>
              <Select
                labelId="level-label"
                id="level-select"
                value={level}
                onChange={(event) => setLevel(event.target.value)}
              >
                {/* Add MenuItem components for each level option here */}
                <MenuItem value="Beginner">Beginner</MenuItem>
                <MenuItem value="Intermediate">Intermediate</MenuItem>
                {/* Example */}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ mt:  2 }}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="About Me"
              value={aboutMe}
              onChange={(event) => setAboutMe(event.target.value)}
            />
          </Box>
          <Box sx={{ mt:  2 }}>
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
            <Button onClick={handleClose} variant="outlined" color="secondary" style={{ marginLeft: '10px' }}>
              Cancel
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default EditProfileModal;