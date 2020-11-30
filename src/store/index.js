import React, {createContext, useReducer} from 'react'

const initialState = {
    popular: []
}

const reducer = (state, action) => {
    console.log(state, action)
    switch(action.type) {
        case "SET_POPULAR":
            return action.payload.popular
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
