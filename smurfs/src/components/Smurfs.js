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

// const mapStateToProps = ({smurfs})

export default connect(null, { fetchSmurfs })(Smurfs);
