import { combineReducers } from 'redux';

import tracksReducer from './tracksReducer';

export default combineReducers({
  trackList: tracksReducer
});