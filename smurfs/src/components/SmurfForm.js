import React from 'react';

export default function SmurfForm() {
  return (
    <div className='smurf-form'>
      <form>
        <label>
          What's your name:
          <input id='name' type='text' placeholder='...name' required />
        </label>

        <label>
          What's your age:
          <input id='age' type='number' placeholder='...age' required />
        </label>

        <label>
          What's your height:
          <input id='height' type='number' placeholder='...height' required />
        </label>
      </form>
    </div>
  );
}
