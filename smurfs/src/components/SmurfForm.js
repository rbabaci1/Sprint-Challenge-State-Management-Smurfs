import React from 'react';
import { connect } from 'react-redux';
import {
  handleName,
  handleAge,
  handleHeight,
  postNewSmurf,
} from '../actions/formActions';

function SmurfForm({ formInfo, handleName, handleAge, handleHeight }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    postNewSmurf(formInfo);
  };

  return (
    <div className='smurf-form'>
      <form onSubmit={handleSubmit}>
        <label>
          What's your name:
          <input
            onChange={handleName}
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
            onChange={handleAge}
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
            onChange={handleHeight}
            value={formInfo.height}
            id='height'
            type='text'
            placeholder='...height'
            required
          />
        </label>

        <button disabled={formInfo.posting}>
          {formInfo.posting ? 'Loading...' : 'Add'}
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = ({ formReducer }) => ({ formInfo: formReducer });
const mapDispatchToProps = { handleName, handleAge, handleHeight };

export default connect(mapStateToProps, mapDispatchToProps)(SmurfForm);
