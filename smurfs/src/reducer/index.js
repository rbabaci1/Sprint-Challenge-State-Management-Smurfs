import { LOADING } from '../actions';

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
    default:
      return state;
  }
};
