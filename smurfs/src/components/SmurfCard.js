import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions/smurfsActions';

function SmurfCard({ smurf, deleteSmurf }) {
  return (
    <div className='smurf-card'>
      <div className='buttons'>
        <p onClick={() => deleteSmurf(smurf.id)} className='delete'>
          X
        </p>

        <p className='edit'>edit</p>
      </div>

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
