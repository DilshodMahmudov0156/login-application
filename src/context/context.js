import {createContext, useReducer} from "react";

const initialValue = {
    data: [],
    myData: [],
    profile:{
        img: '',
        description: '',
        userEmail: ''
    },
    emailValue: '',
    emailPasswordValue: ''
};


export const Context = createContext();

const reducer  = (state = initialValue, action) => {
    const {type, payload} = action;
    switch (type) {
        case "SET_DATA":
            return { ...state, data: payload};
        case 'PUT_PHOTO_TO_PROFILE':
            // return state;
        default:
            // return { state }
    }
};

const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialValue);
    return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};
export default Provider;
