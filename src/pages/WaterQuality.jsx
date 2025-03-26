import React from 'react';
import './water.css';
import ph from'./ph.jpg';
import turbidity from'./turbidity.jpg';
import oxygen from'./oxygen.jpg';


const WaterQuality = () => {
  return (
    <div className='mywater'>
      
      <div className="water-quality">
        <h2>Water Quality</h2>
        <p>
          River water quality is crucial for its health and sustainability, analyzing physical,
          chemical, and biological parameters like pH, dissolved oxygen, turbidity,
          nutrient levels, and contaminants.
        </p>
        <p>
          Regular monitoring using advanced technologies detects pollution sources, assesses
          ecological health, and informs conservation efforts.
        </p>
        <p>
          Maintaining good water quality protects ecosystems, ensures safe water for human use, 
          and supports environmental well-being.
        </p>

        <div className="water-parameters">
          <div className="parameter">
            <img src={ph} alt="pH Level" />
            <h3>pH Level</h3>
            <p>6.5 to 8.5 indicating a healthy aquatic environment.</p>
          </div>
          <div className="parameter">
            <img src={oxygen} alt="Dissolved Oxygen" />
            <h3>Dissolved Oxygen</h3>
            <p>Generally be above 5 mg/L to support aquatic life.</p>
          </div>
          <div className="parameter">
            <img src={turbidity} alt="Turbidity" />
            <h3>Turbidity</h3>
            <p>Below 10 NTU to ensure clear water and healthy aquatic habitats.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterQuality;
