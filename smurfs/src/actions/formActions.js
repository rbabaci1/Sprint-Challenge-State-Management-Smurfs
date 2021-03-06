export const NAME = 'NAME';
export const AGE = 'AGE';
export const HEIGHT = 'HEIGHT';
export const RESET = 'RESET';
export const EDITING = 'EDITING';

export const handleInput = (e, fieldName) => ({
  type: fieldName,
  payload: e.target.value,
});

export const resetForm = () => ({ type: RESET });

export const editSmurf = (smurf) => (dispatch) =>
  dispatch({ type: EDITING, payload: smurf });
