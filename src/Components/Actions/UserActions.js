export function ADD_USER(newUser) {
  return {
    type: "ADD_USER",
    payload: newUser,
  };
}
export function DELETE_USER(id) {
  return {
    type: "DELETE_USER",
    payload: id,
  };
}
export function UPDATE_USER(user) {
  return {
    type: "UPDATE_USER",
    payload: user,
  };
}
export function FILTER_USER(filter) {
  return {
    type: "FILTER_USER",
    payload: filter,
  };
}
