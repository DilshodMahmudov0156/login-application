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
                <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt=""/>
            </div>
            <button className="profile-image-editor">
                <i className="bi bi-image"></i> <i className="bi bi-arrow-left-right"></i> <i className="bi bi-image"></i>
            </button>


        </div>
    );
}

export default RightSide;