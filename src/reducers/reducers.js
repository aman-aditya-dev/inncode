import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

// import your Module reducers here and combine them
import landingPageReducers from './landingPageReducers'

export default (history) => combineReducers({
  router: connectRouter(history),
  landingPageReducers
});