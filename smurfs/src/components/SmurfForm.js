import React from 'react';
import { connect, useSelector } from 'react-redux';
import { postNewSmurf, modifySmurf } from '../actions/smurfsActions';
import {
  handleInput,
  resetForm,
  NAME,
  AGE,
  HEIGHT,
} from '../actions/formActions';

function SmurfForm({ handleInput, resetForm, postNewSmurf, modifySmurf }) {
  const { loading } = useSelector(({ smurfsReducer }) => smurfsReducer);
  const formInfo = useSelector(({ formReducer }) => formReducer);
  const { name, age, height, editing } = formInfo;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!editing) postNewSmurf(formInfo);
    else modifySmurf(formInfo);

    resetForm();
  };

  return (
    <div className='smurf-form'>
      <form onSubmit={handleSubmit}>
        <label>
          What's your name:
          <input
            onChange={(e) => handleInput(e, NAME)}
            value={name}
            id='name'
            type='text'
            placeholder='...name'
            required
          />
        </label>

        <label>
          What's your age:
          <input
            onChange={(e) => handleInput(e, AGE)}
            value={age}
            id='age'
            type='number'
            placeholder='...age'
            required
          />
        </label>

        <label>
          What's your height:
          <input
            onChange={(e) => handleInput(e, HEIGHT)}
            value={height}
            id='height'
            type='text'
            placeholder='...height'
            required
          />
        </label>

        <button disabled={loading}>
          {loading ? 'Loading...' : editing ? 'Update' : 'Add'}
        </button>
      </form>
    </div>
  );
}

export default connect(null, {
  handleInput,
  resetForm,
  postNewSmurf,
  modifySmurf,
})(SmurfForm);
