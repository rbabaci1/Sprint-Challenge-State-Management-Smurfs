import { NAME, AGE, HEIGHT, RESET, EDITING } from '../actions/formActions';

export const initialState = {
  name: '',
  age: '',
  height: '',
  editing: false,
};

export const formReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case NAME: {
      return { ...state, name: payload };
    }
    case AGE: {
      return { ...state, age: payload };
    }
    case HEIGHT: {
      return { ...state, height: payload };
    }
    case EDITING: {
      return { ...payload, editing: true };
    }
    case RESET:
      return initialState;
    default:
      return state;
  }
};
