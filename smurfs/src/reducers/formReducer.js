export const NAME = 'NAME';
export const AGE = 'AGE';
export const HEIGHT = 'HEIGHT';

const initialState = {
  name: '',
  age: '',
  height: '',
};

export const formReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case NAME: {
      return {
        ...state,
        name: payload,
      };
    }
    case AGE: {
      return {
        ...state,
        age: payload,
      };
    }
    case HEIGHT: {
      return {
        ...state,
        height: payload,
      };
    }
    default:
      return state;
  }
};
