export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      if(action.payload === state){
        return null;
      } else {
      return action.payload
      }
    default:
      return state;
  }
};