import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const AppContext = createContext();

const initialState = {
    searchInput: "",
    currVal: "",
    content: [],
    profilePic: ""
}


const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <AppContext.Provider value={{ ...state, dispatch }}>
        {children}
    </AppContext.Provider>
}
const useGlobalContext = () => {
    return useContext(AppContext);
}
export { AppProvider, useGlobalContext }