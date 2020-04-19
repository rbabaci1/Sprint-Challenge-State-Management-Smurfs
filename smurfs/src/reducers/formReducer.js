import { NAME, AGE, HEIGHT, RESET } from '../actions/formActions';

export const initialState = {
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
    case RESET:
      return initialState;
    default:
      return state;
  }
};
