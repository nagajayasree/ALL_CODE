import { createStore } from "redux";

const initialState = {
  items: [
    { id: "123", text: "go to market" },
    { id: "234", text: "finish work" },
  ],
};

//reducer
function todoList(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const { id, text } = action.payload;
      const addId = Math.random(),
        addText = action.text;
      return {
        ...state,
        items: [...state.items, addId, addText],
      };
    }
    case "DELETE_ITEM": {
      const { id } = action.payload;
      const filteredItems = this.state.items.filter((item) => item.id !== id);
      return {
        ...state,
        items: filteredItems,
      };
    }
    default:
      return state;
  }
}

//store
export const store = createStore(todoList);

//actions
export const addItem = (text) => ({
  type: "ADD_ITEM",
  payload: {
    text,
  },
});

export const delItem = (id) => ({
  type: "DELETE_ITEM",
  payload: {
    id,
  },
});
