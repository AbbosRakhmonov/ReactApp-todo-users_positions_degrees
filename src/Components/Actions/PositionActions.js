export function ADD_POSITION(position) {
  return {
    type: "ADD_POSITION",
    payload: position,
  };
}
export function DELETE_POSITION(id) {
  return {
    type: "DELETE_POSITION",
    payload: id,
  };
}
export function UPDATE_POSITION(position) {
  return {
    type: "UPDATE_POSITION",
    payload: position,
  };
}
export function FILTER_POSITION(filter) {
  return {
    type: "FILTER_POSITION",
    payload: filter,
  };
}
