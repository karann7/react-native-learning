export const selectLibrary = (libraryId) => {
  let SELECT_LIBRARY = 'select_library';
  return {
    type: SELECT_LIBRARY,
    payload: libraryId
  };
};