import React, { useState, useRef } from "react";
import "./Profile.css";
import defImg from "../assets/profile.webp"

const Profile = () => {
  const [profileImage, setProfileImage] = useState(defImg);
  const [apikey, setApiKey] = useState("e2s4h5a6");
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    console.log("im called");
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setProfileImage(event.target.result);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleUpdatePhoto = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="profile-container">
      <div className="profile-info">
        <div className="profile-picture">
            <label htmlFor="imageInput">
                <img
                src={profileImage}
                alt="Profile"
                onClick={handleUpdatePhoto}
                />
            </label>
            <input
                type="file"
                id="imageInput"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleImageChange}
            />
        </div>
        <div className="user-details">
          <h2>John Doe</h2>
          <p>johndoe@example.com</p>
          <p>API KEY : {apikey}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
