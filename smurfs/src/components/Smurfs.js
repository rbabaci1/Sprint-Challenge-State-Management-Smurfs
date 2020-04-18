import React, { useEffect } from 'react';
import { fetchSmurfs } from '../actions';
import { connect } from 'react-redux';
import SmurfCard from './SmurfCard';

function Smurfs({ fetchSmurfs, smurfs, loading, error }) {
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

const mapStateToProps = ({ smurfs, loading, error }) => ({
  smurfs,
  loading,
  error,
});

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs);
