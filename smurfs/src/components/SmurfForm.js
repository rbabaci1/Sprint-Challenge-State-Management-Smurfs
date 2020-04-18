import React, { useState } from 'react';

export default function SmurfForm() {
  const [formInfo, setFormInfo] = useState({
    name: '',
    age: '',
    height: '',
  });

  const handleChange = (e) => {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formInfo);
  };

  return (
    <div className='smurf-form'>
      <form onSubmit={handleSubmit}>
        <label>
          What's your name:
          <input
            onChange={handleChange}
            value={formInfo.name}
            id='name'
            name='name'
            type='text'
            placeholder='...name'
            required
          />
        </label>

        <label>
          What's your age:
          <input
            onChange={handleChange}
            value={formInfo.age}
            id='age'
            name='age'
            type='number'
            placeholder='...age'
            required
          />
        </label>

        <label>
          What's your height:
          <input
            onChange={handleChange}
            value={formInfo.height}
            id='height'
            name='height'
            type='number'
            placeholder='...height in foot'
            required
          />
        </label>

        <button>Add</button>
      </form>
    </div>
  );
}
