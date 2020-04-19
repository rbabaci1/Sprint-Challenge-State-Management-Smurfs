import { NAME, AGE, HEIGHT } from '../actions/formActions';

export const initialState = {
  name: '',
  age: '',
  height: '',
  posting: false,
  error: '',
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
