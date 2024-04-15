import React from 'react';
import './Pillars.css'; // Ensure you create a corresponding CSS file.

const pillars = [
  { name: 'Shahadah', subtitle: 'Faith', icon: 'path-to-faith-icon.svg' },
  { name: 'Salah', subtitle: 'Prayer', icon: 'path-to-prayer-icon.svg' },
  { name: 'Sawm', subtitle: 'Fasting', icon: 'path-to-fasting-icon.svg' },
  { name: 'Zakat', subtitle: 'Almsgiving', icon: 'path-to-almsgiving-icon.svg' },
  { name: 'Hajj', subtitle: 'Pilgrimage', icon: 'path-to-pilgrimage-icon.svg' },
];

function Pillars() {
  return (
    <section className="pillars-section">
      <h1 className="pillars-title">Five Pillars of Islam</h1>
      <div className="pillars-container">
        {pillars.map((pillar, index) => (
          <div className="pillar" key={index}>
            <img src={pillar.icon} alt={pillar.name} />
            <h2>{pillar.name}</h2>
            <p>{pillar.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pillars;
