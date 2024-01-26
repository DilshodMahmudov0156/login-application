import {createContext, useReducer} from "react";

const initialValue = {
    data: [],
    term: '',
    filter: ''
};

export const Context = createContext();

const reducer  = (state = initialValue, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'ON_LOGGER':
            // write some function !
            break;
        default:
            return { state }
    }
};

const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialValue);
    return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};
export default Provider;
