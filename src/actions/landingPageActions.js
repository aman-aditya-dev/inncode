import * as types from '../constants/actionTypes';
export function incrementInAction(myparams) {
    return function (dispatch) {
      // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
      // in this case at this point we could call a service that would 
      return dispatch({
        type: types.INCREMENT_ONE,
        dateModified: new Date(),
        myparams
      });
    };
  }