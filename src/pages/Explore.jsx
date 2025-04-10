import React, { useState } from 'react';
import './explore.css';

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [rivers, setRivers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setError('Please enter a river name');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        `http://localhost:5000/api/rivers/search?search=${encodeURIComponent(searchTerm)}`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch rivers');
      }

      setRivers(data);
    } catch (err) {
      setError(err.message);
      console.error('Search failed:', err);
    } finally {
      setLoading(false);
    }
  };

  const renderTributaries = (tributaries) => {
    if (!tributaries) return null;

    return (
      <div className="tributaries-section">
        {tributaries.description && <p className="tributaries-desc">{tributaries.description}</p>}

        <div className="tributaries-columns">
          <div className="tributary-column">
            <h4>Left Tributaries</h4>
            {tributaries.left?.length > 0 ? (
              <ul>
                {tributaries.left.map((trib, index) => (
                  <li key={`left-${index}`}>
                    <strong>{trib.name}</strong>: {trib.description}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No left tributaries</p>
            )}
          </div>

          <div className="tributary-column">
            <h4>Right Tributaries</h4>
            {tributaries.right?.length > 0 ? (
              <ul>
                {tributaries.right.map((trib, index) => (
                  <li key={`right-${index}`}>
                    <strong>{trib.name}</strong>: {trib.description}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No right tributaries</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="myexplore">
      <div className="explore">
        <h2>River Explorer</h2>

        <div className="search-container">
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a river..."
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <div id="bt1">
            <button onClick={handleSearch} disabled={loading}>
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </div>

        {error && <div className="error">{error}</div>}

        <div className="results">
          {loading ? (
            <div className="loader">Loading...</div>
          ) : rivers.length > 0 ? (
            <div className="river-list">
              {rivers.map((river) => (
                <div key={river._id} className="river-card">
                  <h2>{river.river_name}</h2>
                  <p className="river-desc">{river.description}</p>

                  <div className="river-details">
                    <div className="detail-group">
                      <h3>Basic Information</h3>
                      <p><strong>Length:</strong> {river.length_km} km</p>
                      <p><strong>Basin Area:</strong> {river.basin_area_sq_km} km²</p>
                      <p><strong>Population Dependent:</strong> {river.population_dependent_millions} million</p>
                    </div>

                    <div className="detail-group">
                      <h3>Geography</h3>
                      <p><strong>Origin:</strong> {river.origin?.location?.description}</p>
                      <p><strong>Mouth:</strong> {river.mouth?.location?.description}</p>
                    </div>

                    {river.major_cities?.length > 0 && (
                      <div className="detail-group">
                        <h3>Major Cities</h3>
                        <ul className="city-list">
                          {river.major_cities.map((city, index) => (
                            <li key={`city-${index}`}>
                              <strong>{city.name}</strong>: {city.description}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {renderTributaries(river.tributaries)}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            !error &&
            searchTerm && <div className="no-results">No results found for "{searchTerm}"</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore;
