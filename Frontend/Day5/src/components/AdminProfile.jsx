import React from 'react';

const AdminProfile = ({ adminProfile }) => {
  if (!adminProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="admin-profile">
      <h2>{adminProfile.name}</h2>
      <img src={adminProfile.profilePicture} alt="Profile" />
      <p>{adminProfile.email}</p>
      {/* Add more profile details as needed */}
    </div>
  );
};

export default AdminProfile;