import React, {createContext, useReducer} from 'react'

const initialState = {
    popular: [],
    detail: {}
}

const reducer = (state, action) => {
    console.log(state, action)
    switch(action.type) {
        case "SET_POPULAR":
            // set popular var
            return {popular:action.payload.popular}
        case "SET_DETAIL":
            return {detail:action.payload.selected}
        default:
            return state
    }
}

export const Store = createContext({
    globalState: initialState,
    setGlobalState: () => null
})

export const StoreProvider = ({children}) => {
    // @SEE state / dispatch(call reducer)
    const [globalState, setGlobalState] = useReducer(reducer, initialState)
    return (
        <Store.Provider value={{globalState, setGlobalState}}>
            {children}
        </Store.Provider>
    )
}
