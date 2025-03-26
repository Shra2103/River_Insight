import React from 'react';
import './climate.css'
import climate1 from './climate1.jpg';
import climate2 from './climate2.jpg'

const ClimateImpact = () => {
  return (
    <div className='climate-container'>
       
       <div className='box'>
       <h1>Climate Impact</h1>
    <section className="climate-section">
      <h2>1. Climate Impact on Rivers</h2>
      <p>
        Affects river systems by altering precipitation patterns, increasing the frequency of extreme weather events, 
        and causing temperature fluctuations. These changes can lead to altered river flow, reduced water quality, 
        and disrupted ecosystems.
      </p>
    </section>

    <section className="climate-section">
      <h2>2. Impact on Climate Due to Rivers</h2>
      <p>
        Rivers play a crucial role in the carbon cycle and climate regulation. Healthy river ecosystems can sequester carbon, 
        while polluted or disrupted rivers may release greenhouse gases, contributing to climate change.
      </p>

      <div className="climate-images">
        <img src={climate1} alt="Climate Impact Diagram 1" />
        <img src={climate2} alt="Climate Impact Diagram 2" />
      </div>
    </section>
  </div>
  </div>
  );
};

export default ClimateImpact;
