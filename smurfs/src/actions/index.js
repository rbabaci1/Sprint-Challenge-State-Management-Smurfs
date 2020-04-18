import Axios from 'axios';
export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const fetchSmurfs = () => (dispatch) => {
  dispatch({
    type: LOADING,
  });

  Axios.get('http://localhost:3333/smurfs')
    .then((response) => {
      setTimeout(() => {
        dispatch({
          type: SUCCESS,
          payload: response.data,
        });
      }, 1500);
    })
    .catch((err) => {
      dispatch({
        type: ERROR,
      });
      console.error(err);
    });
};

export const postSmurf = (smurf) => (dispatch) => {
  dispatch({
    type: LOADING,
  });

  Axios.post('http://localhost:3333/smurfs', smurf)
    .then((response) => {
      setTimeout(() => {
        dispatch({
          type: SUCCESS,
          payload: response.data,
        });
      }, 1500);
    })
    .catch((err) => {
      dispatch({
        type: ERROR,
      });
      console.error(err);
    });
};

export const deleteSmurf = (smurfId) => (dispatch) => {
  dispatch({
    type: LOADING,
  });

  Axios.delete(`http://localhost:3333/smurfs/${smurfId}`).then((response) => {
    dispatch({
      type: SUCCESS,
      payload: response.data,
    });
  });
};
