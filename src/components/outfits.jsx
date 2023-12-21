import React, { useState, useEffect } from 'react';
import './outfits/outfits.css';

const Outfits = () => {
  const [outfits, setOutfits] = useState([]);
  const [filteredOutfits, setFilteredOutfits] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState('summer'); // Default season

  useEffect(() => {
    // Get outfit data from JSON file
    // Update the fetch URL to use the correct relative path
    fetch('/outfits.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => setOutfits(data))
    .catch(error => console.error('Error fetching outfits:', error));
})

  const handleSeasonChange = (event) => {
    setSelectedSeason(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Display outfit images based on the selected season
    filterOutfitsBySeason(selectedSeason);
  };

  const filterOutfitsBySeason = (selectedSeason) => {
    const filteredOutfits = outfits.filter(outfit => outfit.season === selectedSeason);
    setFilteredOutfits(filteredOutfits);
  };

  return (
    <div className="outfit-container">
      <div className="banner">
        <img
          src="./images/outfits.jpg"
          alt="Outfits Banner"
          className="outfits-image"
        />
      </div>
      <div className='page-description'>
        <p>
          Explore your style with our interactive outfit inspiration page!
          Choose your preferred season and discover curated looks tailored
          to the weather and trends. From cozy winter ensembles to breezy
          summer outfits, our platform guides you through a diverse array
          of fashion choices, ensuring you stay both on-trend and
          weather-appropriate. Elevate your wardrobe effortlessly by
          selecting your favorite season and unlocking a world of personalized
          fashion inspiration.
        </p>
        <h1>Outfit Finder</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="seasonSelect">Select a Season:</label>
          <select
            id="seasonSelect"
            value={selectedSeason}
            onChange={handleSeasonChange}
            className="form-control"
          >
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="autumn">Autumn</option>
            <option value="winter">Winter</option>
          </select>

          <button type="submit" className="btn">Get Outfits</button>
        </div>
      </form>

      <div id="outfitImages" className="imageSection">
        {/* Display outfit images here */}
        {filteredOutfits.map((outfit, index) => (
          <img
            key={index}
            src={outfit.image}
            alt={`Outfit ${index + 1}`}
            className="outfitImg"
          />
        ))}
      </div>
    </div>
  );
};

export default Outfits;

