export const initialState = {
  // How the state initially looks like
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // REMOVE after finished developing

  discover_weekly: null,
};

// state => How the state currently looks like, what values it contains
// action => what it is going to perform, e.g. setUser, setName, setSongList
const reducer = (state, action) => {
  console.log(action);

  //  action => type = type of the action, [payload // contains user data]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
