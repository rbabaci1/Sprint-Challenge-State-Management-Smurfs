import { LOADING, SUCCESS, ERROR, DELETING } from '../actions/smurfsActions';

const initialState = {
  smurfs: [],
  loading: false,
  deleting: false,
  error: '',
};

export const smurfsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, loading: true, error: '' };
    case DELETING: {
      return { ...state, deleting: true, error: '' };
    }
    case SUCCESS:
      return { ...state, smurfs: payload, loading: false };
    case ERROR:
      return { ...state, loading: false, deleting: false, error: payload };
    default:
      return state;
  }
};
