export const NAME = 'NAME';
export const AGE = 'AGE';
export const HEIGHT = 'HEIGHT';
export const POST_NEW_SMURF = 'POST_NEW_SMURF';

export const handleName = (e) => {
  return {
    type: NAME,
    payload: e.target.value,
  };
};

export const handleAge = (e) => {
  return {
    type: AGE,
    payload: e.target.value,
  };
};

export const handleHeight = (e) => {
  return {
    type: HEIGHT,
    payload: e.target.value,
  };
};

export const postNewSmurf = (formData) => (dispatch) => {};
