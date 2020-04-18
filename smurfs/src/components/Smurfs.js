import React from 'react';
import { fetchSmurfs } from '../actions';
import { connect } from 'react-redux';
import SmurfCard from './SmurfCard';

function Smurfs({ fetchSmurfs, smurfs, loading, error }) {
  return error ? (
    <p style={{ color: 'red' }}>{error}</p>
  ) : (
    <>
      <button onClick={fetchSmurfs} disabled={loading}>
        Show Smurfs
      </button>

      <div className='smurfs'>
        {console.log(smurfs)}
        {smurfs.map((smurf) => (
          <SmurfCard key={smurf.id} smurf={smurf} />
        ))}
      </div>
    </>
  );
}

const mapStateToProps = ({ smurfs, loading, error }) => ({
  smurfs,
  loading,
  error,
});

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs);
