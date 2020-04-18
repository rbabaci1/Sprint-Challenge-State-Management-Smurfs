import { LOADING, SUCCESS } from '../actions';

const initialState = {
  smurfs: [],
  loading: false,
  error: '',
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS:
      return {
        ...state,
        smurfs: payload,
        loading: false,
      };
    default:
      return state;
  }
};
