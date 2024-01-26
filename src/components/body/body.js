import React, {useContext} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProtectedRoute from "../protected-route/protectedRoute";
import Profile from "../profile/Profile";
import Login from "../login-page/Login";
import {Context} from "../../context/context";

function Body({}) {
    const { state, dispatch } = useContext(Context);

    return (
        <div className="my-body-tag">
            <Router>
                <Routes>
                    <Route element={<ProtectedRoute/>}>
                        <Route path="/profile" element={<Profile/>}/>
                    </Route>
                    <Route path="/" element={<Login/>}/>
                </Routes>
            </Router>

        </div>
    );
}

export default Body;