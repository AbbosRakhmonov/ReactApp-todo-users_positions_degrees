const users = [
  {
    id: 1,
    name: "John",
    lastName: "Doe",
    phone: "123456789",
    positionId: 1,
    degreeId: 1,
  },
  {
    id: 2,
    name: "IslomUmar",
    lastName: "Tilovov",
    phone: "123456789",
    positionId: 2,
    degreeId: 1,
  },
  {
    id: 3,
    name: "Doston",
    lastName: "Ergashov",
    phone: "123456789",
    positionId: 3,
    degreeId: 2,
  },
];
const initialState = {
  users: users,
  filtered: users,
  headers: ["#", "Name", "Last Name", "Phone", "Position", "Degree"],
  keyHeaders: ["id", "name", "lastName", "phone", "positionId", "degreeId"],
  actions: [
    {
      id: 1,
      name: "Edit",
      icon: "edit",
      color: "secondary",
    },
    {
      id: 2,
      name: "Delete",
      icon: "delete",
      color: "danger",
    },
  ],
};

function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "ADD_USER":
      return {
        ...state,
        filtered: [...state.filtered, payload],
        users: [...state.users, payload],
      };
    case "DELETE_USER":
      return {
        ...state,
        filtered: state.filtered.filter((user) => user.id !== payload),
        users: state.users.filter((user) => user.id !== payload),
      };
    case "UPDATE_USER":
      return {
        ...state,
        filtered: state.filtered.map((user) =>
          user.id === payload.id ? payload : user
        ),
        users: state.users.map((user) =>
          user.id === payload.id ? payload : user
        ),
      };
    case "FILTER_USER":
      return {
        ...state,
        filtered: state.users.filter((user) =>
          user.name.toLowerCase().includes(payload.toLowerCase())
        ),
      };
    default:
      return state;
  }
}

export default userReducer;
