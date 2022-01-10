const degrees = [
  {
    id: 1,
    name: "Junior",
    bonus: "10%",
  },
  {
    id: 2,
    name: "Middle",
    bonus: "15%",
  },
  {
    id: 3,
    name: "Senior",
    bonus: "30%",
  },
];
const initialState = {
  degrees: degrees,
  filtered: degrees,
  headers: ["#", "Name", "Bonus"],
  keyHeaders: ["id", "name", "bonus"],
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

const degreeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DEGREE":
      return {
        ...state,
        filtered: [...state.filtered, action.payload],
        degrees: [...state.degrees, action.payload],
      };
    case "DELETE_DEGREE":
      return {
        ...state,
        filtered: state.filtered.filter(
          (degree) => degree.id !== action.payload
        ),
        degrees: state.degrees.filter((degree) => degree.id !== action.payload),
      };
    case "UPDATE_DEGREE":
      return {
        ...state,
        filtered: state.filtered.map((degree) =>
          degree.id === action.payload.id ? action.payload : degree
        ),
        degrees: state.degrees.map((degree) =>
          degree.id === action.payload.id ? action.payload : degree
        ),
      };
    case "FILTER_DEGREE":
      return {
        ...state,
        filtered: state.degrees.filter((degree) =>
          degree.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    default:
      return state;
  }
};

export default degreeReducer;
