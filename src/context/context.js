import { createContext, useReducer } from "react";
import { set, ref } from "firebase/database";
import { db } from "../fierbase/firebaseConfig";
import { v4 as uuidv4 } from "uuid";

const initialValue = {
    data: [],
    myData: [],
    emailName: '',
    emailPassword: ''
};

export const Context = createContext();

const reducer  = (state = initialValue, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'SET_ALL_DATA':
            return { ...state, data: payload}
            break;
        case 'PUT_PHOTO_TO_PROFILE':
            return (
                set(ref(db, `/${uuidv4()}`), {id: payload.id, url: payload.url, name: payload.name})
            )
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
