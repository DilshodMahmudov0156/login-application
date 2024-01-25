import React from 'react';
import "./body.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProtectedRoute from "../protected-route/protectedRoute";
import Profile from "../profile/Profile";
import Login from "../login-page/Login";

function Body({}) {
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