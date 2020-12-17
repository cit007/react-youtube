import React, { createContext, useReducer } from "react";

const initialState = {
  popular: [],
  detail: {},
  side: [],
  search: [],
};

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "SET_POPULAR":
      // set popular var
      return { ...state, popular: action.payload.popular };
    case "SET_DETAIL":
      return { ...state, detail: action.payload.detail };
    case "SET_RELATED":
      return { ...state, side: action.payload.side };
    case "SET_SEARCH":
      return { ...state, search: action.payload.search };
    default:
      return state;
  }
};

export const Store = createContext({
  globalState: initialState,
  setGlobalState: () => null,
});

export const StoreProvider = ({ children }) => {
  // @SEE state / dispatch(call reducer)
  const [globalState, setGlobalState] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ globalState, setGlobalState }}>
      {children}
    </Store.Provider>
  );
};
