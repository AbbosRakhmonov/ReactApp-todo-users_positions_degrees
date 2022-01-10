const positions = [
  {
    id: 1,
    name: "Team Leader",
    salary: "15000",
  },
  {
    id: 2,
    name: "Manager",
    salary: "10000",
  },
  {
    id: 3,
    name: "Developer",
    salary: "5000",
  },
];
const initialState = {
  positions: positions,
  filtered: positions,
  headers: ["#", "Name", "Salary"],
  keyHeaders: ["id", "name", "salary"],
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

const positionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_POSITION":
      return {
        ...state,
        filtered: [...state.filtered, payload],
        positions: [...state.positions, payload],
      };
    case "DELETE_POSITION":
      return {
        ...state,
        filtered: state.filtered.filter((position) => position.id !== payload),
        positions: state.positions.filter(
          (position) => position.id !== payload
        ),
      };
    case "UPDATE_POSITION":
      return {
        ...state,
        filtered: state.filtered.map((position) =>
          position.id === payload.id ? payload : position
        ),
        positions: state.positions.map((position) =>
          position.id === payload.id ? payload : position
        ),
      };
    case "FILTER_POSITION":
      return {
        ...state,
        filtered: state.positions.filter((position) =>
          position.name.toLowerCase().includes(payload.toLowerCase())
        ),
      };
    default:
      return state;
  }
};
export default positionReducer;
