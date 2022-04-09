import { SET_TRACK, SET_ARTIST, SEARCH_ARTIST, SEARCH_TRACK } from "./actionTypes";

const initialState = {
  tracks: [],
  artists: [],
  searchedArtist: [],
  searchedTrack: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRACK:
      return {
        ...state,
        tracks: action.payload,
      };

    case SET_ARTIST:
      return {
        ...state,
        artists: action.payload,
      };

    case SEARCH_TRACK:
      return {
        ...state,
        searchedTrack: action.payload,
      };

    case SEARCH_ARTIST:
    return {
        ...state,
        searchedArtist: action.payload,
    };

    default:
      return state;
  }
};

export default reducer;
