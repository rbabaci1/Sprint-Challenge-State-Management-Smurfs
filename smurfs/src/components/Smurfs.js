import React from 'react';
import { fetchSmurfs } from '../actions';
import { connect } from 'react-redux';
import SmurfCard from './SmurfCard';

function Smurfs({ fetchSmurfs, smurfs, loading, error }) {
  return error ? (
    <p style={{ color: 'red' }}>{error}</p>
  ) : (
    <div className='smurfs-wrapper'>
      <button onClick={fetchSmurfs} disabled={loading} className='show-smurfs'>
        Show Smurfs
      </button>

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
