import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions/smurfsActions';
import { editSmurf } from '../actions/formActions';

function SmurfCard({ smurf, deleteSmurf, editSmurf }) {
  return (
    <div className='smurf-card'>
      <div className='buttons'>
        <p onClick={() => deleteSmurf(smurf.id)} className='delete'>
          X
        </p>

        <p className='edit' onClick={() => editSmurf(smurf)}>
          edit
        </p>
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

export default connect(null, { deleteSmurf, editSmurf })(SmurfCard);
