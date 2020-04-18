import React from 'react';

export default function SmurfCard({ smurf }) {
  return (
    <div className='smurf-card'>
      <p>X</p>

      <h1>
        Name: <span>{smurf.name}</span>
      </h1>

      <h1>
        Age: <span>{smurf.age}</span>
      </h1>

      <h1>
        Height: <span>{smurf.height}</span>
      </h1>
    </div>
  );
}
