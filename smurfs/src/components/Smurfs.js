import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { fetchSmurfs } from '../actions/smurfsActions';
import SmurfCard from './SmurfCard';

function Smurfs({ fetchSmurfs }) {
  const { smurfs, error } = useSelector(({ smurfsReducer }) => smurfsReducer);

  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs]);

  return error ? (
    <p style={{ color: 'red' }}>{error}</p>
  ) : (
    <div className='smurfs-wrapper'>
      <div className='smurfs'>
        {smurfs.map((smurf) => (
          <SmurfCard key={smurf.id} smurf={smurf} />
        ))}
      </div>
    </div>
  );
}

export default connect(null, { fetchSmurfs })(Smurfs);
