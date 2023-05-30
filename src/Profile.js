import './styles.css';
import profile from './profile.jpg';
import { useLocation } from 'react-router-dom';
import React from 'react';

function Profile(){

    // Accessing the location object from react-router-dom
    const location = useLocation();

    // Retrieving profileData from the location state
    const profileData = location.state.profileData;

    return(
        <div class = 'Frame'>
            
                <div class = 'ProfileBioRow'>
                    <div class = 'ProfileImageCol'>
                        <img src={profile} class="ProfileImg"/>
                    </div>
                <div class = 'ProfileDesCol'>
                    <div class = 'ProfileName'>
                        <h3>{profileData.name}</h3>
                    </div>
                    <div class = 'ProfileData'>
                        <h4>Age: {profileData.age}</h4>
                        <h4>Experience: 8 years</h4>
                        <h4>Rating: {profileData.rating}</h4>
                    </div>
                    <div class = 'ProfileBio'>
                        <body>{profileData.bio}</body>
                    </div>
                </div>
            </div>
            <div class = 'ProfileContactRow'>
                <div class = 'ContactTitle'>
                    <h2>Contact Info</h2>
                </div>
                <div class = 'ContactInfo'>
                    <body>Email ID: abc@gmail.com</body>
                    <body>Phone No: +123 891 8000</body>
                </div>                
            </div>
             
        </div>
    );
}

export default Profile;