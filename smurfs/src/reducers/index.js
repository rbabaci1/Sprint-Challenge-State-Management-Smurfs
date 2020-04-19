import { combineReducers } from 'redux';
import { smurfsReducer } from './smurfsReducer';
import { formReducer } from './formReducer';

export default combineReducers({ smurfsReducer, formReducer });
