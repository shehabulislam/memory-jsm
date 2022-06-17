const BUG_REMOVED = "BUG_REMOVED";
const BUG_ADDED = "BUG_ADDED";
const BUG_RESOLVED = "BUG_RESOLVED";

//actions
export const addBug = (description) => {
  return {
    type: BUG_ADDED,
    payload: {
      description,
    },
  };
};

export const removeBug = (id) => {
  return {
    type: BUG_REMOVED,
    payload: {
      id,
    },
  };
};

export const resolveBug = (id) => {
  return {
    type: BUG_RESOLVED,
    payload: {
      id,
    },
  };
};

//reducer
let lastIndex = 0;
export default (state = [], action) => {
  switch (action.type) {
    case BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastIndex,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case BUG_REMOVED:
      return state.filter((item) => item.id !== action.payload.id);
    case BUG_RESOLVED:
      return state.map((bug) => (bug.id !== action.payload.id ? bug : { ...bug, resolved: true }));
    default:
      return state;
  }
};
