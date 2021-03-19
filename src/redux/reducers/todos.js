import { ADD_TODO, TOGGLE_TODO, SET_TODO } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TODO: {
      const { all, id } = action.payload;
      return {
        ...state,
        allIds: id,
        byIds: all
      };
    }
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content: content,
            completed: false,
            id: id
          }
        }
      };
    }
    default:
      return state;
  }
}