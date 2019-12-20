import {INCREMENT_ONE} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function landingPageReducers(state = initialState.landingPage, action) {
    let newState;
    switch (action.type) {
      case INCREMENT_ONE:
        newState = objectAssign({}, state);
        newState.name = action.myparams;
        return newState;
  
      default:
        return state;
    }
  }