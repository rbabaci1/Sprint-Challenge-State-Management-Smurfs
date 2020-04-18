import Axios from 'axios';
export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const POST = 'POST';

export const fetchSmurfs = () => (dispatch) => {
  dispatch({
    type: LOADING,
  });

  Axios.get('http://localhost:3333/smurfs')
    .then((response) => {
      dispatch({
        type: SUCCESS,
        payload: response.data,
      });
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

  Axios.post('/smurfs', smurf)
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};
