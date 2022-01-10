export function ADD_DEGREE(degree) {
  return {
    type: "ADD_DEGREE",
    payload: degree,
  };
}
export function DELETE_DEGREE(id) {
  return {
    type: "DELETE_DEGREE",
    payload: id,
  };
}
export function UPDATE_DEGREE(degree) {
  return {
    type: "UPDATE_DEGREE",
    payload: degree,
  };
}
export function FILTER_DEGREE(filter) {
  return {
    type: "FILTER_DEGREE",
    payload: filter,
  };
}
