const reducer = (state, action) => {
    if (action.type === "USER_SEARCH") {
        return {
            ...state,
            searchInput: action.payload
        }
    }
    if (action.type === "SETINPUTDATA") {
        return {
            ...state,
            searchData: action.payload
        }
    }
    if (action.type === "INPUT_CHANGE") {
        return {
            ...state,
            currVal: action.payload
        }
    }
    if (action.type === "CONTENT") {
        return {
            ...state,
            content: action.payload
        }
    }
    if (action.type === "USERPIC") {
        return {
            ...state,
            profilePic: action.payload
        }
    }
}
export default reducer;