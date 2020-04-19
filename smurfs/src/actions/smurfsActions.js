import Axios from 'axios';
export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const DELETING = 'DELETING';

export const fetchSmurfs = () => (dispatch) => {
  dispatch({
    type: LOADING,
  });

  Axios.get('http://localhost:3333/smurfs')
    .then((response) => {
      dispatch({ type: SUCCESS, payload: response.data });
    })
    .catch((err) => {
      dispatch({
        type: ERROR,
      });
      console.error(err);
    });
};

export const postNewSmurf = (newSmurf) => (dispatch) => {
  dispatch({ type: LOADING });

  Axios.post('http://localhost:3333/smurfs', newSmurf)
    .then((response) => {
      setTimeout(() => {
        dispatch({ type: SUCCESS, payload: response.data });
      }, 1000);
    })
    .catch((err) => {
      dispatch({
        type: ERROR,
        payload: `Can't add a new Smurf now, please try again later.`,
      });
      console.error(err);
    });
};

export const deleteSmurf = (smurfId) => (dispatch) => {
  dispatch({ type: DELETING });

  Axios.delete(`http://localhost:3333/smurfs/${smurfId}`)
    .then((response) => {
      dispatch({
        type: SUCCESS,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ERROR,
        payload: `Can't delete the Smurf now, please try again later.`,
      });
      console.error(err);
    });
};
