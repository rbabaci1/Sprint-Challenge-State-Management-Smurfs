import React, { useState } from 'react';

export default function SmurfForm() {
  const [formInfo, setFormInfo] = useState({
    name: '',
    age: 0,
    height: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='smurf-form'>
      <form onSubmit={handleSubmit}>
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

        <button>Add</button>
      </form>
    </div>
  );
}
