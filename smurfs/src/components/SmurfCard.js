import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

function SmurfCard({ smurf, deleteSmurf }) {
  return (
    <div className='smurf-card'>
      <p onClick={() => deleteSmurf(smurf.id)}>X</p>

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

export default connect(null, { deleteSmurf })(SmurfCard);
