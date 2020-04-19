export const NAME = 'NAME';
export const AGE = 'AGE';
export const HEIGHT = 'HEIGHT';
export const RESET = 'RESET';

export const handleInput = (e, fieldName) => {
  return {
    type: fieldName,
    payload: e.target.value,
  };
};

export const resetForm = () => {
  return {
    type: RESET,
  };
};
