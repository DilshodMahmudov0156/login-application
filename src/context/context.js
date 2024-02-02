import { createContext, useReducer } from "react";
import { set, ref } from "firebase/database";
import { db } from "../fierbase/firebaseConfig";
import { v4 as uuidv4 } from "uuid";

const initialValue = {
    data: [],
    emailName: '',
    emailPassword: ''
};

export const Context = createContext();

const reducer  = (state = initialValue, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'ON_Something':
            // write some function !
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
