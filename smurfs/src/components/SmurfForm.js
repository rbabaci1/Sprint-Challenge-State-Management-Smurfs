import React from 'react';
import { connect } from 'react-redux';
import {
  handleInput,
  resetForm,
  NAME,
  AGE,
  HEIGHT,
} from '../actions/formActions';
import { postNewSmurf } from '../actions/smurfsActions';

function SmurfForm({
  formInfo,
  handleInput,
  loading,
  postNewSmurf,
  resetForm,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    postNewSmurf(formInfo);
    resetForm();
  };

  return (
    <div className='smurf-form'>
      <form onSubmit={handleSubmit}>
        <label>
          What's your name:
          <input
            onChange={(e) => handleInput(e, NAME)}
            value={formInfo.name}
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
            value={formInfo.age}
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
            value={formInfo.height}
            id='height'
            type='text'
            placeholder='...height'
            required
          />
        </label>

        <button disabled={loading}>{loading ? 'Loading...' : 'Add'}</button>
      </form>
    </div>
  );
}

const mapStateToProps = ({ formReducer, smurfsReducer }) => ({
  formInfo: formReducer,
  loading: smurfsReducer.loading,
});
const mapDispatchToProps = { handleInput, postNewSmurf, resetForm };

export default connect(mapStateToProps, mapDispatchToProps)(SmurfForm);
