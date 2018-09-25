import { SEARCH_TRACKS } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case SEARCH_TRACKS:
      return {
        ...state,
        trackList: action.payload,
        heading: 'Search Results'
      };
      break;
    default:
      return state;
  }
}