import React, { useState } from 'react';
import './explore.css';

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [rivers, setRivers] = useState([]);
  const [loading, setLoading] = useState(false);  // Loading state

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000?search=${searchTerm}`);
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await response.json();
      console.log(data); // Log the data to check its structure
      setRivers(data);
    } catch (error) {
      console.error('Error fetching rivers:', error);
    }
    setLoading(false);
  };

  return (
    <div className='myexplore'>
      <div className="explore">
        <h2>Explore River</h2>
        <input
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div id='bt1'>
          <button onClick={handleSearch}>Search</button>
        </div>
        {loading ? <p>Loading...</p> : null}
        <div className="river-results">
          {rivers.length === 0 && !loading ? (
            <p>No rivers found.</p>
          ) : (
            rivers.map((river) => (
              <div key={river._id} className="river">
                <h3>{river.river_name}</h3> {/* Updated to match the schema */}
                <p>{river.description}</p>
                <p>Location: {river.origin.location.description}</p> {/* Origin location description */}
                <p>Length: {river.length_km} km</p> {/* Updated to length_km */}
                {/* Add more details if needed */}
                {river.major_cities && river.major_cities.length > 0 && (
                  <div>
                    <h4>Major Cities:</h4>
                    <ul>
                      {river.major_cities.map((city, index) => (
                        <li key={index}>{city.name}: {city.description}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {river.tributaries && river.tributaries.left.length > 0 && (
                  <div>
                    <h4>Left Tributaries:</h4>
                    <ul>
                      {river.tributaries.left.map((tributary, index) => (
                        <li key={index}>{tributary.name}: {tributary.description}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {river.tributaries && river.tributaries.right.length > 0 && (
                  <div>
                    <h4>Right Tributaries:</h4>
                    <ul>
                      {river.tributaries.right.map((tributary, index) => (
                        <li key={index}>{tributary.name}: {tributary.description}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore;
