import { LOADING, SUCCESS, ERROR } from '../actions';

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
        error: '',
      };
    case SUCCESS:
      return {
        ...state,
        smurfs: payload,
        loading: false,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: 'Request failed, please try again!',
      };
    default:
      return state;
  }
};
