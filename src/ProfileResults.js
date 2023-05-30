import './styles.css';
import profile from './profile.jpg';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProfileResults({searchResults}){
    
    const navigate = useNavigate();

    const handleViewProfile = (profileData) => {
        navigate('/profile', { state: { profileData } });
    };

    return(
        <div class = 'Frame'>
            {searchResults && searchResults.length > 0 ? (
            searchResults.map((result)=>(
                <div key={result.id} className='ResultsRow'>
                <div class = 'ProfileImgCol'>
                    <img src={profile} class="ProfileImgResults" alt='logo'/>
                </div>
                <div class = 'ProfileCol'>
                    <h3>{result.name}</h3>
                    <body><strong>Category: {result.category}</strong></body>
                    <div class = 'ProfileDes'><body>{result.bio}</body></div>
                </div>
                <div class = 'ProfileRatingCol'>
                    <div class = 'RatingR'>{result.rating}</div>
                    <h5>Rating</h5>
                    <div class ='ViewProfile'>
                        <div class = 'ButtonS'onClick={() => handleViewProfile(result)}>View Profile</div>
                    </div> 
                </div>
            </div>
            ))
            ) : (
              <div>No search results found.</div>
            )}
        </div>
    );
}

export default ProfileResults;