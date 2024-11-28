import React from 'react';
import './Profile.css'; // Importing CSS for styling

const Profile = () => {
  const user = {
    name: 'Farhan',
    email: 'hanzramadhan111503@gmail.com',
    bio: 'Tugas Akhir Praktikuk PPP Epic Games',
  };

  return (
    <div className="profile">
      <div className="profile-info">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.bio}</p>
      </div>
    </div>
  );
};

export default Profile;
