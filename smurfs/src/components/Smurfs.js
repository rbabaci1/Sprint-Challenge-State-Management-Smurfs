import React from 'react';
import { fetchSmurfs } from '../actions';
import { connect } from 'react-redux';

function Smurfs({ fetchSmurfs }) {
  return (
    <div className='smurfs'>
      <button onClick={fetchSmurfs}>Show Smurfs</button>
    </div>
  );
}

const mapStateToProps = ({ smurfs, loading, error }) => ({
  smurfs,
  loading,
  error,
});

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs);
