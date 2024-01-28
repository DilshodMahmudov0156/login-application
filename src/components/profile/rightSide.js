import React from "react";

function RightSide({}) {

    const logOut = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <div className="right-side">
            <div className="profile-circle">
                <img src="" alt=""/>
            </div>


        </div>
    );
}

export default RightSide;