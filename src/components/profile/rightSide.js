import React from "react";

function RightSide({}) {

    const logOut = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <div className="right-side">
            <div className="profile-circle">
                {/*<img src="https://neweralive.na/storage/images/2023/may/lloyd-sikeba.jpg" alt=""/>*/}
                <img src="" alt=""/>
            </div>
            <button className="profile-image-editor">
                <i className="bi bi-image"></i> <i className="bi bi-arrow-left-right"></i> <i className="bi bi-image"></i>
            </button>


        </div>
    );
}

export default RightSide;